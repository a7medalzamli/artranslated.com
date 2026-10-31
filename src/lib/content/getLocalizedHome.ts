import type { Locale } from "@/i18n";
import { localizedHome } from "@/content/homeLocalized";
import { readMerged } from "@/lib/cms/db";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { defaultHomeContent, type HomeContent } from "./home";

/**
 * Home content per locale: the CMS document `cms:home:<locale>` merged over the
 * built-in default (English → defaultHomeContent; other locales → the translated
 * localizedHome). Fields not yet edited fall back to the default, per-locale.
 *
 * For Arabic, French and Spanish, the hero headline and the "Why partner with
 * me?" section always come from homeLocalized.ts. Older copies saved in the CMS
 * for those languages had fallen out of step with the English site, so the
 * translations kept in code (which mirror English) take priority.
 */
export async function getLocalizedHome(locale: Locale): Promise<HomeContent> {
  if (!isLocale(locale)) notFound();
  if (locale === "en") return readMerged<HomeContent>("home", locale, defaultHomeContent);

  const code = localizedHome[locale as "ar" | "fr" | "es"];
  const merged = await readMerged<HomeContent>("home", locale, code);
  return {
    ...merged,
    hero: { ...merged.hero, title: code.hero.title },
    why: { ...merged.why, intro: code.why.intro, items: code.why.items },
  };
}
