import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { getPublishedPosts } from "@/lib/blog/posts";
import { postCategories, isPostCategory } from "@/content/postCategories";
import { formatDate, readingTimeMinutes } from "@/lib/blog/format";
import { routes } from "@/lib/routes";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog",
  description:
    "Notes on translation workflow, localization, terminology and confidentiality — from an English, French and Spanish into Arabic translator.",
};

// Always reflect the latest published posts (no redeploy needed).
export const dynamic = "force-dynamic";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category && isPostCategory(category) ? category : undefined;
  const posts = await getPublishedPosts(activeCategory);

  return (
    <>
      <PageHeader
        title="Blog"
        description="Notes on translation workflow, localization and terminology."
        breadcrumbs={[{ label: "Home", href: routes.home }, { label: "Blog" }]}
      />

      <Container>
        <nav className={styles.filters} aria-label="Filter by category">
          <Link
            href={routes.blog}
            className={styles.filter}
            aria-current={!activeCategory ? "true" : undefined}
          >
            All
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
          <p className={styles.empty}>
            {activeCategory
              ? "No posts in this category yet."
              : "No posts published yet — check back soon."}
          </p>
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
                    {formatDate(post.published_at)} &middot; {readingTimeMinutes(post.content)} min
                    read
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
