import { createClient } from "@supabase/supabase-js";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/env";

/**
 * CMS content is stored in the existing `site_content` table under explicit
 * per-page, per-locale keys: `cms:<pageId>:<locale>`. This keeps page identity
 * and locale explicit and independent — editing one (page, locale) row never
 * affects any other.
 */
export function cmsKey(pageId: string, locale: string): string {
  return `cms:${pageId}:${locale}`;
}

/** Cookie-less anon client, so public reads stay cacheable (like getSiteSettings). */
function anonClient() {
  return createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: { persistSession: false },
  });
}

type Json = Record<string, unknown>;

/** Read one CMS row's `data`, or null if missing/unavailable. */
export async function readCmsRow(pageId: string, locale: string): Promise<Json | null> {
  try {
    const supabase = anonClient();
    const { data, error } = await supabase
      .from("site_content")
      .select("data")
      .eq("key", cmsKey(pageId, locale))
      .maybeSingle();
    if (error || !data) return null;
    return (data.data ?? null) as Json | null;
  } catch {
    return null;
  }
}

/**
 * Deep-merge `override` onto `base`: plain objects merge recursively; arrays and
 * primitives from `override` replace `base`. Used so a saved CMS row overrides
 * the static default while any field it omits falls back to the default —
 * per-locale only, never across locales.
 */
export function deepMerge<T>(base: T, override: unknown): T {
  if (override === null || override === undefined) return base;
  if (Array.isArray(base) || Array.isArray(override)) return override as T;
  if (typeof base !== "object" || typeof override !== "object") return override as T;

  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [k, v] of Object.entries(override as Record<string, unknown>)) {
    const b = (base as Record<string, unknown>)[k];
    out[k] =
      b && typeof b === "object" && !Array.isArray(b) && v && typeof v === "object" && !Array.isArray(v)
        ? deepMerge(b, v)
        : v;
  }
  return out as T;
}

/** Merge a CMS row over a static default (per-locale fallback). */
export async function readMerged<T>(pageId: string, locale: string, fallback: T): Promise<T> {
  const row = await readCmsRow(pageId, locale);
  return row ? deepMerge(fallback, row) : fallback;
}
