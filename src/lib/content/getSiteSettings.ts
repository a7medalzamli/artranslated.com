import { createClient } from "@supabase/supabase-js";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/env";
import { defaultSiteSettings, siteSettingsSchema, type SiteSettings } from "./settings";
import { site } from "@/lib/site";

/**
 * The footer's email icon was replaced by Telegram. Settings saved before that
 * change still list "email", so swap it for the Telegram link.
 */
/** A saved copy may still point at the old logo file; use the new one instead. */
function withNewLogo(settings: SiteSettings): SiteSettings {
  return (settings.logo === "/logo.jpg" || settings.logo === "/logo-tia.png") ? { ...settings, logo: defaultSiteSettings.logo } : settings;
}

/**
 * WhatsApp links only work as wa.me/<country code><number>, with no "+" or "00"
 * prefix. Fix a saved link like wa.me/00970… so the button opens a chat.
 */
function withValidWhatsApp(settings: SiteSettings): SiteSettings {
  return {
    ...settings,
    socials: settings.socials.map((s) => ({
      ...s,
      href: s.href.replace(/^(https:\/\/wa\.me\/)(?:\+|00)/, "$1"),
    })),
  };
}

function withTelegram(settings: SiteSettings): SiteSettings {
  if (settings.socials.some((s) => s.platform === "telegram")) return settings;
  return {
    ...settings,
    socials: settings.socials.map((s) =>
      s.platform === "email"
        ? { platform: "telegram" as const, label: "Telegram", href: site.contact.telegram }
        : s,
    ),
  };
}

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
    return parsed.success ? withValidWhatsApp(withTelegram(withNewLogo(parsed.data))) : defaultSiteSettings;
  } catch {
    return defaultSiteSettings;
  }
}
