import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Translation Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Translation Services"
        description="English, French and Spanish into Arabic across five specializations."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Services" }]}
      />
      <ContentRow>
        <p>The full services overview is added in Milestone 3, using the content brief.</p>
      </ContentRow>
    </>
  );
}
