import { describe, expect, it } from "vitest";
import { signInSchema } from "@/lib/validation/auth";
import { quoteRequestSchema } from "@/lib/validation/quote";
import { postInputSchema } from "@/lib/validation/post";

describe("signInSchema", () => {
  it("accepts a valid email and password", () => {
    const result = signInSchema.safeParse({ email: "a@b.com", password: "secret" });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = signInSchema.safeParse({ email: "nope", password: "secret" });
    expect(result.success).toBe(false);
  });

  it("rejects an empty password", () => {
    const result = signInSchema.safeParse({ email: "a@b.com", password: "" });
    expect(result.success).toBe(false);
  });
});

describe("quoteRequestSchema", () => {
  const valid = { name: "Ada", email: "ada@example.com", language_pair: "English → Arabic" };

  it("accepts the minimum required fields", () => {
    const result = quoteRequestSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("defaults optional fields", () => {
    const result = quoteRequestSchema.parse(valid);
    expect(result.specialization).toBe("");
    expect(result.nda_requested).toBe(false);
  });

  it("requires a name", () => {
    const result = quoteRequestSchema.safeParse({ ...valid, name: "" });
    expect(result.success).toBe(false);
  });

  it("requires a valid email", () => {
    const result = quoteRequestSchema.safeParse({ ...valid, email: "bad" });
    expect(result.success).toBe(false);
  });

  it("requires a language pair", () => {
    const result = quoteRequestSchema.safeParse({ ...valid, language_pair: "" });
    expect(result.success).toBe(false);
  });
});

describe("postInputSchema", () => {
  it("requires a title", () => {
    const result = postInputSchema.safeParse({ title: "" });
    expect(result.success).toBe(false);
  });

  it("accepts a valid category and rejects an unknown one", () => {
    expect(postInputSchema.safeParse({ title: "T", category: "Workflow" }).success).toBe(true);
    expect(postInputSchema.safeParse({ title: "T", category: "Nonsense" }).success).toBe(false);
  });

  it("rejects an invalid cover image URL but allows empty", () => {
    expect(postInputSchema.safeParse({ title: "T", cover_image_url: "not-a-url" }).success).toBe(
      false,
    );
    expect(postInputSchema.safeParse({ title: "T", cover_image_url: "" }).success).toBe(true);
  });
});
