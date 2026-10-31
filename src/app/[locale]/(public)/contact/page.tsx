import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { QuoteForm } from "./QuoteForm";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getSeoText } from "@/content/seoText";
import { getServicePages, serviceSlugs } from "@/content/servicePages";
import type { Locale } from "@/i18n";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { breadcrumbs } from "@/lib/entity";
import { routes } from "@/lib/routes";
import styles from "./contact.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "/contact",
    locale,
    defaultTitle: t.contact.title,
    defaultDescription: getSeoText(locale).contact,
    seo: t.seo.contact,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getContent(loc);
  const c = t.contact;
  const servicePages = getServicePages(loc);
  // All nine specializations and the six services, as shown on the Services pages.
  const specializationOptions = [
    ...t.cards.specializations.map((s) => s.title),
    ...servicePages.shared.extraSpecializations.map((s) => s.title),
  ];
  const serviceOptions = serviceSlugs.map((slug) => servicePages.pages[slug].title);

  const crumbT = await getContent(locale as Locale);
  const crumbLd = breadcrumbs(locale, crumbT.common.homeCrumb, [{ name: crumbT.contact.crumb, path: routes.contact }]);
  return (
    <>
      <JsonLd data={crumbLd} />
      <PageHeader title={c.title} />

      <Container className="section-pad">
        <p className={styles.lead}>{c.lead}</p>
        <div className={styles.intro}>
          <div className={styles.introText}>
            <p style={{ fontSize: "var(--font-size-lg)", marginBottom: "var(--space-lg)" }}>
              {c.directIntro}{" "}
              <a href={`mailto:${site.contact.email}`} style={{ fontWeight: 600 }}>
                {site.contact.email}
              </a>{" "}
              {c.directOr}{" "}
              <a href={`tel:${site.contact.phoneHref}`} style={{ fontWeight: 600 }}>
                {site.contact.phone}
              </a>
              .
            </p>
          </div>

          <div className={styles.introMedia}>
            <Image
              src="/images/photos/contact.jpg"
              alt=""
              fill
              sizes="(min-width: 60em) 40vw, 100vw"
              priority
            />
          </div>
        </div>

        <div className="section-gap">
          <QuoteForm
            labels={t.form}
            specializationOptions={specializationOptions}
            serviceOptions={serviceOptions}
            locale={locale}
          />
        </div>
      </Container>
    </>
  );
}
