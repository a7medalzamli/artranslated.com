import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { CTA } from "@/components/CTA/CTA";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  alternates: { canonical: "/confidentiality" },
  title: "Confidentiality & Data Security",
  description:
    "How confidential files are handled: NDAs signed before files are opened, secure transfers, careful storage and a clear data-retention policy.",
};

export default function ConfidentialityPage() {
  return (
    <>
      <PageHeader
        title="Confidentiality & data security"
        description="For legal, financial and commercial material, discretion is not optional. Here is how your files are protected."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Confidentiality" }]}
      />

      <Section title="NDAs before any file is opened">
        <div className="prose">
          <p>
            I operate under strict confidentiality and am ready to sign a non-disclosure agreement
            before viewing any project files. If you have your own NDA, I&rsquo;m happy to review
            and sign it; if not, one can be put in place quickly so you can share materials with
            confidence.
          </p>
        </div>
      </Section>

      <Section tinted title="Secure transfers">
        <div className="prose">
          <p>
            Files are received and returned through secure channels rather than open, unprotected
            email attachments.
          </p>
          <p>
            [Specify the secure transfer method used — e.g. an encrypted upload or named portal.]
          </p>
        </div>
      </Section>

      <Section title="Storage & handling">
        <div className="prose">
          <p>
            Working files are stored carefully and access is limited to what a project requires.
          </p>
          <p>[Describe where and how working files are stored, and any access controls.]</p>
        </div>
      </Section>

      <Section tinted title="Data retention">
        <div className="prose">
          <p>
            Files are kept only as long as needed for the project and any agreed follow-up, then
            deleted.
          </p>
          <p>[State the retention period — how long files are kept before deletion.]</p>
        </div>
      </Section>

      <CTA
        title="Ready to share your project securely?"
        description="An NDA can be in place before you send a single file."
        primary={{ label: "Request a quote", href: routes.contact }}
        secondary={{ label: "See the process", href: routes.process }}
      />
    </>
  );
}
