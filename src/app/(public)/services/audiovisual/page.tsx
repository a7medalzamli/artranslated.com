import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ContentRow } from "@/components/ContentRow/ContentRow";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Audiovisual Translation & Dubbing into Arabic" };

export default function AudiovisualPage() {
  return (
    <>
      <PageHeader
        title="Audiovisual translation & dubbing into Arabic"
        description="Subtitling, transcreation and dubbing adaptation with lip-sync alignment."
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Services", href: routes.services },
          { label: "Audiovisual" },
        ]}
      />
      <ContentRow>
        <p>
          The full page content &mdash; including the dubbing and lip-sync adaptation process
          &mdash; is added in Milestone 3, using the content brief.
        </p>
      </ContentRow>
    </>
  );
}
