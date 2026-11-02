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
const RETIRED: { section: "process" | "contact"; field: string; old: string[] }[] = [
  {
    section: "process",
    field: "ctaTitle",
    old: [
      "Want this level of care on your project?",
      "تريد هذا المستوى من العناية في مشروعك؟",
      "Vous voulez ce niveau de soin pour votre projet ?",
      "¿Quieres este nivel de cuidado en tu proyecto?",
    ],
  },
  {
    section: "contact",
    field: "title",
    old: ["Contact & request a quote", "تواصل واطلب عرض سعر", "Contact et demande de devis", "Contacto y solicitud de presupuesto"],
  },
  {
    section: "contact",
    field: "lead",
    old: [
      "Share a few details about your project, the languages, subject and deadline, and I’ll reply with a clear, tailored quote.",
      "شاركني بعض التفاصيل عن مشروعك، اللغات والمجال والموعد النهائي، وسأرد عليك بعرض سعر واضح ومناسب لاحتياجاتك.",
      "Donnez-moi quelques détails sur votre projet, langues, domaine et délai, et je vous répondrai avec un devis clair et adapté.",
      "Compárteme algunos detalles de tu proyecto, idiomas, tema y plazo, y te responderé con un presupuesto claro y a tu medida.",
    ],
  },
];

function withRetiredTextReplaced(content: SiteContent, locale: Locale): SiteContent {
  let out = content;
  for (const { section, field, old } of RETIRED) {
    const current = (out[section] as Record<string, unknown> | undefined)?.[field];
    if (typeof current === "string" && old.includes(current)) {
      const fresh = (staticContent[locale][section] as Record<string, unknown>)[field];
      out = { ...out, [section]: { ...out[section], [field]: fresh } } as SiteContent;
    }
  }
  return out;
}
