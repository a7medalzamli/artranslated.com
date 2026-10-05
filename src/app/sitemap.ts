import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { getPublishedPosts } from "@/lib/blog/posts";

// Query the latest published posts at request time.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths: string[] = [
    routes.home,
    routes.services,
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

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedPosts();
    postEntries = posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
    }));
  } catch {
    // If the database is unreachable, still return the static routes.
  }

  return [...staticEntries, ...postEntries];
}
