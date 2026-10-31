import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Card, CardGrid } from "@/components/Card/Card";
import { CTA } from "@/components/CTA/CTA";
import { specializations } from "@/content/specializations";
import {
  getServicePages,
  isServiceSlug,
  serviceImages,
  serviceSlugs,
} from "@/content/servicePages";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getServiceSeoTitles } from "@/content/seoText";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { getServiceDetails } from "@/content/serviceDetails";
import { siteUrl } from "@/lib/seo";
import { ids, breadcrumbs } from "@/lib/entity";
import { Faq } from "@/components/Faq/Faq";
import { getFaqs } from "@/content/faqs";
import styles from "./servicePage.module.css";

type Params = Promise<{ locale: string; service: string }>;

/** Photo for each specialization card on the Translation page. */
const specializationImages: Record<string, string> = {
  technical: "/images/photos/spec-technical.jpg",
  legal: "/images/photos/spec-legal.jpg",
  financial: "/images/photos/spec-financial.jpg",
  healthcare: "/images/photos/spec-healthcare.jpg",
  audiovisual: "/images/photos/spec-audiovisual.jpg",
};

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, service } = await params;
  if (!isServiceSlug(service)) return {};
  const page = getServicePages(locale).pages[service];
  return buildCmsMetadata({
    path: `/services/${service}`,
    locale,
    defaultTitle: getServiceSeoTitles(locale)[service],
    defaultDescription: page.description,
    defaultOgImage: serviceImages[service],
  });
}

export default async function ServicePage({ params }: { params: Params }) {
  const { locale, service } = await params;
  if (!isServiceSlug(service)) notFound();

  const t = await getContent(locale as Locale);
  const { shared, pages } = getServicePages(locale);
  const page = pages[service];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url: `${siteUrl}/${locale}/services/${service}`,
    inLanguage: locale,
    areaServed: "Worldwide",
    provider: { "@id": ids.business },
    serviceType: page.title,
  };
  const crumbs = breadcrumbs(locale, t.common.homeCrumb, [
    { name: t.services.crumb, path: routes.services },
    { name: page.title, path: `/services/${service}` },
  ]);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={crumbs} />
      <PageHeader title={page.title} />

      <Section>
        <p className={styles.lead}>{page.description}</p>
        <div className={styles.intro}>
          <div className={`prose ${styles.introText}`}>
            {page.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.introMedia}>
            <Image
              src={serviceImages[service]}
              alt=""
              fill
              sizes="(min-width: 60em) 40vw, 100vw"
              priority
            />
          </div>
        </div>
      </Section>

      {service === "translation" && (
        <Section tinted title={shared.specTitle} intro={shared.specIntro}>
          <CardGrid columns={3}>
            {specializations.map((spec, i) => (
              <Card
                key={spec.slug}
                title={t.cards.specializations[i]?.title ?? spec.title}
                href={spec.href}
                image={specializationImages[spec.slug]}
              >
                {t.cards.specializations[i]?.summary ?? spec.summary}
              </Card>
            ))}
            {shared.extraSpecializations.map((spec) => (
              <Card key={spec.title} title={spec.title} image={spec.image}>
                {spec.summary}
              </Card>
            ))}
          </CardGrid>
        </Section>
      )}

      <Section>
        <div className={styles.details}>
          {getServiceDetails(locale)[service].map((block) => (
            <div key={block.title} className={styles.detail}>
              <h2 className={styles.detailTitle}>{block.title}</h2>
              <p>{block.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={page.includedTitle ?? shared.includedTitle}>
        <ul className={styles.included}>
          {page.included.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {service === "translation" && (
        <Faq title={getFaqs(locale).title} items={getFaqs(locale).translation} tinted />
      )}

      <CTA
        title={page.ctaTitle}
        description={page.ctaDescription}
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
