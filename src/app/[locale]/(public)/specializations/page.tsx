import { permanentRedirect } from "next/navigation";
import { routes } from "@/lib/routes";

/**
 * Specializations now live on the Translation service page. Old links and
 * search results are sent there permanently.
 */
export default async function SpecializationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  permanentRedirect(`/${locale}${routes.translation}`);
}
