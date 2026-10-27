import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { routes } from "@/lib/routes";
import styles from "./legal.module.css";

/** Text that may start with a bold lead-in (e.g. "Project Data:"). */
export type LegalItem = string | { lead: string; text: string };

export type LegalSection = {
  heading: string;
  paragraphs?: LegalItem[];
  /** Rendered as a bulleted list after the paragraphs. */
  items?: LegalItem[];
};

/** Shared shape for the localized legal pages (privacy, terms). */
export type LegalContent = {
  title: string;
  crumb: string;
  description: string;
  /** Intro is split around the website link. */
  introBefore: string;
  introAfter: string;
  sections: LegalSection[];
  contactHeading: string;
  contactText: string;
  emailLabel: string;
};

export const contactEmail = "ahmed@artranslated.com";

export function pickLocale(all: Record<Locale, LegalContent>, locale: string): LegalContent {
  return all[locale as Locale] ?? all.en;
}

export function legalMetadata(path: string, locale: string, t: LegalContent): Metadata {
  return buildCmsMetadata({
    path,
    locale,
    defaultTitle: t.title,
    defaultDescription: t.description,
  });
}

function Text({ item }: { item: LegalItem }) {
  if (typeof item === "string") return <>{item}</>;
  return (
    <>
      <strong>{item.lead}</strong> {item.text}
    </>
  );
}

export async function LegalDocument({ locale, t }: { locale: string; t: LegalContent }) {
  const c = await getContent(locale as Locale);

  return (
    <>
      <PageHeader
        title={t.title}
        breadcrumbs={[{ label: c.common.homeCrumb, href: routes.home }, { label: t.crumb }]}
      />

      <Container size="narrow" className={styles.legal}>
        <div className="prose">
          <p className={styles.intro}>
            {t.introBefore}
            <a href={routes.home} dir="ltr">
              www.artranslated.com
            </a>
            {t.introAfter}
          </p>

          {t.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i}>
                  <Text item={p} />
                </p>
              ))}
              {section.items && (
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Text item={item} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <h2>{t.contactHeading}</h2>
          <p>{t.contactText}</p>
          <p>
            <strong>{t.emailLabel}</strong>{" "}
            <a href={`mailto:${contactEmail}`} dir="ltr">
              {contactEmail}
            </a>
          </p>
        </div>
      </Container>
    </>
  );
}
