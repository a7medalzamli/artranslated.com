import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { ServiceIcon } from "@/components/ServiceIcon/ServiceIcon";
import { Reveal } from "@/components/Reveal/Reveal";
import { getLocalizedHome } from "@/lib/content/getLocalizedHome";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import styles from "./specializations.module.css";

/** Photo for each specialization card, matched by its icon. */
const specializationImages: Record<string, string> = {
  chip: "/images/photos/spec-technical.jpg",
  scale: "/images/photos/spec-legal.jpg",
  finance: "/images/photos/spec-financial.jpg",
  heart: "/images/photos/spec-healthcare.jpg",
  robot: "/images/photos/spec-mtpe.jpg",
  globe: "/images/photos/spec-website-marketing.jpg",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "/specializations",
    locale,
    defaultTitle: t.specializations.title,
    defaultDescription: t.specializations.description,
    seo: t.seo.specializations,
  });
}

export default async function SpecializationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const content = await getLocalizedHome(loc);
  const t = await getContent(loc);

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
              {specializationImages[service.icon] && (
                <div className={styles.serviceMedia}>
                  <Image
                    src={specializationImages[service.icon]}
                    alt=""
                    fill
                    sizes="(min-width: 60em) 33vw, (min-width: 40em) 50vw, 100vw"
                  />
                </div>
              )}
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
