import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { locales } from "@/i18n";
import { getPublishedPosts } from "@/lib/blog/posts";

// Query the latest published posts at request time.
export const dynamic = "force-dynamic";

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
    routes.mtpe,
    routes.transcreation,
    routes.consulting,
    routes.aiDataAnnotation,
    routes.digitalMarketing,
    routes.technical,
    routes.legal,
    routes.financial,
    routes.healthcare,
    routes.audiovisual,
    routes.process,
    routes.confidentiality,
    routes.blog,
    routes.contact,
    routes.terms,
    routes.privacy,
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified: new Date(),
      alternates: alternates(path),
    })),
  );

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedPosts();
    postEntries = posts.flatMap((post) => {
      const path = `/blog/${post.slug}`;
      return locales.map((locale) => ({
        url: localeUrl(locale, path),
        lastModified: new Date(post.updated_at),
        alternates: alternates(path),
      }));
    });
  } catch {
    // If the database is unreachable, still return the static routes.
  }

  return [...staticEntries, ...postEntries];
}
