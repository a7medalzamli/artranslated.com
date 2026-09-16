import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Legal Translation into Arabic" };

export default function LegalPage() {
  return (
    <>
      <PageHeader
        title="Legal translation into Arabic"
        description="Contracts, compliance and legal documentation handled with strict confidentiality."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Legal" },
        ]}
      />
      <ContentRow>
        <p>The full page content is added in Milestone 3, using the content brief.</p>
      </ContentRow>
    </>
  );
}
