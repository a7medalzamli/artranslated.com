import type { Locale } from "@/i18n";
import { localizedHome } from "@/content/homeLocalized";
import { getHomeContent } from "./getHomeContent";
import type { HomeContent } from "./home";

/**
 * Home content per locale: English comes from the database (admin-editable);
 * other locales use the translated static copies.
 */
export async function getLocalizedHome(locale: Locale): Promise<HomeContent> {
  if (locale === "en") return getHomeContent();
  return localizedHome[locale];
}
