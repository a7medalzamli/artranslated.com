import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { locales, defaultLocale, isLocale } from "@/i18n/config";

/** Pick a locale from the cookie, then the Accept-Language header, then default. */
function detectLocale(request: NextRequest): string {
  const cookie = request.cookies.get("locale")?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const accept = request.headers.get("accept-language");
  if (accept) {
    for (const part of accept.split(",")) {
      const code = part.split(";")[0]?.trim().slice(0, 2).toLowerCase();
      if (code && isLocale(code)) return code;
    }
  }
  return defaultLocale;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin area: keep the Supabase session logic; it is never localized.
  if (pathname.startsWith("/admin")) {
    try {
      return await updateSession(request);
    } catch {
      if (pathname !== "/admin/login") {
        const url = request.nextUrl.clone();
        url.pathname = "/admin/login";
        return NextResponse.redirect(url);
      }
      return NextResponse.next();
    }
  }

  // Public pages: make sure the path starts with a supported locale.
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (!hasLocale) {
    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals, API routes and files with an
  // extension (static assets, sitemap.xml, robots.txt, images, etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
