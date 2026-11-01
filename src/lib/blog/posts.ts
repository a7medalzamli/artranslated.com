import "server-only";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/database.types";
import { codePosts } from "@/content/blogPosts";
import type { Locale } from "@/i18n";

export type Post = Database["public"]["Tables"]["posts"]["Row"];

/** Articles written in code (one version per language), shaped like database posts. */
function codePostsFor(locale: string): Post[] {
  return codePosts.map((p) => {
    const text = p.text[locale as Locale] ?? p.text.en;
    return {
      id: `code-${p.slug}`,
      title: text.title,
      slug: p.slug,
      excerpt: text.excerpt,
      content: text.content,
      category: p.category,
      cover_image_url: p.cover,
      status: "published",
      published_at: p.publishedAt,
      seo_title: text.seoTitle,
      seo_description: text.excerpt,
      created_at: p.publishedAt,
      updated_at: p.updatedAt,
    } as Post;
  });
}

/** Published posts (admin panel + code articles), newest first. Optionally filtered by category. */
export async function getPublishedPosts(category?: string, locale = "en"): Promise<Post[]> {
  const fromCode = codePostsFor(locale).filter((p) => !category || p.category === category);
  // If the database is unreachable, still show the code articles.
  const fromDb = await getDbPublishedPosts(category).catch(() => [] as Post[]);
  const slugs = new Set(fromCode.map((p) => p.slug));
  return [...fromCode, ...fromDb.filter((p) => !slugs.has(p.slug))].sort((a, b) =>
    (b.published_at ?? "").localeCompare(a.published_at ?? ""),
  );
}

async function getDbPublishedPosts(category?: string): Promise<Post[]> {
  const supabase = await createClient();
  let query = supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

/** A single published post by slug, or null if not found / not published. */
export async function getPublishedPostBySlug(slug: string, locale = "en"): Promise<Post | null> {
  const fromCode = codePostsFor(locale).find((p) => p.slug === slug);
  if (fromCode) return fromCode;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw error;
  return data;
}

/** All posts (draft + published) for the admin list. Requires an admin session. */
export async function getAllPosts(): Promise<Post[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

/** A single post by id for the admin editor. Requires an admin session. */
export async function getPostById(id: string): Promise<Post | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data;
}
