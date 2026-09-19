import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { Callout } from "@/components/Callout/Callout";
import { routes } from "@/lib/routes";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms and Conditions",
  description: "Draft terms and conditions for translation services. To be reviewed by a lawyer.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms and conditions"
        eyebrow="Draft — to be reviewed by a lawyer"
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Terms and conditions" }]}
      />

      <Container size="narrow" className={styles.legal}>
        <Callout tone="warning">
          <strong>Draft.</strong> This is placeholder wording only and is not legal advice. It must
          be reviewed and finalized by a qualified lawyer before the site goes live.
        </Callout>

        <div className="prose">
          <h2>1. Scope of services</h2>
          <p>
            These terms govern translation and related language services provided by [Legal Entity /
            Your Name] (&ldquo;the Translator&rdquo;) to the client. The specific service, language
            pair, scope and deadline are agreed for each project.
          </p>

          <h2>2. Quotes and acceptance</h2>
          <p>
            Quotes are based on the information provided by the client and are confirmed in writing.
            A project begins once the quote and scope are accepted.
          </p>

          <h2>3. Confidentiality</h2>
          <p>
            Client materials are treated as confidential. A non-disclosure agreement can be signed
            before any files are shared. See the{" "}
            <a href={routes.confidentiality}>confidentiality</a> page.
          </p>

          <h2>4. Client responsibilities</h2>
          <p>
            The client is responsible for providing source materials, reference materials and any
            required terminology, and for clarifying the intended audience and purpose.
          </p>

          <h2>5. Fees and payment</h2>
          <p>[State fees, currency, invoicing schedule and payment terms.]</p>

          <h2>6. Intellectual property</h2>
          <p>
            [State when rights in the translation transfer to the client — typically on full payment
            — and any rights retained, such as translation memories.]
          </p>

          <h2>7. Liability</h2>
          <p>[State the limitation of liability, to be defined with a lawyer.]</p>

          <h2>8. Governing law</h2>
          <p>[State the governing law and jurisdiction.]</p>

          <h2>9. Contact</h2>
          <p>
            Questions about these terms can be sent via the <a href={routes.contact}>contact</a>{" "}
            page.
          </p>

          <p>
            <em>Last updated: [date].</em>
          </p>
        </div>
      </Container>
    </>
  );
}
