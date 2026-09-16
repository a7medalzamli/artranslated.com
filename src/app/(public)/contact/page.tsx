import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Contact & Request a Quote" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact & request a quote"
        description="Tell me about your project and I'll reply with a clear quote."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Contact" }]}
      />
      <ContentRow>
        <p>The quote-request form is built in Milestone 7.</p>
      </ContentRow>
    </>
  );
}
