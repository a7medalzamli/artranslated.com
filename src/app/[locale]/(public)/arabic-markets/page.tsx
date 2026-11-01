import type { Metadata } from "next";
import { InfoPageView } from "@/components/InfoPage/InfoPage";
import { relatedServices } from "@/components/RelatedServices/RelatedServices";
import { getMarketsPage } from "@/content/hubPages";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { ids } from "@/lib/entity";
import { siteUrl } from "@/lib/seo";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

const IMAGE = "/images/photos/services-hero.jpg";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  await getContent(locale as Locale); // 404 for unknown languages
  const p = getMarketsPage(locale);
  return buildCmsMetadata({
    path: routes.arabicMarkets,
    locale,
    defaultTitle: p.seoTitle,
    defaultDescription: p.description,
    defaultOgImage: IMAGE,
  });
}

export default async function ArabicMarketsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  await getContent(locale as Locale);
  const p = getMarketsPage(locale);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.title,
    description: p.description,
    serviceType: "Arabic market entry: translation, localization and marketing",
    url: `${siteUrl}/${locale}${routes.arabicMarkets}`,
    inLanguage: locale,
    areaServed: "Worldwide",
    provider: { "@id": ids.business },
  };

  return (
    <InfoPageView
      locale={locale}
      page={p}
      image={IMAGE}
      structuredData={serviceLd}
      clusters={["arabic-markets", "marketing"]}
      related={relatedServices["arabic-markets"]}
    />
  );
}
