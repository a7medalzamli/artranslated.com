import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { Callout } from "@/components/Callout/Callout";
import { routes } from "@/lib/routes";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "Draft privacy policy explaining how enquiry data is handled. To be reviewed by a lawyer.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy policy"
        eyebrow="Draft — to be reviewed by a lawyer"
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Privacy policy" }]}
      />

      <Container size="narrow" className={styles.legal}>
        <Callout tone="warning">
          <strong>Draft.</strong> This is placeholder wording only and is not legal advice. It must
          be reviewed and finalized by a qualified lawyer before the site goes live.
        </Callout>

        <div className="prose">
          <h2>1. Who this policy covers</h2>
          <p>
            This policy explains how [Legal Entity / Your Name] handles personal information from
            visitors who contact the site or submit a quote request.
          </p>

          <h2>2. What is collected</h2>
          <p>
            When you submit a quote request, the form collects the details you provide — such as
            your name, email address, language pair, specialization, project size, deadline and
            message. Please do not send confidential files through the form.
          </p>

          <h2>3. How it is used</h2>
          <p>
            Your information is used only to respond to your enquiry and to provide a quote or the
            requested service.
          </p>

          <h2>4. Storage and processors</h2>
          <p>
            Quote requests are stored securely, and email notifications are sent through an email
            service provider. Hosting and database services are used to run the site. [Name the
            processors — e.g. hosting, database and email providers — and link their policies.]
          </p>

          <h2>5. Data retention</h2>
          <p>[State how long enquiry data is kept before deletion.]</p>

          <h2>6. Your rights</h2>
          <p>
            [State the applicable data-protection rights — for example access, correction and
            deletion — and how to exercise them.]
          </p>

          <h2>7. Contact</h2>
          <p>
            For any privacy question, use the <a href={routes.contact}>contact</a> page or write to
            [privacy contact address].
          </p>

          <p>
            <em>Last updated: [date].</em>
          </p>
        </div>
      </Container>
    </>
  );
}
