import type { Metadata } from "next";
import { InfoPageView } from "@/components/InfoPage/InfoPage";
import { getRatesPage } from "@/content/infoPages";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { ids } from "@/lib/entity";
import { siteUrl } from "@/lib/seo";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

const IMAGE = "/images/photos/spec-financial.jpg";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  await getContent(locale as Locale); // 404 for unknown languages
  const p = getRatesPage(locale);
  return buildCmsMetadata({
    path: routes.rates,
    locale,
    defaultTitle: p.seoTitle,
    defaultDescription: p.description,
    defaultOgImage: IMAGE,
  });
}

export default async function RatesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  await getContent(locale as Locale);
  const p = getRatesPage(locale);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.title,
    description: p.description,
    serviceType: "Translation into Arabic",
    url: `${siteUrl}/${locale}${routes.rates}`,
    inLanguage: locale,
    areaServed: "Worldwide",
    provider: { "@id": ids.business },
  };

  return <InfoPageView locale={locale} page={p} image={IMAGE} structuredData={serviceLd} />;
}
