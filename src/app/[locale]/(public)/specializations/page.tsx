import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { ServiceIcon } from "@/components/ServiceIcon/ServiceIcon";
import { Reveal } from "@/components/Reveal/Reveal";
import { getLocalizedHome } from "@/lib/content/getLocalizedHome";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import styles from "./specializations.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/specializations" },
  title: "Specializations",
  description:
    "Fields I specialize in — technical, legal, financial, healthcare, machine-translation post-editing and website localization and marketing, into Arabic.",
};

export default async function SpecializationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const content = await getLocalizedHome(loc);
  const t = getContent(loc);

  return (
    <>
      <PageHeader
        eyebrow={t.specializations.eyebrow}
        title={t.specializations.title}
        description={t.specializations.description}
        breadcrumbs={[
          { label: t.common.homeCrumb, href: routes.home },
          { label: t.specializations.crumb },
        ]}
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
        title={t.specializations.ctaTitle}
        description={t.specializations.ctaDescription}
        primary={{ label: t.common.letsTalk, href: routes.contact }}
        secondary={{ label: t.common.viewServices, href: routes.services }}
      />
    </>
  );
}
