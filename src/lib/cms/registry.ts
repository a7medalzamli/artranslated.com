import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import en from "@/i18n/content/en";
import ar from "@/i18n/content/ar";
import fr from "@/i18n/content/fr";
import es from "@/i18n/content/es";
import type { SiteContent } from "@/i18n/content";
import { defaultHomeContent, type HomeContent } from "@/lib/content/home";
import { localizedHome } from "@/content/homeLocalized";

/**
 * CMS is backed by the existing `site_content` table using two documents per
 * locale: `cms:content:<locale>` (the whole SiteContent — all page copy) and
 * `cms:home:<locale>` (the HomeContent — hero/why/service cards). The admin
 * edits one logical "page" (a section of one of those documents) at a time;
 * saving writes that locale's document only, so locales stay independent.
 */
export const CONTENT_STORE = "content";
export const HOME_STORE = "home";

const staticContent: Record<Locale, SiteContent> = { en, ar, fr, es };
const homeDefaults: Record<Locale, HomeContent> = {
  en: defaultHomeContent,
  ar: localizedHome.ar,
  fr: localizedHome.fr,
  es: localizedHome.es,
};

export function staticContentFor(locale: Locale): SiteContent {
  return staticContent[locale];
}
export function homeDefaultFor(locale: Locale): HomeContent {
  return homeDefaults[locale];
}

/** A manageable page in the dashboard. */
export type CmsPage = {
  id: string;
  label: string;
  /** Public route this content appears on (for preview), or null if shared. */
  route: string | null;
  store: typeof CONTENT_STORE | typeof HOME_STORE;
  /** Dot-path inside the store document ("" = the whole document). */
  path: string;
  group: string;
};

export const CMS_PAGES: CmsPage[] = [
  { id: "home-main", label: "Home — hero, why, service cards", route: "/", store: HOME_STORE, path: "", group: "Home" },
  { id: "home-sections", label: "Home — languages, experience, availability", route: "/", store: CONTENT_STORE, path: "home", group: "Home" },
  { id: "about", label: "About", route: "/about", store: CONTENT_STORE, path: "about", group: "Pages" },
  { id: "specializations", label: "Specializations", route: "/specializations", store: CONTENT_STORE, path: "specializations", group: "Pages" },
  { id: "services", label: "Services overview", route: "/services", store: CONTENT_STORE, path: "services", group: "Pages" },
  { id: "cards", label: "Service cards (overview)", route: "/services", store: CONTENT_STORE, path: "cards", group: "Pages" },
  { id: "process", label: "How it works (Process & QA)", route: "/process", store: CONTENT_STORE, path: "process", group: "Pages" },
  { id: "contact", label: "Contact", route: "/contact", store: CONTENT_STORE, path: "contact", group: "Pages" },
  { id: "form", label: "Quote form labels", route: "/contact", store: CONTENT_STORE, path: "form", group: "Pages" },
  { id: "confidentiality", label: "Confidentiality", route: "/confidentiality", store: CONTENT_STORE, path: "confidentiality", group: "Pages" },
  { id: "blog", label: "Blog (page chrome)", route: "/blog", store: CONTENT_STORE, path: "blog", group: "Pages" },
  { id: "svc-technical", label: "Service — Technical", route: "/services/technical", store: CONTENT_STORE, path: "serviceDetail.technical", group: "Service pages" },
  { id: "svc-legal", label: "Service — Legal", route: "/services/legal", store: CONTENT_STORE, path: "serviceDetail.legal", group: "Service pages" },
  { id: "svc-financial", label: "Service — Financial", route: "/services/financial", store: CONTENT_STORE, path: "serviceDetail.financial", group: "Service pages" },
  { id: "svc-healthcare", label: "Service — Healthcare", route: "/services/healthcare", store: CONTENT_STORE, path: "serviceDetail.healthcare", group: "Service pages" },
  { id: "svc-audiovisual", label: "Service — Audiovisual", route: "/services/audiovisual", store: CONTENT_STORE, path: "serviceDetail.audiovisual", group: "Service pages" },
  { id: "common", label: "Shared buttons & labels", route: null, store: CONTENT_STORE, path: "common", group: "Shared" },
  { id: "cookie", label: "Cookie banner", route: null, store: CONTENT_STORE, path: "cookie", group: "Shared" },
  { id: "notFound", label: "404 page", route: null, store: CONTENT_STORE, path: "notFound", group: "Shared" },
];

export function getCmsPage(id: string): CmsPage | undefined {
  return CMS_PAGES.find((p) => p.id === id);
}

/** Read a dot-path value from an object. "" returns the object itself. */
export function getAtPath(obj: unknown, path: string): unknown {
  if (!path) return obj;
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj);
}

/** Immutably set a dot-path value, returning a new root object. */
export function setAtPath<T>(root: T, path: string, value: unknown): T {
  if (!path) return value as T;
  const keys = path.split(".");
  const clone = structuredClone(root) as Record<string, unknown>;
  let cursor: Record<string, unknown> = clone;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    cursor[k] = cursor[k] && typeof cursor[k] === "object" ? { ...(cursor[k] as object) } : {};
    cursor = cursor[k] as Record<string, unknown>;
  }
  cursor[keys[keys.length - 1]] = value;
  return clone as T;
}

/** The default (static) document for a store + locale. */
export function defaultDocument(store: string, locale: Locale): unknown {
  return store === HOME_STORE ? homeDefaultFor(locale) : staticContentFor(locale);
}

export { locales };
