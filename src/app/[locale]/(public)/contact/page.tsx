import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { Callout } from "@/components/Callout/Callout";
import { LocaleLink } from "@/components/LocaleLink/LocaleLink";
import { QuoteForm } from "./QuoteForm";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact & Request a Quote",
  description:
    "Request a quote for English, French or Spanish into Arabic translation. Tell me your language pair, specialization, size and deadline.",
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getContent(locale as Locale);
  const c = t.contact;

  return (
    <>
      <PageHeader
        title={c.title}
        description={c.description}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: c.crumb }]}
      />

      <Container className="section-pad">
        <p style={{ fontSize: "var(--font-size-lg)", marginBottom: "var(--space-lg)" }}>
          {c.directIntro}{" "}
          <a href={`mailto:${site.contact.email}`} style={{ color: "var(--color-accent)", fontWeight: 600 }}>
            {site.contact.email}
          </a>{" "}
          {c.directOr}{" "}
          <a href={`tel:${site.contact.phoneHref}`} style={{ color: "var(--color-accent)", fontWeight: 600 }}>
            {site.contact.phone}
          </a>
          .
        </p>

        <Callout>
          <strong>{c.calloutStrong}</strong> {c.calloutText}{" "}
          <LocaleLink href={routes.confidentiality}>{c.calloutLink}</LocaleLink>.
        </Callout>

        <div className="section-gap">
          <QuoteForm />
        </div>
      </Container>
    </>
  );
}
