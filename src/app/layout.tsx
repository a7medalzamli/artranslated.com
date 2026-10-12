import type { Metadata } from "next";
import { Lexend, IBM_Plex_Sans_Arabic } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent/CookieConsent";
import { defaultLocale, localeDirection } from "@/i18n/config";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Website Translation & Localization into English & Arabic | Ahmed Alzamli",
    template: "%s | Ahmed Alzamli — Arabic Translation & Localization",
  },
  description:
    "Website translation and localization into English and Arabic, plus professional English, French and Spanish into Arabic translation across technical, legal, financial, healthcare and audiovisual specializations.",
  keywords: [
    "website translation",
    "website localization",
    "English to Arabic translation",
    "Arabic localization",
    "French to Arabic translation",
    "Spanish to Arabic translation",
    "technical translation",
    "legal translation",
    "audiovisual translation",
    "MTPE",
    "transcreation",
  ],
  authors: [{ name: "Ahmed Alzamli" }],
  creator: "Ahmed Alzamli",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Ahmed Alzamli — Arabic Translation & Localization",
    title: "Website Translation & Localization into English & Arabic",
    description:
      "Specialist translation and localization into English and Arabic — websites, technical, legal, financial, healthcare and audiovisual content.",
    url: siteUrl,
    images: [{ url: "/portrait.jpg", width: 640, height: 640, alt: "Ahmed Alzamli" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Translation & Localization into English & Arabic",
    description:
      "Specialist translation and localization into English and Arabic by Ahmed Alzamli.",
    images: ["/portrait.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
      dir={localeDirection[defaultLocale]}
      className={`${lexend.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
