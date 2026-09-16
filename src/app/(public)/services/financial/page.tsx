import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Financial Translation into Arabic" };

export default function FinancialPage() {
  return (
    <>
      <PageHeader
        title="Financial translation into Arabic"
        description="Reports, statements and financial communications with precise terminology."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Financial" },
        ]}
      />
      <ContentRow>
        <p>The full page content is added in Milestone 3, using the content brief.</p>
      </ContentRow>
    </>
  );
}
