import type { Locale } from "../config";
import en from "./en";
import ar from "./ar";
import fr from "./fr";
import es from "./es";

/** Page content shape is defined by the English content. */
export type SiteContent = typeof en;

const content: Record<Locale, SiteContent> = { en, ar, fr, es };

/** Return the page content for a locale. */
export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
