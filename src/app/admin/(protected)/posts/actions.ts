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

/** Find a unique slug, appending -2, -3, … when needed (ignoring the post itself). */
async function ensureUniqueSlug(supabase: DB, base: string, excludeId?: string): Promise<string> {
  const root = slugify(base) || "post";
  let attempt = 1;

  for (;;) {
    const candidate = attempt === 1 ? root : `${root}-${attempt}`;
    const { data, error } = await supabase
      .from("posts")
      .select("id")
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

function revalidateBlog(slug?: string) {
  revalidatePath("/blog");
  if (slug) revalidatePath(`/blog/${slug}`);
  revalidatePath(adminRoutes.posts);
}

export async function createPost(_prev: PostFormState, formData: FormData): Promise<PostFormState> {
  const parsed = parseForm(formData);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input." };
  }
  const input = parsed.data;

  const supabase = await createClient();
  const slug = await ensureUniqueSlug(supabase, input.slug || input.title);

  const { data, error } = await supabase
    .from("posts")
    .insert({
      title: input.title,
      slug,
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

  revalidateBlog(slug);
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
  const slug = await ensureUniqueSlug(supabase, input.slug || input.title, id);

  const { error } = await supabase
    .from("posts")
    .update({
      title: input.title,
      slug,
      excerpt: emptyToNull(input.excerpt),
      content: input.content,
      category: emptyToNull(input.category),
      cover_image_url: emptyToNull(input.cover_image_url),
      seo_title: emptyToNull(input.seo_title),
      seo_description: emptyToNull(input.seo_description),
    })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidateBlog(slug);
  return { error: null };
}

export async function publishPost(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  const { data: existing } = await supabase
    .from("posts")
    .select("slug, published_at")
    .eq("id", id)
    .single();

  await supabase
    .from("posts")
    .update({
      status: "published",
      // Set the publish date on first publish; keep it on re-publish.
      published_at: existing?.published_at ?? new Date().toISOString(),
    })
    .eq("id", id);

  revalidateBlog(existing?.slug);
}

export async function unpublishPost(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  const { data: existing } = await supabase.from("posts").select("slug").eq("id", id).single();

  await supabase.from("posts").update({ status: "draft" }).eq("id", id);
  revalidateBlog(existing?.slug);
}

export async function deletePost(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  await supabase.from("posts").delete().eq("id", id);

  revalidateBlog();
  redirect(adminRoutes.posts);
}
