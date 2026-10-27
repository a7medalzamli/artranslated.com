import type { Metadata } from "next";
import { LegalDocument, legalMetadata, pickLocale } from "../LegalDocument";
import { termsContent } from "./content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return legalMetadata("/terms", locale, pickLocale(termsContent, locale));
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <LegalDocument locale={locale} t={pickLocale(termsContent, locale)} />;
}
