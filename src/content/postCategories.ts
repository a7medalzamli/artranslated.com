/** Fixed set of blog categories (validated in the app rather than a DB table). */
export const postCategories = [
  "Workflow",
  "Terminology",
  "Confidentiality",
  "Audiovisual",
  "Localization",
  "AI & data",
] as const;

export type PostCategory = (typeof postCategories)[number];

export function isPostCategory(value: string): value is PostCategory {
  return (postCategories as readonly string[]).includes(value);
}
