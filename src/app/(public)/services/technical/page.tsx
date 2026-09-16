import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Technical Translation into Arabic" };

export default function TechnicalPage() {
  return (
    <>
      <PageHeader
        title="Technical translation into Arabic"
        description="Engineering, manuals and documentation, with MTPE, digital product testing and AI data annotation."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Technical" },
        ]}
      />
      <ContentRow>
        <p>The full page content is added in Milestone 3, using the content brief.</p>
      </ContentRow>
    </>
  );
}
