import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Notes on translation workflow, localization and terminology."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Blog" }]}
      />
      <ContentRow>
        <p>The blog listing is built in Milestone 6.</p>
      </ContentRow>
    </>
  );
}
