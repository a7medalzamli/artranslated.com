import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy policy"
        eyebrow="Draft — to be reviewed by a lawyer"
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Privacy policy" }]}
      />
      <ContentRow>
        <p>
          The draft privacy policy is added in Milestone 3. This document must be reviewed by a
          lawyer.
        </p>
      </ContentRow>
    </>
  );
}
