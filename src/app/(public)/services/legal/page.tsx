import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  alternates: { canonical: "/services/legal" },
  title: "Legal Translation into Arabic",
  description:
    "English, French and Spanish to Arabic legal translation for contracts, compliance and legal documentation — handled under strict confidentiality and NDA.",
};

export default function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialization"
        title="Legal translation into Arabic"
        description="Contracts and legal documentation translated with precision and handled with the confidentiality the material demands."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Legal" },
        ]}
      />

      <Section title="Precision and confidentiality">
        <div className="prose">
          <p>
            Legal texts leave no room for ambiguity: terminology, structure and meaning must carry
            across accurately. Each project uses SDL Trados termbases so defined terms stay
            consistent throughout a document and across related documents.
          </p>
          <p>
            Legal material is sensitive by nature. Files are handled under strict confidentiality,
            transferred securely, and I am ready to sign a non-disclosure agreement before any file
            is opened. See the <a href={routes.confidentiality}>confidentiality page</a> for detail.
          </p>
        </div>
      </Section>

      <Section tinted title="What I translate">
        <div className="prose">
          <ul>
            <li>Contracts and agreements</li>
            <li>Terms and conditions, policies and compliance documents</li>
            <li>Corporate and regulatory documentation</li>
            <li>Correspondence and supporting legal materials</li>
          </ul>
          <p>
            [Note: confirm whether sworn/certified translation is offered, as this depends on local
            accreditation.]
          </p>
        </div>
      </Section>

      <CTA
        title="Need legal documents translated in confidence?"
        description="Tell me the scope and deadline — an NDA can be in place before you share anything."
        primary={{ label: "Let's talk", href: routes.contact }}
        secondary={{ label: "Confidentiality", href: routes.confidentiality }}
      />
    </>
  );
}
