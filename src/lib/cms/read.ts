import type { Locale } from "@/i18n/config";
import { readMerged } from "./db";
import { defaultDocument } from "./registry";

/**
 * The effective document (CMS row merged over the built-in default) for a store
 * and locale — used by the admin editor to load current content.
 */
export async function getEffectiveDocument(store: string, locale: Locale): Promise<unknown> {
  return readMerged<unknown>(store, locale, defaultDocument(store, locale));
}
