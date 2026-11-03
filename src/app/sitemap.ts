import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { locales } from "@/i18n";
import { getPublishedPosts, publishedLocalesFor } from "@/lib/blog/posts";

// Query the latest published posts at request time.
export const dynamic = "force-dynamic";

/**
 * Date the site content last changed. Update it when pages are edited, so the
 * sitemap tells search engines what really changed instead of marking every
 * page as new on each deploy.
 */
const CONTENT_UPDATED = new Date("2026-11-02");

/** Build a per-locale URL for a path ("/" → "/<locale>"). */
function localeUrl(locale: string, path: string): string {
  return `${siteUrl}/${locale}${path === "/" ? "" : path}`;
}

/** hreflang alternates map for a path across all locales. */
function alternates(path: string) {
  return {
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localeUrl(l, path)])),
      "x-default": localeUrl("en", path),
    },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths: string[] = [
    routes.home,
    routes.about,
    routes.services,
    routes.translation,
    routes.editing,
    routes.mtpe,
    routes.transcreation,
    routes.consulting,
    routes.digitalMarketing,
    routes.technical,
    routes.legal,
    routes.financial,
    routes.healthcare,
    routes.saasLocalization,
    routes.forBusinesses,
    routes.forAgencies,
    routes.arabicMarkets,
    routes.frenchToArabic,
    routes.spanishToArabic,
    routes.process,
    routes.confidentiality,
    routes.blog,
    routes.contact,
    routes.wordCounter,
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified: CONTENT_UPDATED,
      alternates: alternates(path),
    })),
  );

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    // Each language lists only the articles already published in that language
    // (language versions of an article can go out on different days).
    const perLocale = await Promise.all(locales.map((l) => getPublishedPosts(undefined, l)));
    postEntries = locales.flatMap((locale, i) =>
      perLocale[i].map((post) => {
        const path = `/blog/${post.slug}`;
        const live = publishedLocalesFor(post.slug, locales);
        return {
          url: localeUrl(locale, path),
          lastModified: new Date(post.updated_at),
          alternates: {
            languages: {
              ...Object.fromEntries(live.map((l) => [l, localeUrl(l, path)])),
              ...(live.includes("en") ? { "x-default": localeUrl("en", path) } : {}),
            },
          },
        };
      }),
    );
  } catch {
    // If the database is unreachable, still return the static routes.
  }

  return [...staticEntries, ...postEntries];
}
