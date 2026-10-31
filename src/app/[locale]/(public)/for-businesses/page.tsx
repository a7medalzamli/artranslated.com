import type { Metadata } from "next";
import { InfoPageView } from "@/components/InfoPage/InfoPage";
import { getBusinessPage } from "@/content/infoPages";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { ids } from "@/lib/entity";
import { siteUrl } from "@/lib/seo";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

const IMAGE = "/images/photos/spec-website-marketing.jpg";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  await getContent(locale as Locale); // 404 for unknown languages
  const p = getBusinessPage(locale);
  return buildCmsMetadata({
    path: routes.forBusinesses,
    locale,
    defaultTitle: p.seoTitle,
    defaultDescription: p.description,
    defaultOgImage: IMAGE,
  });
}

export default async function ForBusinessesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  await getContent(locale as Locale);
  const p = getBusinessPage(locale);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.title,
    description: p.description,
    serviceType: "Translation into Arabic with editing and proofreading",
    audience: { "@type": "BusinessAudience", audienceType: "Businesses and organizations" },
    url: `${siteUrl}/${locale}${routes.forBusinesses}`,
    inLanguage: locale,
    areaServed: "Worldwide",
    provider: { "@id": ids.business },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        minPrice: 0.04,
        maxPrice: 0.06,
        priceCurrency: "USD",
        unitText: "word",
      },
    },
  };

  return <InfoPageView locale={locale} page={p} image={IMAGE} structuredData={serviceLd} />;
}
