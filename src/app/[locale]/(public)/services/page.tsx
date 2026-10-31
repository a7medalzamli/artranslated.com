import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/Container/Container";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import { getServicePages, serviceImages, serviceSlugs, type ServiceSlug } from "@/content/servicePages";
import { getContent } from "@/i18n/content";
import { getDictionary } from "@/i18n";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getServiceSeoTitles } from "@/content/seoText";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { breadcrumbs } from "@/lib/entity";
import styles from "./services.module.css";

/** Dictionary key for each service's menu label. */
const menuKey = {
  translation: "translation",
  editing: "editing",
  mtpe: "mtpe",
  transcreation: "transcreation",
  consulting: "consulting",
  "digital-marketing": "digitalMarketing",
} as const satisfies Record<ServiceSlug, string>;

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
    defaultTitle: getServiceSeoTitles(locale).services,
    defaultDescription: t.services.intro,
    seo: t.seo.services,
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  const { overview } = getServicePages(locale);

  const services = serviceSlugs.map((slug) => ({
    slug,
    name: dict.serviceMenu[menuKey[slug]],
    ...overview.items[slug],
  }));

  const crumbT = await getContent(locale as Locale);
  const crumbLd = breadcrumbs(locale, crumbT.common.homeCrumb, [{ name: crumbT.services.crumb, path: routes.services }]);
  return (
    <>
      <JsonLd data={crumbLd} />
      {/* ---- Header: title and a wide photo ---- */}
      <header className={styles.hero}>
        <Container>
          <h1 className={styles.heroTitle}>{overview.pageTitle}</h1>
          <div className={styles.banner}>
            <Image src="/images/photos/services-hero.jpg" alt="" fill priority sizes="100vw" />
          </div>
        </Container>
      </header>

      {/* ---- One section per service: photo on one side, text on the other ---- */}
      <div className={styles.list}>
        <Container>
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className={`${styles.row} ${i % 2 === 1 ? styles.reverse : ""}`}
            >
              <div className={styles.media}>
                <Image
                  src={serviceImages[s.slug]}
                  alt=""
                  fill
                  sizes="(min-width: 60em) 45vw, 100vw"
                />
              </div>
              <div className={styles.text}>
                <h2 className={styles.name}>{s.name}</h2>
                <p className={styles.question}>{s.question}</p>
                <p className={styles.body}>{withBold(s.text)}</p>
                <Link href={`/services/${s.slug}`} className={styles.more}>
                  {overview.learnMore}
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </div>

      {/* ---- Closing: invitation plus contact details ---- */}
      <section className={styles.closing}>
        <Container>
          <div className={styles.closingGrid}>
            <div>
              <h2 className={styles.closingTitle}>{overview.closingTitle}</h2>
              <p className={styles.closingText}>{overview.closingText}</p>
              <Link href={routes.contact} className={styles.button}>
                {overview.getInTouch}
              </Link>
            </div>
            <dl className={styles.contactList}>
              <div>
                <dt>{overview.contactLabels.email}</dt>
                <dd><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></dd>
              </div>
              <div>
                <dt>{overview.contactLabels.whatsapp}</dt>
                <dd>
                  <a href={`https://wa.me/${site.contact.whatsapp}`} dir="ltr">{site.contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt>{overview.contactLabels.telegram}</dt>
                <dd><a href={site.contact.telegram} dir="ltr">{site.contact.phone}</a></dd>
              </div>
              <div>
                <dt>{overview.contactLabels.timezone}</dt>
                <dd dir="auto">{overview.timezone}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}

/** Turns **phrase** markers into bold text. */
function withBold(text: string): ReactNode[] {
  return text
    .split(/\*\*(.+?)\*\*/)
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

