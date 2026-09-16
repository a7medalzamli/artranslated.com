import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Process & QA" };

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        title="Process & QA"
        description="The TEP workflow, quality-assurance policy and tools behind every project."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Process & QA" }]}
      />
      <ContentRow>
        <p>The full page content is added in Milestone 3, using the content brief.</p>
      </ContentRow>
    </>
  );
}
