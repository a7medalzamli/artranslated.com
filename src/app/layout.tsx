import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Arabic } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent/CookieConsent";
import { defaultLocale, localeDirection } from "@/i18n/config";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "English, French & Spanish to Arabic Translation Services",
    template: "%s | Arabic Translation Services",
  },
  description:
    "Professional English, French and Spanish into Arabic translation: technical, legal, financial, healthcare and audiovisual specializations.",
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Arabic Translation Services",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
      dir={localeDirection[defaultLocale]}
      className={`${notoSans.variable} ${notoSansArabic.variable}`}
    >
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
