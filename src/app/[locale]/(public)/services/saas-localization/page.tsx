import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { Faq } from "@/components/Faq/Faq";
import { RelatedGuides } from "@/components/RelatedGuides/RelatedGuides";
import { TrustStrip } from "@/components/Trust/Trust";
import { RelatedServices, relatedServices } from "@/components/RelatedServices/RelatedServices";
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
    alternateName: ["Arabic software localization", "Arabic app localization", "Arabic UI translation"],
    url: `${siteUrl}/${locale}${routes.saasLocalization}`,
    image: `${siteUrl}${IMAGE}`,
    inLanguage: locale,
    areaServed: "Worldwide",
    availableLanguage: ["English", "French", "Spanish", "Arabic"],
    audience: { "@type": "BusinessAudience", audienceType: "SaaS companies, app developers and localization agencies" },
    provider: { "@id": ids.business },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: p.listTitle,
      itemListElement: p.list.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: p.steps.title,
    description: p.steps.intro,
    inLanguage: locale,
    step: p.steps.items.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={howToLd} />
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
            <Image src={IMAGE} alt={p.title} fill sizes="(min-width: 60em) 40vw, 100vw" priority />
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

      <Section title={p.steps.title} intro={p.steps.intro}>
        <ol className={styles.steps}>
          {p.steps.items.map((step) => (
            <li key={step.title} className={styles.step}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tinted>
        <div className={styles.details}>
          {p.blocks.map((block) => (
            <div key={block.title} className={styles.detail}>
              <h2 className={styles.detailTitle}>{block.title}</h2>
              <p>{block.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={p.raas.title} intro={p.raas.intro}>
        <div className={styles.details}>
          {p.raas.items.map((item) => (
            <div key={item.title} className={styles.detail}>
              <h3 className={styles.detailTitle}>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <TrustStrip locale={locale} />
      <RelatedGuides locale={locale} clusters={["saas"]} tinted />

      <Faq title={p.faqTitle} items={p.faqs} />
      <RelatedServices locale={locale} links={relatedServices.saas} tinted />

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
