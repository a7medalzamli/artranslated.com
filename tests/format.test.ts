import { describe, expect, it } from "vitest";
import { slugify, readingTimeMinutes, formatDate } from "@/lib/blog/format";

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
