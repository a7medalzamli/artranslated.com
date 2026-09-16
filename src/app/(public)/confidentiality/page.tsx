import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Confidentiality & Data Security" };

export default function ConfidentialityPage() {
  return (
    <>
      <PageHeader
        title="Confidentiality & data security"
        description="NDAs, secure file transfers, storage and data-retention practices."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Confidentiality" }]}
      />
      <ContentRow>
        <p>The full page content is added in Milestone 3, using the content brief.</p>
      </ContentRow>
    </>
  );
}
