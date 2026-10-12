import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Card, CardGrid } from "@/components/Card/Card";
import { CTA } from "@/components/CTA/CTA";
import { specializations } from "@/content/specializations";
import { additionalServices } from "@/content/additionalServices";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Translation Services",
  description:
    "English, French and Spanish into Arabic translation across technical, legal, financial, healthcare and audiovisual specializations, plus MTPE, transcreation, product testing and AI data annotation.",
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getContent(locale as Locale);

  return (
    <>
      <PageHeader
        title={t.services.title}
        description={t.services.description}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: t.services.crumb }]}
      />

      <Section title={t.services.specializationsTitle} intro={t.services.specializationsIntro}>
        <CardGrid columns={3}>
          {specializations.map((item, i) => (
            <Card
              key={item.slug}
              title={t.cards.specializations[i]?.title ?? item.title}
              href={item.href}
            >
              {t.cards.specializations[i]?.summary ?? item.summary}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section tinted title={t.services.additionalTitle} intro={t.services.additionalIntro}>
        <CardGrid columns={3}>
          {additionalServices.map((service, i) => (
            <Card key={service.title} title={t.cards.additional[i]?.title ?? service.title}>
              {t.cards.additional[i]?.summary ?? service.summary}
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
