import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Faq } from "@/components/Faq/Faq";
import { CTA } from "@/components/CTA/CTA";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getWordCounterText } from "@/content/wordCounterPage";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { siteUrl } from "@/lib/seo";
import { ids } from "@/lib/entity";
import { WordCounter } from "./WordCounter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const w = getWordCounterText(locale);
  return buildCmsMetadata({
    path: routes.wordCounter,
    locale,
    defaultTitle: w.seoTitle,
    defaultDescription: w.seoDescription,
  });
}

export default async function WordCounterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const w = getWordCounterText(locale);

  // Free web tool, described for search engines and AI assistants.
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: w.title,
    description: w.seoDescription,
    url: `${siteUrl}/${locale}${routes.wordCounter}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    inLanguage: locale,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@id": ids.business },
  };

  return (
    <>
      <JsonLd data={appLd} />
      <PageHeader
        title={w.title}
        description={w.intro}
        long
        locale={locale}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: w.crumb }]}
      />

      <Section narrow>
        <WordCounter ui={w.ui} locale={locale} />
      </Section>

      <Section tinted narrow title={w.howTitle}>
        <div className="prose">
          {w.how.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Faq title={w.faqTitle} items={w.faq} />

      <CTA title={w.ctaTitle} description={w.ctaText} primary={{ label: w.ctaButton, href: routes.contact }} />
    </>
  );
}
