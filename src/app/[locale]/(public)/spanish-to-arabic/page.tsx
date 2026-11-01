import type { Metadata } from "next";
import { InfoPageView } from "@/components/InfoPage/InfoPage";
import { getSpanishToArabicPage } from "@/content/hubPages";
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
  const p = getSpanishToArabicPage(locale);
  return buildCmsMetadata({
    path: routes.spanishToArabic,
    locale,
    defaultTitle: p.seoTitle,
    defaultDescription: p.description,
    defaultOgImage: IMAGE,
  });
}

export default async function SpanishToArabicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  await getContent(locale as Locale);
  const p = getSpanishToArabicPage(locale);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.title,
    description: p.description,
    serviceType: "Spanish to Arabic translation",
    url: `${siteUrl}/${locale}${routes.spanishToArabic}`,
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
    />
  );
}
