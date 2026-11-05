import { z } from "zod";

/** Languages a post can be written in (each language version is its own post). */
export const postLocales = ["en", "ar", "fr", "es"] as const;

/** Server-side validation for creating/updating a blog post. */
export const postInputSchema = z.object({
  locale: z.enum(postLocales, { message: "Choose the article language." }),
  title: z.string().trim().min(1, "Title is required.").max(200, "Title is too long."),
  slug: z.string().trim().max(200, "Slug is too long.").optional().default(""),
  excerpt: z.string().trim().max(400, "Excerpt is too long.").optional().default(""),
  content: z.string().default(""),
  // Usually one of the site's categories; older posts may keep their own label.
  category: z.string().trim().max(100, "Category is too long.").optional().default(""),
  cover_image_url: z
    .union([
      z.string().url("Cover image URL is invalid."),
      // Images stored on the site itself, e.g. /images/blog/cover.jpg
      z.string().regex(/^\/[^\s]+$/, "Cover image URL is invalid."),
      z.literal(""),
    ])
    .optional()
    .default(""),
  seo_title: z.string().trim().max(200, "SEO title is too long.").optional().default(""),
  seo_description: z
    .string()
    .trim()
    .max(400, "SEO description is too long.")
    .optional()
    .default(""),
  /** Publish date as an ISO string (converted in the browser), or empty. */
  published_at: z
    .union([z.string().datetime({ offset: true, message: "Publish date is invalid." }), z.literal("")])
    .optional()
    .default(""),
});

export type PostInput = z.infer<typeof postInputSchema>;

/** Convert empty-string fields to null for nullable DB columns. */
export function emptyToNull(value: string): string | null {
  return value === "" ? null : value;
}
