import { describe, expect, it } from "vitest";
import { slugify, readingTimeMinutes, readingTimeLabel, formatDate } from "@/lib/blog/format";

describe("slugify", () => {
  it("lowercases and hyphenates", () => {
    expect(slugify("What a TEP Workflow Includes")).toBe("what-a-tep-workflow-includes");
  });

  it("strips punctuation and collapses separators", () => {
    expect(slugify("  Why I sign the NDA — before your file! ")).toBe(
      "why-i-sign-the-nda-before-your-file",
    );
  });

  it("handles multiple spaces and trailing hyphens", () => {
    expect(slugify("Hello,   World---")).toBe("hello-world");
  });
});

describe("readingTimeMinutes", () => {
  it("returns at least 1 minute", () => {
    expect(readingTimeMinutes("short")).toBe(1);
  });

  it("scales with word count (~200 wpm)", () => {
    const words = Array.from({ length: 600 }, () => "word").join(" ");
    expect(readingTimeMinutes(words)).toBe(3);
  });
});

describe("formatDate", () => {
  it("returns empty string for null", () => {
    expect(formatDate(null)).toBe("");
  });

  it("formats an ISO date", () => {
    expect(formatDate("2026-09-19T10:00:00.000Z")).toContain("2026");
  });
});

describe("formatDate in other languages", () => {
  it("uses Arabic month names with Western digits", () => {
    expect(formatDate("2026-11-01T09:00:00Z", "ar")).toBe("1 نوفمبر 2026");
  });

  it("uses French and Spanish month names", () => {
    expect(formatDate("2026-11-01T09:00:00Z", "fr")).toBe("1 novembre 2026");
    expect(formatDate("2026-11-01T09:00:00Z", "es")).toBe("1 de noviembre de 2026");
  });
});

describe("readingTimeLabel", () => {
  it("follows Arabic grammar", () => {
    expect(readingTimeLabel(1, "ar", "")).toBe("قراءة في دقيقة واحدة");
    expect(readingTimeLabel(2, "ar", "")).toBe("قراءة في دقيقتين");
    expect(readingTimeLabel(5, "ar", "")).toBe("قراءة في 5 دقائق");
    expect(readingTimeLabel(12, "ar", "")).toBe("قراءة في 12 دقيقة");
  });

  it("uses the label in other languages", () => {
    expect(readingTimeLabel(3, "en", "min read")).toBe("3 min read");
  });
});
