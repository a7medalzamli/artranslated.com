"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/database.types";
import { postInputSchema, emptyToNull } from "@/lib/validation/post";
import { slugify } from "@/lib/blog/format";
import { adminRoutes } from "@/lib/routes";

export type PostFormState = { error: string | null };

type DB = SupabaseClient<Database>;

/** Find a slug unique within one language, appending -2, -3, … when needed (ignoring the post itself). */
async function ensureUniqueSlug(supabase: DB, base: string, locale: string, excludeId?: string): Promise<string> {
  const root = slugify(base) || "post";
  let attempt = 1;

  for (;;) {
    const candidate = attempt === 1 ? root : `${root}-${attempt}`;
    const { data, error } = await supabase
      .from("posts")
      .select("id")
      .eq("locale", locale)
      .eq("slug", candidate)
      .limit(1);
    if (error) throw error;

    const conflict = (data ?? []).some((row) => row.id !== excludeId);
    if (!conflict) return candidate;
    attempt += 1;
  }
}

function parseForm(formData: FormData) {
  return postInputSchema.safeParse({
    locale: formData.get("locale") ?? "",
    published_at: formData.get("published_at") ?? "",
    title: formData.get("title") ?? "",
    slug: formData.get("slug") ?? "",
    excerpt: formData.get("excerpt") ?? "",
    content: formData.get("content") ?? "",
    category: formData.get("category") ?? "",
    cover_image_url: formData.get("cover_image_url") ?? "",
    seo_title: formData.get("seo_title") ?? "",
    seo_description: formData.get("seo_description") ?? "",
  });
}

/** Refresh every page that can list articles (blog, article pages, related guides, sitemap). */
function revalidateBlog() {
  revalidatePath("/", "layout");
  revalidatePath(adminRoutes.posts);
}

export async function createPost(_prev: PostFormState, formData: FormData): Promise<PostFormState> {
  const parsed = parseForm(formData);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input." };
  }
  const input = parsed.data;

  const supabase = await createClient();
  const slug = await ensureUniqueSlug(supabase, input.slug || input.title, input.locale);

  const { data, error } = await supabase
    .from("posts")
    .insert({
      locale: input.locale,
      title: input.title,
      slug,
      published_at: emptyToNull(input.published_at),
      excerpt: emptyToNull(input.excerpt),
      content: input.content,
      category: emptyToNull(input.category),
      cover_image_url: emptyToNull(input.cover_image_url),
      seo_title: emptyToNull(input.seo_title),
      seo_description: emptyToNull(input.seo_description),
      status: "draft",
    })
    .select("id")
    .single();

  if (error) return { error: error.message };

  revalidateBlog();
  redirect(`${adminRoutes.posts}/${data.id}`);
}

export async function updatePost(_prev: PostFormState, formData: FormData): Promise<PostFormState> {
  const id = String(formData.get("id") ?? "");
  if (!id) return { error: "Missing post id." };

  const parsed = parseForm(formData);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input." };
  }
  const input = parsed.data;

  const supabase = await createClient();
  const slug = await ensureUniqueSlug(supabase, input.slug || input.title, input.locale, id);
  // A published post always needs a date; an empty date on a draft means "publish now when I click Publish".
  const { data: current } = await supabase.from("posts").select("status").eq("id", id).single();
  const publishedAt =
    input.published_at || (current?.status === "published" ? new Date().toISOString() : null);

  const { error } = await supabase
    .from("posts")
    .update({
      locale: input.locale,
      title: input.title,
      slug,
      published_at: publishedAt,
      excerpt: emptyToNull(input.excerpt),
      content: input.content,
      category: emptyToNull(input.category),
      cover_image_url: emptyToNull(input.cover_image_url),
      seo_title: emptyToNull(input.seo_title),
      seo_description: emptyToNull(input.seo_description),
    })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidateBlog();
  return { error: null };
}

export async function publishPost(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  const { data: existing } = await supabase
    .from("posts")
    .select("published_at")
    .eq("id", id)
    .single();

  await supabase
    .from("posts")
    .update({
      status: "published",
      // Keep a date already set (a future date schedules the post); otherwise publish now.
      published_at: existing?.published_at ?? new Date().toISOString(),
    })
    .eq("id", id);

  revalidateBlog();
}

export async function unpublishPost(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  await supabase.from("posts").update({ status: "draft" }).eq("id", id);
  revalidateBlog();
}

export async function deletePost(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  await supabase.from("posts").delete().eq("id", id);

  revalidateBlog();
  redirect(adminRoutes.posts);
}
