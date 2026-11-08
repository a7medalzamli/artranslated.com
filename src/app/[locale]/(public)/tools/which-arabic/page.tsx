import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Faq } from "@/components/Faq/Faq";
import { CTA } from "@/components/CTA/CTA";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getWhichArabicText } from "@/content/whichArabicTool";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { siteUrl } from "@/lib/seo";
import { ids } from "@/lib/entity";
import { WhichArabic } from "./WhichArabic";
import styles from "./whichArabic.module.css";

/** Shareable infographic of the decision table, one per language. */
const infographic = (locale: string) => `/images/infographics/which-arabic-${locale}.png`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const w = getWhichArabicText(locale);
  return buildCmsMetadata({
    path: routes.whichArabic,
    locale,
    defaultTitle: w.seoTitle,
    defaultDescription: w.seoDescription,
    defaultOgImage: infographic(locale),
  });
}

export default async function WhichArabicPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const w = getWhichArabicText(locale);

  // Free web tool, described for search engines and AI assistants.
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: w.title,
    description: w.seoDescription,
    url: `${siteUrl}/${locale}${routes.whichArabic}`,
    applicationCategory: "ReferenceApplication",
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
        locale={locale}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: w.crumb }]}
      />

      <Section narrow>
        <WhichArabic ui={w.ui} />
      </Section>

      <Section tinted narrow title={w.tableTitle}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">{w.tableHead[0]}</th>
              <th scope="col">{w.tableHead[1]}</th>
            </tr>
          </thead>
          <tbody>
            {w.table.map(([content, arabic]) => (
              <tr key={content}>
                <td>{content}</td>
                <td>{arabic}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Image
          src={infographic(locale)}
          alt={w.infographicAlt}
          width={1080}
          height={1350}
          sizes="(min-width: 48em) 46rem, 100vw"
          className={styles.infographic}
        />
      </Section>

      <Faq title={w.faqTitle} items={w.faq} />

      <CTA title={w.ctaTitle} description={w.ctaText} primary={{ label: w.ctaButton, href: routes.contact }} />
    </>
  );
}
