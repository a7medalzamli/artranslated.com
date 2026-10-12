import { describe, it, expect } from "vitest";
import { deepMerge } from "@/lib/cms/db";
import { getAtPath, setAtPath, CMS_PAGES } from "@/lib/cms/registry";

/**
 * These verify the logic behind the mandatory CMS guarantees:
 *   - editing one locale/page/section never affects another,
 *   - a missing CMS value falls back to the default (never cross-locale),
 *   - images, links and SEO fields override independently.
 */

describe("deepMerge — per-locale fallback", () => {
  it("overrides given fields and keeps the rest", () => {
    const base = { hero: { title: "default", label: "x" }, why: { title: "W" } };
    const merged = deepMerge(base, { hero: { title: "edited" } });
    expect(merged.hero.title).toBe("edited");
    expect(merged.hero.label).toBe("x"); // untouched field falls back to default
    expect(merged.why.title).toBe("W"); // untouched section falls back to default
  });

  it("replaces arrays wholesale (lists/cards override independently)", () => {
    expect(deepMerge({ items: [1, 2, 3] }, { items: [9] }).items).toEqual([9]);
  });

  it("changing an image URL in an override does not change others", () => {
    const base = { a: { image: "/a.jpg" }, b: { image: "/b.jpg" } };
    const merged = deepMerge(base, { a: { image: "/new.jpg" } });
    expect(merged.a.image).toBe("/new.jpg");
    expect(merged.b.image).toBe("/b.jpg");
  });

  it("returns the default when there is no override (missing row, never cross-locale)", () => {
    const base = { a: 1 };
    expect(deepMerge(base, null)).toBe(base);
    expect(deepMerge(base, undefined)).toBe(base);
  });
});

describe("path editing — page/section/SEO isolation", () => {
  it("editing one page's heading leaves sibling pages unchanged", () => {
    const doc = {
      about: { title: "A" },
      services: { title: "S" },
      serviceDetail: { technical: { title: "T" } },
      seo: { about: { title: "SA" }, services: { title: "SS" } },
    };
    const next = setAtPath(doc, "about.title", "A2");
    expect(getAtPath(next, "about.title")).toBe("A2");
    expect(getAtPath(next, "services.title")).toBe("S");
    expect(getAtPath(next, "serviceDetail.technical.title")).toBe("T");
    expect(getAtPath(next, "seo.about.title")).toBe("SA");
  });

  it("editing one page's SEO title does not change another page's SEO", () => {
    const doc = { seo: { about: { title: "A" }, services: { title: "S" } } };
    const next = setAtPath(doc, "seo.about.title", "A2");
    expect(getAtPath(next, "seo.about.title")).toBe("A2");
    expect(getAtPath(next, "seo.services.title")).toBe("S");
  });

  it("does not mutate the original document", () => {
    const doc = { about: { title: "A" } };
    setAtPath(doc, "about.title", "B");
    expect(doc.about.title).toBe("A");
  });

  it("path '' replaces the whole document (home store)", () => {
    expect(setAtPath({ a: 1 }, "", { b: 2 })).toEqual({ b: 2 });
  });
});

describe("registry covers every public page", () => {
  it("includes the key routes and has unique page ids", () => {
    const ids = CMS_PAGES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length); // unique
    const routes = CMS_PAGES.map((p) => p.route);
    for (const r of ["/", "/about", "/services", "/services/technical", "/process", "/contact"]) {
      expect(routes).toContain(r);
    }
  });
});
