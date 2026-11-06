/** Pure, testable helpers for blog posts (no I/O). */

/** Convert a title into a URL-friendly slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Estimate reading time in minutes (~200 words/minute, minimum 1). */
export function readingTimeMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const DATE_LOCALES: Record<string, string> = {
  en: "en-GB",
  ar: "ar-u-nu-latn",
  fr: "fr-FR",
  es: "es-ES",
};

/** Format an ISO timestamp as a readable date in the page language (e.g. "19 September 2026", "19 سبتمبر 2026"). */
export function formatDate(iso: string | null, locale = "en"): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(DATE_LOCALES[locale] ?? "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Reading time as a phrase in the page language. Arabic needs its own grammar
 * (دقيقة واحدة، دقيقتان، 3 دقائق، 11 دقيقة); other languages use "<n> <label>".
 */
export function readingTimeLabel(minutes: number, locale: string, label: string): string {
  if (locale !== "ar") return `${minutes} ${label}`;
  if (minutes === 1) return "قراءة في دقيقة واحدة";
  if (minutes === 2) return "قراءة في دقيقتين";
  if (minutes <= 10) return `قراءة في ${minutes} دقائق`;
  return `قراءة في ${minutes} دقيقة`;
}
