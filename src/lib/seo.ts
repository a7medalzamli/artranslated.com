/** Canonical site origin, from env in production; localhost in dev. No trailing slash. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  "",
);
