import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Card, CardGrid } from "@/components/Card/Card";
import { CTA } from "@/components/CTA/CTA";
import { additionalServices } from "@/content/additionalServices";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

const photo = (name: string) => `/images/photos/service-${name}.jpg`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "/services",
    locale,
    defaultTitle: t.services.title,
    defaultDescription: t.services.description,
    seo: t.seo.services,
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const s = t.services;

  /** One of the shared additionalServices entries (localized by index). */
  const shared = (i: number, image: string) => ({
    title: t.cards.additional[i]?.title ?? additionalServices[i].title,
    summary: t.cards.additional[i]?.summary ?? additionalServices[i].summary,
    image: photo(image),
  });

  // Card order on the page. Product testing and dubbing were replaced by
  // Consulting and Digital Marketing.
  const cards = [
    { title: s.translationTitle, summary: s.translationSummary, image: photo("translation") },
    shared(0, "mtpe"),
    shared(1, "transcreation"),
    { title: s.consultingTitle, summary: s.consultingSummary, image: photo("consulting") },
    shared(3, "ai-annotation"),
    { title: s.marketingTitle, summary: s.marketingSummary, image: photo("digital-marketing") },
  ];

  return (
    <>
      <PageHeader
        title={t.services.title}
        description={t.services.description}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: t.services.crumb }]}
      />

      <Section tinted title={t.services.additionalTitle} intro={t.services.additionalIntro}>
        <CardGrid columns={3}>
          {cards.map((card) => (
            <Card key={card.title} title={card.title} image={card.image}>
              {card.summary}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <CTA
        title={t.services.ctaTitle}
        description={t.services.ctaDescription}
        primary={{ label: t.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.common.seeProcess, href: routes.process }}
      />
    </>
  );
}
