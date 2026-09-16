import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Work & CV" };

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Work & CV"
        description="Anonymized success stories, client types and professional background."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Work & CV" }]}
      />
      <ContentRow>
        <p>The full page content is added in Milestone 3, using the content brief.</p>
      </ContentRow>
    </>
  );
}
