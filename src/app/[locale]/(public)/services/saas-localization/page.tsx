import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { Faq } from "@/components/Faq/Faq";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { getSaasPage } from "@/content/saasPage";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { ids } from "@/lib/entity";
import { siteUrl } from "@/lib/seo";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import styles from "../[service]/servicePage.module.css";

const IMAGE = "/images/photos/spec-saas.jpg";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  await getContent(locale as Locale); // 404 for unknown languages
  const p = getSaasPage(locale);
  return buildCmsMetadata({
    path: routes.saasLocalization,
    locale,
    defaultTitle: p.seoTitle,
    defaultDescription: p.description,
    defaultOgImage: IMAGE,
  });
}

export default async function SaasLocalizationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const p = getSaasPage(locale);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.title,
    description: p.description,
    serviceType: "SaaS localization",
    url: `${siteUrl}/${locale}${routes.saasLocalization}`,
    inLanguage: locale,
    areaServed: "Worldwide",
    provider: { "@id": ids.business },
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <PageHeader
        title={p.title}
        locale={locale}
        breadcrumbs={[
          { label: t.common.homeCrumb, href: routes.home },
          { label: t.services.crumb, href: routes.services },
          { label: p.crumb },
        ]}
      />

      <Section>
        <p className={styles.lead}>{p.description}</p>
        <div className={styles.intro}>
          <div className={`prose ${styles.introText}`}>
            {p.intro.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div className={styles.introMedia}>
            <Image src={IMAGE} alt="" fill sizes="(min-width: 60em) 40vw, 100vw" priority />
          </div>
        </div>
      </Section>

      <Section tinted title={p.listTitle}>
        <ul className={styles.included}>
          {p.list.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className={styles.details}>
          {p.blocks.map((block) => (
            <div key={block.title} className={styles.detail}>
              <h2 className={styles.detailTitle}>{block.title}</h2>
              <p>{block.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Faq title={p.faqTitle} items={p.faqs} tinted />

      <CTA
        title={p.ctaTitle}
        description={p.ctaDescription}
        primary={{ label: t.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.common.viewServices, href: routes.services }}
      />
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="m7.5 12.5 3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
