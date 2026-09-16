import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Financial Translation into Arabic",
  description:
    "English, French and Spanish to Arabic financial translation for reports, statements and financial communications, with precise and consistent terminology.",
};

export default function FinancialPage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialization"
        title="Financial translation into Arabic"
        description="Financial documents translated with the accuracy, discretion and terminology consistency the numbers require."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Financial" },
        ]}
      />

      <Section title="Accuracy where figures and wording both matter">
        <div className="prose">
          <p>
            Financial documents combine exact figures with carefully chosen language. Terminology is
            kept consistent with SDL Trados termbases and translation memories, so recurring terms
            and standard phrasing stay uniform across reporting periods and document sets.
          </p>
          <p>
            Financial material is treated as confidential: secure transfers, careful handling and
            readiness to sign an NDA before any file is opened.
          </p>
        </div>
      </Section>

      <Section tinted title="What I translate">
        <div className="prose">
          <ul>
            <li>Financial reports and statements</li>
            <li>Investor and corporate communications</li>
            <li>Audit and compliance documentation</li>
            <li>Presentations and financial marketing materials</li>
          </ul>
        </div>
      </Section>

      <CTA
        title="Have financial documents to translate?"
        description="Share the scope, language pair and deadline for a clear quote."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "How I work", href: routes.process }}
      />
    </>
  );
}
