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
  blog: "/blog",
  contact: "/contact",
  terms: "/terms",
  privacy: "/privacy",
} as const;

export type RouteKey = keyof typeof routes;

/** Admin area routes (protected on the server). */
export const adminRoutes = {
  dashboard: "/admin",
  login: "/admin/login",
  posts: "/admin/posts",
  quotes: "/admin/quote-requests",
  content: "/admin/content",
  settings: "/admin/settings",
} as const;
