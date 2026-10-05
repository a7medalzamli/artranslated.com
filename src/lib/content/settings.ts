import { z } from "zod";
import { site } from "@/lib/site";

export const socialPlatformEnum = z.enum(["linkedin", "whatsapp", "email"]);

export const siteSettingsSchema = z.object({
  name: z.string(),
  role: z.string(),
  logo: z.string(),
  footerTagline: z.string(),
  socials: z.array(
    z.object({
      platform: socialPlatformEnum,
      label: z.string(),
      href: z.string(),
    }),
  ),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;

export const defaultSiteSettings: SiteSettings = {
  name: site.name,
  role: site.role,
  logo: "/logo.jpg",
  footerTagline: "English, French & Spanish into Arabic translation.",
  socials: site.socials.map((s) => ({ platform: s.platform, label: s.label, href: s.href })),
};
