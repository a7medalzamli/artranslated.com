import type { Locale } from "../config";
import en from "./en";
import ar from "./ar";
import fr from "./fr";
import es from "./es";
import { readMerged } from "@/lib/cms/db";
import { notFound } from "next/navigation";
import { isLocale } from "../config";

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
  // An unknown "language" (e.g. /foo.txt read as a locale) is a missing page.
  if (!isLocale(locale)) notFound();
  const content = await readMerged<SiteContent>("content", locale, staticContent[locale]);
  return withRetiredTextReplaced(content, locale);
}

/**
 * Wording that was rewritten in code but may still be stored in an older
 * copy saved from the admin panel. The saved old text is swapped for the new.
 */
const RETIRED_PROCESS_CTA = new Set([
  "Want this level of care on your project?",
  "تريد هذا المستوى من العناية في مشروعك؟",
  "Vous voulez ce niveau de soin pour votre projet ?",
  "¿Quieres este nivel de cuidado en tu proyecto?",
]);

function withRetiredTextReplaced(content: SiteContent, locale: Locale): SiteContent {
  if (!RETIRED_PROCESS_CTA.has(content.process?.ctaTitle)) return content;
  return { ...content, process: { ...content.process, ctaTitle: staticContent[locale].process.ctaTitle } };
}
