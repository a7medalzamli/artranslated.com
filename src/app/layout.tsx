import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "English, French & Spanish to Arabic Translation Services",
    template: "%s | Arabic Translation Services",
  },
  description:
    "Professional English, French and Spanish into Arabic translation: technical, legal, financial, healthcare and audiovisual specializations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
