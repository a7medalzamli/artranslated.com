/*
 * Internationalization configuration.
 *
 * The site launches in English only, but the structure is ready for Arabic:
 * dictionaries are keyed by locale and each locale declares its text direction,
 * so adding Arabic later means providing translations + enabling the routes —
 * no structural rewrite.
 */

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Text direction per locale, used to set <html dir="…">. */
export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

/** Human-readable label for each locale (for a future language switcher). */
export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};
