import type { Metadata } from "next";

const BRAND = " | Ahmed Alzamli";
/** Google shows about 60 characters of a title in search results. */
const MAX_TITLE = 60;

/**
 * Page title for search results: adds "| Ahmed Alzamli" only when the full
 * title still fits in 60 characters; otherwise the page title is used alone.
 */
export function fitTitle(title: string): Metadata["title"] {
  return { absolute: title.length + BRAND.length <= MAX_TITLE ? `${title}${BRAND}` : title };
}
