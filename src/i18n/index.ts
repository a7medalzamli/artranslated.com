import type { Locale } from "./config";
import en from "./dictionaries/en";
import ar from "./dictionaries/ar";
import fr from "./dictionaries/fr";
import es from "./dictionaries/es";

/** The Dictionary shape is defined by the English dictionary. */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, ar, fr, es };

/** Return the UI string dictionary for a locale. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { defaultLocale, localeDirection, localeLabels, locales, isLocale } from "./config";
export type { Locale } from "./config";
