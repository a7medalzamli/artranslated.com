/**
 * Central route map. Import from here instead of hard-coding path strings, so
 * navigation, breadcrumbs, sitemap and pages never drift out of sync.
 */
export const routes = {
  home: "/",
  services: "/services",
  technical: "/services/technical",
  legal: "/services/legal",
  financial: "/services/financial",
  healthcare: "/services/healthcare",
  audiovisual: "/services/audiovisual",
  process: "/process",
  confidentiality: "/confidentiality",
  work: "/work",
  blog: "/blog",
  contact: "/contact",
  terms: "/terms",
  privacy: "/privacy",
} as const;

export type RouteKey = keyof typeof routes;
