import type { Metadata } from "next";
import { LegalDocument, legalMetadata, pickLocale } from "../LegalDocument";
import { privacyContent } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return legalMetadata("/privacy", locale, pickLocale(privacyContent, locale));
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <LegalDocument locale={locale} t={pickLocale(privacyContent, locale)} />;
}
