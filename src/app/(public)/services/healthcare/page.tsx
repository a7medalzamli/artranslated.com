import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Healthcare Translation into Arabic" };

export default function HealthcarePage() {
  return (
    <>
      <PageHeader
        title="Healthcare translation into Arabic"
        description="Medical and healthcare documentation translated with accuracy and care."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Healthcare" },
        ]}
      />
      <ContentRow>
        <p>The full page content is added in Milestone 3, using the content brief.</p>
      </ContentRow>
    </>
  );
}
