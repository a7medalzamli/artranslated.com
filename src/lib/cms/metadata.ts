import type { Metadata } from "next";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/seo";

/** Open Graph expects language_TERRITORY codes. */
const ogLocales: Record<string, string> = { en: "en_US", ar: "ar_AR", fr: "fr_FR", es: "es_ES" };

export type SeoOverride = { title?: string; description?: string; ogImage?: string };

/**
 * Build per-locale page metadata from an editable SEO override merged over
 * sensible defaults (usually the page's own localized title/description).
 * Canonical + hreflang alternates are generated for the correct localized route.
 * Editing SEO for one locale never affects another (overrides are per-locale).
 */
export function buildCmsMetadata(opts: {
  /** Path without locale, e.g. "/about" ("" for home). */
  path: string;
  locale: string;
  defaultTitle: string;
  defaultDescription: string;
  seo?: SeoOverride;
  defaultOgImage?: string;
}): Metadata {
  const title = opts.seo?.title?.trim() || opts.defaultTitle;
  const description = opts.seo?.description?.trim() || opts.defaultDescription;
  const ogImage = opts.seo?.ogImage?.trim() || opts.defaultOgImage || "/portrait.jpg";
  const canonical = `/${opts.locale}${opts.path}`;
  // x-default tells Google which version to show visitors in other languages.
  const languages = {
    ...Object.fromEntries(locales.map((l) => [l, `/${l}${opts.path}`])),
    "x-default": `/en${opts.path}`,
  };

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${canonical}`,
      images: [{ url: ogImage }],
      type: "website",
      locale: ogLocales[opts.locale] ?? opts.locale,
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}
