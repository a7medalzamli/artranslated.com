import type { Metadata } from "next";
import { InfoPageView } from "@/components/InfoPage/InfoPage";
import { relatedServices } from "@/components/RelatedServices/RelatedServices";
import { getFrenchToArabicPage } from "@/content/hubPages";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { ids } from "@/lib/entity";
import { siteUrl } from "@/lib/seo";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

const IMAGE = "/images/photos/service-consulting.jpg";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  await getContent(locale as Locale); // 404 for unknown languages
  const p = getFrenchToArabicPage(locale);
  return buildCmsMetadata({
    path: routes.frenchToArabic,
    locale,
    defaultTitle: p.seoTitle,
    defaultDescription: p.description,
    defaultOgImage: IMAGE,
  });
}

export default async function FrenchToArabicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  await getContent(locale as Locale);
  const p = getFrenchToArabicPage(locale);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.title,
    description: p.description,
    serviceType: "French to Arabic translation",
    url: `${siteUrl}/${locale}${routes.frenchToArabic}`,
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
      clusters={["translation", "arabic-markets"]}
      related={relatedServices["french-to-arabic"]}
      reviews={["Ahmed Mahany"]}
    />
  );
}
