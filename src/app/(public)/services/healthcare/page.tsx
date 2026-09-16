import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Healthcare Translation into Arabic",
  description:
    "English, French and Spanish to Arabic healthcare and medical translation, delivered with accuracy, clarity and an appropriate register for each audience.",
};

export default function HealthcarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialization"
        title="Healthcare translation into Arabic"
        description="Medical and healthcare documentation translated with accuracy, clarity and the right register for its readers."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Healthcare" },
        ]}
      />

      <Section title="Clarity and correctness for sensitive content">
        <div className="prose">
          <p>
            Healthcare content carries real consequences, so accuracy and clarity come first. Terms
            are kept consistent with SDL Trados termbases, and the register is matched to the
            audience — whether the readers are clinicians or patients.
          </p>
          <p>
            Every project follows a full Translation&ndash;Editing&ndash;Proofreading workflow, and
            files are handled under strict confidentiality.
          </p>
        </div>
      </Section>

      <Section tinted title="What I translate">
        <div className="prose">
          <ul>
            <li>Medical and clinical documentation</li>
            <li>Patient-facing information and instructions</li>
            <li>Healthcare product and device documentation</li>
            <li>Regulatory and compliance materials</li>
          </ul>
          <p>
            [Note: confirm any specific healthcare sub-fields or document types to feature here.]
          </p>
        </div>
      </Section>

      <CTA
        title="Need healthcare content translated into Arabic?"
        description="Tell me the document type, language pair and deadline for a clear quote."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "Process & QA", href: routes.process }}
      />
    </>
  );
}
