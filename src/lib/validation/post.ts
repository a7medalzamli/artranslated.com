import { z } from "zod";
import { postCategories } from "@/content/postCategories";

/** Server-side validation for creating/updating a blog post. */
export const postInputSchema = z.object({
  title: z.string().trim().min(1, "Title is required.").max(200, "Title is too long."),
  slug: z.string().trim().max(200, "Slug is too long.").optional().default(""),
  excerpt: z.string().trim().max(400, "Excerpt is too long.").optional().default(""),
  content: z.string().default(""),
  category: z
    .union([z.enum(postCategories), z.literal("")])
    .optional()
    .default(""),
  cover_image_url: z
    .union([z.string().url("Cover image URL is invalid."), z.literal("")])
    .optional()
    .default(""),
  seo_title: z.string().trim().max(200, "SEO title is too long.").optional().default(""),
  seo_description: z
    .string()
    .trim()
    .max(400, "SEO description is too long.")
    .optional()
    .default(""),
});

export type PostInput = z.infer<typeof postInputSchema>;

/** Convert empty-string fields to null for nullable DB columns. */
export function emptyToNull(value: string): string | null {
  return value === "" ? null : value;
}
