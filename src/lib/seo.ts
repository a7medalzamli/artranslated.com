/**
 * Canonical site origin used in canonical tags, hreflang links, the sitemap and
 * robots.txt. Defaults to the live domain so search engines never see a
 * localhost address. No trailing slash.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.artranslated.com").replace(
  /\/$/,
  "",
);
