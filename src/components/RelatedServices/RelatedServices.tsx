import { LocaleLink as Link } from "../LocaleLink/LocaleLink";
import { Section } from "../Section/Section";
import { getServicePages } from "@/content/servicePages";
import { getSaasPage } from "@/content/saasPage";
import { getMarketsPage, getFrenchToArabicPage, getSpanishToArabicPage } from "@/content/hubPages";
import { getAgencyPage, getBusinessPage } from "@/content/infoPages";
import { getStaticContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import styles from "./RelatedServices.module.css";

/** Pages that can be linked from "Related services" (internal linking between pillars). */
export type LinkKey =
  | "translation"
  | "editing"
  | "mtpe"
  | "transcreation"
  | "consulting"
  | "digital-marketing"
  | "saas"
  | "technical"
  | "legal"
  | "financial"
  | "healthcare"
  | "audiovisual"
  | "arabic-markets"
  | "french-to-arabic"
  | "spanish-to-arabic"
  | "for-businesses"
  | "for-agencies"
  | "confidentiality";

const TITLE: Record<Locale, string> = {
  en: "Related services",
  ar: "خدمات ذات صلة",
  fr: "Services associés",
  es: "Servicios relacionados",
};

/** Title (used as the link text), short description and URL of each linkable page, in the page language. */
function info(key: LinkKey, locale: string): { href: string; title: string; text: string } {
  const loc = locale as Locale;
  const sd = getStaticContent(loc).serviceDetail;
  switch (key) {
    case "translation":
    case "editing":
    case "mtpe":
    case "transcreation":
    case "consulting":
    case "digital-marketing": {
      const p = getServicePages(locale).pages[key];
      return { href: `/services/${key}`, title: p.title, text: p.description };
    }
    case "saas": {
      const p = getSaasPage(locale);
      return { href: routes.saasLocalization, title: p.title, text: p.description };
    }
    case "technical":
    case "legal":
    case "financial":
    case "healthcare":
    case "audiovisual":
      return { href: routes[key], title: sd[key].title, text: sd[key].description };
    case "arabic-markets": {
      const p = getMarketsPage(locale);
      return { href: routes.arabicMarkets, title: p.title, text: p.description };
    }
    case "french-to-arabic": {
      const p = getFrenchToArabicPage(locale);
      return { href: routes.frenchToArabic, title: p.title, text: p.description };
    }
    case "spanish-to-arabic": {
      const p = getSpanishToArabicPage(locale);
      return { href: routes.spanishToArabic, title: p.title, text: p.description };
    }
    case "for-businesses": {
      const p = getBusinessPage(locale);
      return { href: routes.forBusinesses, title: p.title, text: p.description };
    }
    case "for-agencies": {
      const p = getAgencyPage(locale);
      return { href: routes.forAgencies, title: p.title, text: p.description };
    }
    case "confidentiality": {
      const c = getStaticContent(loc).confidentiality;
      return { href: routes.confidentiality, title: c.title, text: c.description };
    }
  }
}

/**
 * Hand-picked links to related pillar pages, with each page's own title as the
 * link text, so authority flows between services instead of only through menus.
 */
export function RelatedServices({
  locale,
  links,
  tinted = false,
  title,
}: {
  locale: string;
  links: LinkKey[];
  tinted?: boolean;
  /** Overrides the default "Related services" heading. */
  title?: string;
}) {
  return (
    <Section tinted={tinted} title={title ?? TITLE[locale as Locale] ?? TITLE.en}>
      <ul className={styles.grid}>
        {links.map((key) => {
          const l = info(key, locale);
          return (
            <li key={key}>
              <Link href={l.href} className={styles.card}>
                <span className={styles.title}>
                  {l.title} <span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span>
                </span>
                <span className={styles.text}>{l.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/** Related services for each page (keys of the page that shows them). */
export const relatedServices: Record<string, LinkKey[]> = {
  translation: ["editing", "mtpe", "arabic-markets", "for-agencies"],
  editing: ["translation", "mtpe", "for-agencies", "confidentiality"],
  mtpe: ["editing", "translation", "saas", "for-agencies"],
  transcreation: ["digital-marketing", "consulting", "saas", "arabic-markets"],
  consulting: ["arabic-markets", "transcreation", "saas", "digital-marketing"],
  "digital-marketing": ["transcreation", "saas", "arabic-markets", "consulting"],
  saas: ["transcreation", "mtpe", "digital-marketing", "editing"],
  technical: ["translation", "saas", "editing", "mtpe"],
  legal: ["translation", "editing", "confidentiality", "for-businesses"],
  financial: ["translation", "editing", "confidentiality", "arabic-markets"],
  healthcare: ["translation", "editing", "mtpe", "confidentiality"],
  audiovisual: ["transcreation", "translation", "spanish-to-arabic", "digital-marketing"],
  "for-businesses": ["translation", "transcreation", "digital-marketing", "arabic-markets"],
  "for-agencies": ["translation", "editing", "mtpe", "french-to-arabic"],
  "arabic-markets": ["consulting", "transcreation", "digital-marketing", "translation"],
  "french-to-arabic": ["translation", "legal", "arabic-markets", "spanish-to-arabic"],
  "spanish-to-arabic": ["translation", "audiovisual", "arabic-markets", "french-to-arabic"],
};
