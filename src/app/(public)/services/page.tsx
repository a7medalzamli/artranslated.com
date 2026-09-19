import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Card, CardGrid } from "@/components/Card/Card";
import { CTA } from "@/components/CTA/CTA";
import { specializations } from "@/content/specializations";
import { additionalServices } from "@/content/additionalServices";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Translation Services",
  description:
    "English, French and Spanish into Arabic translation across technical, legal, financial, healthcare and audiovisual specializations, plus MTPE, transcreation, product testing and AI data annotation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Translation services"
        description="English, French and Spanish into Arabic — across five specializations, backed by a defined process and the right tools."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Services" }]}
      />

      <Section
        title="Specializations"
        intro="Each specialization has its own page explaining what is covered and how the work is handled."
      >
        <CardGrid columns={3}>
          {specializations.map((item) => (
            <Card key={item.slug} title={item.title} href={item.href}>
              {item.summary}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section
        tinted
        title="Additional services"
        intro="Beyond straight translation, these services support localization and AI projects end to end."
      >
        <CardGrid columns={3}>
          {additionalServices.map((service) => (
            <Card key={service.title} title={service.title}>
              {service.summary}
            </Card>
          ))}
        </CardGrid>
      </Section>

      <CTA
        title="Not sure which service fits?"
        description="Describe your project and I'll recommend the right approach and give you a clear quote."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "See the process", href: routes.process }}
      />
    </>
  );
}
