import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms and conditions"
        eyebrow="Draft — to be reviewed by a lawyer"
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Terms and conditions" }]}
      />
      <ContentRow>
        <p>The draft terms are added in Milestone 3. This document must be reviewed by a lawyer.</p>
      </ContentRow>
    </>
  );
}
