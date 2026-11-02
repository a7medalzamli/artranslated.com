import { siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { getSeoText } from "@/content/seoText";
import { getServicePages, serviceSlugs } from "@/content/servicePages";

/**
 * Structured data (schema.org) describing who is behind the site, shared by
 * every page so search engines and AI assistants see one consistent entity:
 * the business "Translated into Arabic (TIA)", owned and run by the translator
 * Ahmed Alzamli. Other pages point to these by @id instead of repeating them.
 */
export const ids = {
  business: `${siteUrl}/#business`,
  person: `${siteUrl}/#ahmed-alzamli`,
  website: `${siteUrl}/#website`,
};

/** Public profiles that confirm the same person (used as sameAs). */
export const profiles = [
  "https://www.linkedin.com/in/ahmed-alzamli",
  "https://www.proz.com/profile/2522215",
  "http://ahmedalzamly.translatorscafe.com",
];

const IUG = { "@type": "CollegeOrUniversity", name: "Islamic University of Gaza", url: "https://www.iugaza.edu.ps" };
const UCAS = { "@type": "CollegeOrUniversity", name: "University College of Applied Sciences (UCAS), Gaza", url: "https://www.ucas.edu.ps" };

export function entityGraph(locale: string) {
  const pages = getServicePages(locale).pages;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ids.business,
        name: "Translated into Arabic (TIA)",
        alternateName: ["TIA", "Translated into Arabic"],
        description: getSeoText(locale).home,
        url: siteUrl,
        logo: `${siteUrl}/logo-tia-v2.png`,
        image: `${siteUrl}/og/og-en.png`,
        email: site.contact.email,
        telephone: site.contact.phone,
        address: { "@type": "PostalAddress", addressCountry: "PS" },
        areaServed: "Worldwide",
        availableLanguage: ["Arabic", "English", "French", "Spanish"],
        foundingDate: "2026",
        founder: { "@id": ids.person },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Linguistic services",
          itemListElement: serviceSlugs.map((slug) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: pages[slug].title,
              url: `${siteUrl}/${locale}/services/${slug}`,
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: "Ahmed Alzamli",
        alternateName: ["Ahmed Alzamly", "أحمد الزاملي"],
        jobTitle: "English, French and Spanish to Arabic and Arabic to English Translator and Localization Specialist",
        description:
          "Palestinian translator and digital marketing specialist. Translating since 2011 and working professionally since 2014; founded Translated into Arabic (TIA) in 2026.",
        url: `${siteUrl}/en/about`,
        image: `${siteUrl}/portrait.jpg`,
        email: site.contact.email,
        nationality: { "@type": "Country", name: "Palestine" },
        knowsLanguage: ["ar", "en", "fr", "es"],
        // Main topics are linked to Wikipedia so search engines and AI
        // assistants identify them without ambiguity.
        knowsAbout: [
          { "@type": "Thing", name: "Arabic translation", sameAs: "https://en.wikipedia.org/wiki/Translation" },
          { "@type": "Thing", name: "Localization", sameAs: "https://en.wikipedia.org/wiki/Language_localisation" },
          { "@type": "Thing", name: "Modern Standard Arabic", sameAs: "https://en.wikipedia.org/wiki/Modern_Standard_Arabic" },
          "Website localization",
          { "@type": "Thing", name: "SaaS localization", sameAs: "https://en.wikipedia.org/wiki/Software_as_a_service" },
          { "@type": "Thing", name: "Machine translation post-editing", sameAs: "https://en.wikipedia.org/wiki/Postediting" },
          { "@type": "Thing", name: "Transcreation", sameAs: "https://en.wikipedia.org/wiki/Transcreation" },
          "Technical translation",
          "Environmental engineering",
          "Digital marketing",
          { "@type": "Thing", name: "Search engine optimization", sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization" },
          "Answer engine optimization",
          "Generative engine optimization",
          "AI search visibility",
          "Web development",
        ],
        worksFor: { "@id": ids.business },
        alumniOf: [IUG, UCAS],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Bachelor’s degree in Environmental Engineering",
            credentialCategory: "degree",
            recognizedBy: IUG,
            dateCreated: "2014",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Diploma in Translation",
            credentialCategory: "diploma",
            recognizedBy: UCAS,
            dateCreated: "2018",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Diploma in Digital Marketing",
            credentialCategory: "diploma",
            recognizedBy: UCAS,
            dateCreated: "2026",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "ProZ.com Certified PRO (Professional Translator)",
            credentialCategory: "certification",
            recognizedBy: { "@type": "Organization", name: "ProZ.com", url: "https://www.proz.com" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "ArTA accredited translator",
            credentialCategory: "accreditation",
            recognizedBy: { "@type": "Organization", name: "Arab Translators Association (ArTA)" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Alconost certificate",
            credentialCategory: "certificate",
            recognizedBy: { "@type": "Organization", name: "Alconost", url: "https://alconost.com" },
          },
        ],
        memberOf: [
          { "@type": "Organization", name: "ProZ.com Certified PRO Network", url: "https://www.proz.com" },
          { "@type": "Organization", name: "Arab Translators Association (ArTA)", alternateName: "جمعية المترجمين العرب" },
          { "@type": "Organization", name: "Translators without Borders", url: "https://translatorswithoutborders.org" },
        ],
        sameAs: profiles,
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        name: "Translated into Arabic (TIA)",
        alternateName: "artranslated.com",
        url: siteUrl,
        inLanguage: ["en", "ar", "fr", "es"],
        publisher: { "@id": ids.business },
      },
    ],
  };
}

/** BreadcrumbList for an inner page: Home → … → current page. */
export function breadcrumbs(locale: string, homeLabel: string, trail: { name: string; path: string }[]) {
  const items = [{ name: homeLabel, path: "" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteUrl}/${locale}${it.path}`,
    })),
  };
}
