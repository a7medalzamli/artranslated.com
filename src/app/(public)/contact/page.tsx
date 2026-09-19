import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { Callout } from "@/components/Callout/Callout";
import { QuoteForm } from "./QuoteForm";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Request a quote for English, French or Spanish into Arabic translation. Tell me your language pair, specialization, size and deadline.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact & request a quote"
        description="Tell me about your project and I'll reply with a clear quote."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Contact" }]}
      />

      <Container className="section-pad">
        <Callout>
          <strong>Please don&rsquo;t send confidential files yet.</strong> This form is for project
          details only. Wait until we&rsquo;ve agreed terms &mdash; and an NDA, if you&rsquo;d like
          one &mdash; before sharing any sensitive documents. See the{" "}
          <a href={routes.confidentiality}>confidentiality page</a>.
        </Callout>

        <div className="section-gap">
          <QuoteForm />
        </div>
      </Container>
    </>
  );
}
