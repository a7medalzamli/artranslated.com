import type { Metadata } from "next";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { getPublishedPosts } from "@/lib/blog/posts";
import { postCategories, isPostCategory } from "@/content/postCategories";
import { formatDate, readingTimeMinutes } from "@/lib/blog/format";
import { getContent } from "@/i18n/content";
import { buildCmsMetadata } from "@/lib/cms/metadata";
import { getSeoText } from "@/content/seoText";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import styles from "./blog.module.css";

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

// Always reflect the latest published posts (no redeploy needed).
export const dynamic = "force-dynamic";

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  const t = await getContent(locale as Locale);
  const b = t.blog;
  const { category } = await searchParams;
  const activeCategory = category && isPostCategory(category) ? category : undefined;
  const posts = await getPublishedPosts(activeCategory);

  return (
    <>
      <PageHeader
        title={b.title}
        description={b.description}
        locale={locale}
        breadcrumbs={[{ label: t.common.homeCrumb, href: routes.home }, { label: b.crumb }]}
      />

      <Container>
        <nav className={styles.filters} aria-label={b.filterAria}>
          <Link
            href={routes.blog}
            className={styles.filter}
            aria-current={!activeCategory ? "true" : undefined}
          >
            {b.all}
          </Link>
          {postCategories.map((cat) => (
            <Link
              key={cat}
              href={`${routes.blog}?category=${encodeURIComponent(cat)}`}
              className={styles.filter}
              aria-current={activeCategory === cat ? "true" : undefined}
            >
              {cat}
            </Link>
          ))}
        </nav>

        {posts.length === 0 ? (
          <p className={styles.empty}>{activeCategory ? b.emptyCategory : b.emptyNone}</p>
        ) : (
          <ul className={styles.list}>
            {posts.map((post) => (
              <li key={post.id}>
                <article className={styles.card}>
                  {post.category && <span className={styles.badge}>{post.category}</span>}
                  <h2 className={styles.cardTitle}>
                    <Link href={`${routes.blog}/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                  <p className={styles.meta}>
                    {formatDate(post.published_at)} &middot; {readingTimeMinutes(post.content)}{" "}
                    {b.minRead}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
