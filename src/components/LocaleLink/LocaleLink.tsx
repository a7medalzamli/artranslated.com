"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { defaultLocale, isLocale } from "@/i18n/config";

type LocaleLinkProps = ComponentProps<typeof NextLink>;

/** Current locale from the URL, falling back to the default. */
export function useCurrentLocale(): string {
  const pathname = usePathname() ?? "/";
  const seg = pathname.split("/")[1] ?? "";
  return isLocale(seg) ? seg : defaultLocale;
}

/**
 * Like Next's <Link>, but automatically prefixes internal, absolute hrefs
 * (e.g. "/services") with the current locale ("/fr/services"). External links,
 * anchors, mailto:/tel: and already-prefixed paths are left untouched.
 */
export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useCurrentLocale();
  let finalHref = href;

  if (typeof href === "string" && href.startsWith("/") && !href.startsWith("//")) {
    const firstSeg = href.split("/")[1] ?? "";
    if (!isLocale(firstSeg)) {
      finalHref = href === "/" ? `/${locale}` : `/${locale}${href}`;
    }
  }

  return <NextLink href={finalHref} {...props} />;
}
