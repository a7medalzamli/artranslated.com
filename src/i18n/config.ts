/*
 * Internationalization configuration.
 *
 * The site ships in four languages. UI chrome (navigation, buttons, footer) is
 * translated in each locale's dictionary; page body content falls back to
 * English until localized copy is provided. Arabic renders right-to-left.
 */

export const locales = ["en", "ar", "fr", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Type guard: is a string one of our supported locales? */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Text direction per locale, used to set dir="…" on the content wrapper. */
export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
  fr: "ltr",
  es: "ltr",
};

/** Human-readable label for each locale (used by the language switcher). */
export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  es: "Español",
};
