import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { ServiceIcon } from "@/components/ServiceIcon/ServiceIcon";
import { Reveal } from "@/components/Reveal/Reveal";
import { getHomeContent } from "@/lib/content/getHomeContent";
import { routes } from "@/lib/routes";
import styles from "./specializations.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/specializations" },
  title: "Specializations",
  description:
    "Fields I specialize in — technical, legal, financial, healthcare, machine-translation post-editing and website localization and marketing, into Arabic.",
};

export default async function SpecializationsPage() {
  const content = await getHomeContent();

  return (
    <>
      <PageHeader
        eyebrow="Specializations"
        title="Fields I specialize in"
        description="Deep, domain-specific experience across the areas where accuracy and terminology matter most."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Specializations" }]}
      />

      <Section>
        <div className={styles.serviceGrid}>
          {content.services.items.map((service, i) => (
            <Reveal
              key={service.title}
              from="up"
              delay={(i % 3) * 90}
              className={styles.serviceCard}
            >
              <span className={styles.serviceIcon}>
                <ServiceIcon name={service.icon} />
              </span>
              <h2 className={styles.serviceCardTitle}>{service.title}</h2>
              <p className={styles.serviceCardText}>{service.summary}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Have a project in one of these fields?"
        description="Tell me what you're working on and I'll reply with a clear, honest quote."
        primary={{ label: "Let's talk", href: routes.contact }}
        secondary={{ label: "View services", href: routes.services }}
      />
    </>
  );
}
