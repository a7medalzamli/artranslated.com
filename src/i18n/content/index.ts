import type { Locale } from "../config";
import en from "./en";
import ar from "./ar";
import fr from "./fr";
import es from "./es";
import { readMerged } from "@/lib/cms/db";

/** Page content shape is defined by the English content. */
export type SiteContent = typeof en;

const staticContent: Record<Locale, SiteContent> = { en, ar, fr, es };

/** The built-in (fallback) content for a locale — no database read. */
export function getStaticContent(locale: Locale): SiteContent {
  return staticContent[locale];
}

/**
 * Page content for a locale: the CMS document `cms:content:<locale>` merged over
 * the built-in content, so any field not yet edited falls back to the default
 * (per-locale only, never across locales).
 */
export async function getContent(locale: Locale): Promise<SiteContent> {
  return readMerged<SiteContent>("content", locale, staticContent[locale]);
}
