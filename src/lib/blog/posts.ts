import "server-only";
import { createClient } from "@/lib/supabase/server";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/env";
import type { Database } from "@/lib/supabase/database.types";

export type Post = Database["public"]["Tables"]["posts"]["Row"];

/**
 * Every article is written in the admin panel. Each language version is its own
 * post (own title, text and date); versions of one article share the same slug.
 * A post is live once it is published AND its publish date has arrived, so a
 * future date schedules it.
 */

/** Published posts in one language, newest first. Optionally filtered by category. */
export async function getPublishedPosts(category?: string, locale = "en"): Promise<Post[]> {
  let query = publicClient()
    .from("posts")
    .select("*")
    .eq("locale", locale)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;
  // If the database is unreachable, show an empty blog rather than an error page.
  if (error) return [];
  return data ?? [];
}

/** A single live post by slug in one language, or null. */
export async function getPublishedPostBySlug(slug: string, locale = "en"): Promise<Post | null> {
  const { data, error } = await publicClient()
    .from("posts")
    .select("*")
    .eq("locale", locale)
    .eq("slug", slug)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .maybeSingle();

  if (error) throw error;
  return data;
}

/** Languages in which an article (by slug) is live right now. */
export async function publishedLocalesFor(slug: string, allLocales: readonly string[]): Promise<string[]> {
  const { data, error } = await publicClient()
    .from("posts")
    .select("locale")
    .eq("slug", slug)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString());

  if (error) return [];
  const live = new Set((data ?? []).map((row) => row.locale));
  return allLocales.filter((l) => live.has(l));
}

/** All posts (draft + published, every language) for the admin list. Requires an admin session. */
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

/**
 * Cookie-free client for public reads. Reading cookies would force every page
 * that lists articles to be rebuilt on each visit (2–3 s); without them the
 * pages are pre-built and cached. Published posts are readable anonymously.
 */
function publicClient() {
  return createSupabaseClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: { persistSession: false },
  });
}
