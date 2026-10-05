import { createClient } from "@supabase/supabase-js";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/env";
import { defaultSiteSettings, siteSettingsSchema, type SiteSettings } from "./settings";

/**
 * Reads global site settings (name, logo, footer tagline, social links).
 *
 * Uses a cookie-less anon client so the shared layout stays cacheable (does not
 * force every page to be dynamic). Content updates are pushed live by
 * revalidating the layout on save. Falls back to defaults on any error.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const supabase = createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
      auth: { persistSession: false },
    });
    const { data, error } = await supabase
      .from("site_content")
      .select("data")
      .eq("key", "settings")
      .maybeSingle();

    if (error || !data) return defaultSiteSettings;

    const parsed = siteSettingsSchema.safeParse(data.data);
    return parsed.success ? parsed.data : defaultSiteSettings;
  } catch {
    return defaultSiteSettings;
  }
}
