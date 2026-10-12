import type { Locale } from "@/i18n";
import { localizedHome } from "@/content/homeLocalized";
import { readMerged } from "@/lib/cms/db";
import { defaultHomeContent, type HomeContent } from "./home";

/**
 * Home content per locale: the CMS document `cms:home:<locale>` merged over the
 * built-in default (English → defaultHomeContent; other locales → the translated
 * localizedHome). Fields not yet edited fall back to the default, per-locale.
 */
export async function getLocalizedHome(locale: Locale): Promise<HomeContent> {
  const fallback: HomeContent =
    locale === "en" ? defaultHomeContent : localizedHome[locale as "ar" | "fr" | "es"];
  return readMerged<HomeContent>("home", locale, fallback);
}
