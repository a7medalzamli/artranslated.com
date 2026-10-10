"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export type UploadResult = { url: string | null; error: string | null };

/**
 * Uploads an image to the public `post-images` bucket on behalf of the admin.
 * Runs with the service role (so it doesn't depend on storage RLS policies), but
 * first verifies the caller is an authenticated admin.
 */
export async function uploadImageAction(formData: FormData): Promise<UploadResult> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return { url: null, error: "Not authorized." };
  } catch {
    return { url: null, error: "Not authorized." };
  }

  const file = formData.get("file");
  if (!(file instanceof File)) return { url: null, error: "No file provided." };
  if (!file.type.startsWith("image/")) return { url: null, error: "Please choose an image file." };
  if (file.size > 5 * 1024 * 1024) return { url: null, error: "Image must be 5 MB or smaller." };

  const admin = createAdminClient();
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `site/${crypto.randomUUID()}.${ext}`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  const { error } = await admin.storage
    .from("post-images")
    .upload(path, bytes, { contentType: file.type });
  if (error) return { url: null, error: error.message };

  const url = admin.storage.from("post-images").getPublicUrl(path).data.publicUrl;
  return { url, error: null };
}
