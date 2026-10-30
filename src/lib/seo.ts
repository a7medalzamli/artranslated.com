/**
 * Canonical site origin used in canonical tags, hreflang links, the sitemap and
 * robots.txt. Defaults to the live domain so search engines never see a
 * localhost address. No trailing slash.
 */
const LIVE_URL = "https://www.artranslated.com";
const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

// A localhost value (e.g. copied from a local .env into Vercel) must never reach
// the live site, so it is ignored in production builds.
const usable =
  envUrl && !(process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/.test(envUrl));

export const siteUrl = (usable ? envUrl : LIVE_URL).replace(/\/$/, "");
