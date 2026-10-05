"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { siteSettingsSchema, type SiteSettings } from "@/lib/content/settings";

export type SaveState = { ok: boolean; error: string | null };

export async function saveSiteSettings(settings: SiteSettings): Promise<SaveState> {
  const parsed = siteSettingsSchema.safeParse(settings);
  if (!parsed.success) {
    return { ok: false, error: "Some fields are invalid — please check and try again." };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("site_content")
    .upsert(
      { key: "settings", data: parsed.data as unknown as Record<string, unknown> },
      { onConflict: "key" },
    );

  if (error) {
    return {
      ok: false,
      error: "Could not save. Make sure the site_content migration has been applied in Supabase.",
    };
  }

  // Revalidate the whole site (header/footer live in the shared layout).
  revalidatePath("/", "layout");
  return { ok: true, error: null };
}
