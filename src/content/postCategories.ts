import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

/**
 * Blog categories = the site's topic clusters. The English label is the value
 * stored on posts (admin panel and code articles); each language shows its own
 * label. Each cluster points to its main ("pillar") page, which lists the
 * cluster's articles under "Related guides".
 */
export const clusters = [
  {
    key: "translation",
    label: { en: "Arabic translation", ar: "الترجمة إلى العربية", fr: "Traduction vers l’arabe", es: "Traducción al árabe" },
    pillar: routes.translation,
  },
  {
    key: "quality",
    label: { en: "Quality & editing", ar: "الجودة والتدقيق", fr: "Qualité et révision", es: "Calidad y revisión" },
    pillar: routes.editing,
  },
  {
    key: "machine-translation",
    label: {
      en: "Machine translation & AI",
      ar: "الترجمة الآلية (MT) والذكاء الاصطناعي (AI)",
      fr: "Traduction automatique et IA",
      es: "Traducción automática e IA",
    },
    pillar: routes.mtpe,
  },
  {
    key: "saas",
    label: { en: "SaaS localization", ar: "توطين البرمجيات كخدمة (SaaS)", fr: "Localisation SaaS", es: "Localización de SaaS" },
    pillar: routes.saasLocalization,
  },
  {
    key: "marketing",
    label: { en: "Marketing & transcreation", ar: "التسويق والترجمة الإبداعية", fr: "Marketing et transcréation", es: "Marketing y transcreación" },
    pillar: routes.transcreation,
  },
  {
    key: "seo-ai",
    label: {
      en: "SEO & AI visibility",
      ar: "تحسين محركات البحث (SEO) والظهور في الذكاء الاصطناعي (AI)",
      fr: "SEO et visibilité IA",
      es: "SEO y visibilidad en IA",
    },
    pillar: routes.digitalMarketing,
  },
  {
    key: "industries",
    label: { en: "Industries", ar: "التخصصات", fr: "Secteurs", es: "Sectores" },
    pillar: routes.technical,
  },
  {
    key: "buying-guides",
    label: { en: "Buying guides", ar: "أدلة اختيار الخدمة", fr: "Guides d’achat", es: "Guías de compra" },
    pillar: routes.forBusinesses,
  },
  {
    key: "arabic-markets",
    label: { en: "Arabic markets", ar: "الأسواق العربية", fr: "Marchés arabophones", es: "Mercados árabes" },
    pillar: routes.arabicMarkets,
  },
] as const;

export type ClusterKey = (typeof clusters)[number]["key"];

/** Category values stored on posts (the English labels). */
export const postCategories = clusters.map((c) => c.label.en) as unknown as readonly [string, ...string[]];

export type PostCategory = (typeof postCategories)[number];

export function isPostCategory(value: string): value is PostCategory {
  return (postCategories as readonly string[]).includes(value);
}

/** The label to show for a stored category, in the page language (unknown values shown as-is). */
export function categoryLabel(category: string, locale: string): string {
  const c = clusters.find((x) => x.label.en === category);
  return c ? c.label[locale as Locale] ?? c.label.en : category;
}

/** Stored category value for a cluster key. */
export function categoryOf(key: ClusterKey): string {
  return clusters.find((c) => c.key === key)!.label.en;
}
