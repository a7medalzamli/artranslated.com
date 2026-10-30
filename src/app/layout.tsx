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
    default: "Arabic Translation & Localization Services | Ahmed Alzamli",
    // Kept short so titles fit in Google results (~60 characters).
    template: "%s | Ahmed Alzamli",
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
    images: [{ url: "/og/og-en.png", width: 1200, height: 630, alt: "Translated into Arabic: Arabic translation and localization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Translation & Localization into English & Arabic",
    description:
      "Specialist translation and localization into English and Arabic by Ahmed Alzamli.",
    images: ["/og/og-en.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
      dir={localeDirection[defaultLocale]}
      className={`${lexend.variable} ${ibmPlexSansArabic.variable}`}
      // The inline script below sets lang/dir from the URL before hydration.
      suppressHydrationWarning
    >
      <head>
        {/* Mark the whole page with its real language (e.g. /fr → lang="fr"),
            not only the content wrapper, for browsers and search engines. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=location.pathname.split("/")[1];if(["en","ar","fr","es"].indexOf(l)>-1){var h=document.documentElement;h.lang=l;h.dir=l==="ar"?"rtl":"ltr";}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
