import Image from "next/image";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { Faq } from "@/components/Faq/Faq";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { AvailabilityHours } from "@/components/AvailabilityHours/AvailabilityHours";
import type { InfoPage } from "@/content/infoPages";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import serviceStyles from "@/app/[locale]/(public)/services/[service]/servicePage.module.css";
import styles from "./InfoPage.module.css";

/** Shared layout for the "For agencies" and "Rates & turnaround" pages. */
export async function InfoPageView({
  locale,
  page: p,
  image,
  structuredData,
}: {
  locale: string;
  page: InfoPage;
  image: string;
  structuredData: Record<string, unknown>;
}) {
  const t = await getContent(locale as Locale);

  return (
    <>
      <JsonLd data={structuredData} />
      <PageHeader
        title={p.title}
        locale={locale}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: p.crumb }]}
      />

      <Section>
        <p className={serviceStyles.lead}>{p.description}</p>
        <div className={serviceStyles.intro}>
          <div className={`prose ${serviceStyles.introText}`}>
            {p.intro.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div className={serviceStyles.introMedia}>
            <Image src={image} alt="" fill sizes="(min-width: 60em) 40vw, 100vw" priority />
          </div>
        </div>
      </Section>

      {p.tables && (
        <Section tinted>
          <div className={styles.tables}>
            {p.tables.map((table) => (
              <div key={table.title} className={styles.tableBlock}>
                <h2 className={styles.tableTitle}>{table.title}</h2>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">{table.head[0]}</th>
                      <th scope="col">{table.head[1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map(([a, b]) => (
                      <tr key={a}>
                        <th scope="row">{a}</th>
                        <td>{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {table.note && <p className={styles.tableNote}>{table.note}</p>}
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section tinted={!p.tables} title={p.listTitle}>
        <ul className={serviceStyles.included}>
          {p.list.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {p.blocks && (
        <Section tinted={!p.tables}>
          <div className={serviceStyles.details}>
            {p.blocks.map((block) => (
              <div key={block.title} className={serviceStyles.detail}>
                <h2 className={serviceStyles.detailTitle}>{block.title}</h2>
                <p>{block.text}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {p.showAvailability && (
        <Section narrow>
          <div className={styles.availability}>
            <h2 className={styles.tableTitle}>{p.availabilityTitle}</h2>
            <AvailabilityHours labels={t.home.availability} />
          </div>
        </Section>
      )}

      <Faq title={p.faqTitle} items={p.faqs} tinted />

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
