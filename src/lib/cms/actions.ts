"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { homeContentSchema } from "@/lib/content/home";
import { defaultHomeContent } from "@/lib/content/home";
import { localizedHome } from "@/content/homeLocalized";
import { cmsKey, deepMerge } from "./db";
import {
  CONTENT_STORE,
  HOME_STORE,
  defaultDocument,
  getCmsPage,
  setAtPath,
  staticContentFor,
} from "./registry";

export type SaveState = { ok: boolean; error: string | null };

async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authorized.");
  return supabase;
}

/** Max serialized size of a saved section (defensive). */
const MAX_BYTES = 512 * 1024;

/**
 * Save one page/section for one locale. Loads that locale's store document,
 * replaces only this section's path, and writes it back — so other locales
 * (separate rows) and other sections (preserved) are never affected.
 */
export async function saveCmsPage(
  pageId: string,
  locale: string,
  sectionData: unknown,
): Promise<SaveState> {
  let supabase;
  try {
    supabase = await requireAdmin();
  } catch {
    return { ok: false, error: "Not authorized." };
  }

  if (!isLocale(locale)) return { ok: false, error: "Unknown language." };
  const page = getCmsPage(pageId);
  if (!page) return { ok: false, error: "Unknown page." };

  try {
    if (new Blob([JSON.stringify(sectionData)]).size > MAX_BYTES) {
      return { ok: false, error: "Content is too large." };
    }
  } catch {
    return { ok: false, error: "Content could not be serialized." };
  }

  const key = cmsKey(page.store, locale as Locale);
  const { data: row } = await supabase
    .from("site_content")
    .select("data")
    .eq("key", key)
    .maybeSingle();

  const base = deepMerge(defaultDocument(page.store, locale as Locale), row?.data ?? {});
  const nextDoc = setAtPath(base as Record<string, unknown>, page.path, sectionData);

  // Validate the home document against its schema; content sections are plain
  // text rendered through React (auto-escaped), so structural checks suffice.
  if (page.store === HOME_STORE) {
    const parsed = homeContentSchema.safeParse(nextDoc);
    if (!parsed.success) {
      return { ok: false, error: "Some home fields are invalid — please check and try again." };
    }
  }

  const { error } = await supabase
    .from("site_content")
    .upsert({ key, data: nextDoc as Record<string, unknown> }, { onConflict: "key" });

  if (error) {
    return { ok: false, error: "Could not save. Please try again." };
  }

  revalidatePath("/", "layout");
  return { ok: true, error: null };
}

export type SeedState = { ok: boolean; error: string | null; seeded?: number };

/**
 * Populate the CMS from the current content, once. Idempotent: existing rows are
 * never overwritten (so it is safe to re-run and never clobbers edits). English
 * home is seeded from the current live `home` row if present.
 */
export async function seedCms(): Promise<SeedState> {
  let supabase;
  try {
    supabase = await requireAdmin();
  } catch {
    return { ok: false, error: "Not authorized." };
  }

  const { data: existing } = await supabase
    .from("site_content")
    .select("key")
    .like("key", "cms:%");
  const have = new Set((existing ?? []).map((r) => r.key as string));

  const rows: { key: string; data: Record<string, unknown> }[] = [];

  for (const locale of locales) {
    const ck = cmsKey(CONTENT_STORE, locale);
    if (!have.has(ck)) {
      rows.push({ key: ck, data: staticContentFor(locale) as unknown as Record<string, unknown> });
    }

    const hk = cmsKey(HOME_STORE, locale);
    if (!have.has(hk)) {
      let base: Record<string, unknown>;
      if (locale === "en") {
        const { data: liveHome } = await supabase
          .from("site_content")
          .select("data")
          .eq("key", "home")
          .maybeSingle();
        base = (liveHome?.data as Record<string, unknown>) ?? (defaultHomeContent as unknown as Record<string, unknown>);
      } else {
        base = localizedHome[locale] as unknown as Record<string, unknown>;
      }
      rows.push({ key: hk, data: base });
    }
  }

  if (rows.length > 0) {
    const { error } = await supabase.from("site_content").upsert(rows, { onConflict: "key" });
    if (error) return { ok: false, error: "Seeding failed. Please try again." };
    revalidatePath("/", "layout");
  }

  return { ok: true, error: null, seeded: rows.length };
}
