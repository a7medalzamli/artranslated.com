import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { getPublishedPosts } from "@/lib/blog/posts";
import { postCategories, categoryLabel } from "@/content/postCategories";
import { formatDate, readingTimeMinutes } from "@/lib/blog/format";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getSeoText } from "@/content/seoText";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import { BlogList } from "./BlogList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  return buildCmsMetadata({
    path: "/blog",
    locale,
    defaultTitle: t.blog.title,
    defaultDescription: getSeoText(locale).blog,
    seo: t.seo.blog,
  });
}

// Pre-built and cached; refreshed hourly (see the public layout) so newly
// scheduled articles appear without a redeploy.

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const b = t.blog;
  const allPosts = await getPublishedPosts(undefined, locale);
  // Only offer categories that have at least one article in this language.
  const usedCategories = postCategories.filter((c) => allPosts.some((p) => p.category === c));

  return (
    <>
      <PageHeader
        title={b.title}
        description={b.description}
        locale={locale}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: b.crumb }]}
      />

      <Container>
        <BlogList
          posts={allPosts.map((post) => ({
            id: String(post.id),
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt ?? null,
            category: post.category ?? null,
            categoryLabel: post.category ? categoryLabel(post.category, locale) : null,
            meta: `${formatDate(post.published_at)} · ${readingTimeMinutes(post.content)} ${b.minRead}`,
          }))}
          categories={usedCategories.map((c) => ({ id: c, label: categoryLabel(c, locale) }))}
          labels={{ all: b.all, filterAria: b.filterAria, emptyCategory: b.emptyCategory, emptyNone: b.emptyNone }}
        />
      </Container>
    </>
  );
}
