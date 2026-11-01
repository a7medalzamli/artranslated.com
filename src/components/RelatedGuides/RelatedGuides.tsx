import { LocaleLink as Link } from "../LocaleLink/LocaleLink";
import { Section } from "../Section/Section";
import { getPublishedPosts } from "@/lib/blog/posts";
import { categoryLabel, categoryOf, type ClusterKey } from "@/content/postCategories";
import type { Locale } from "@/i18n";
import { routes } from "@/lib/routes";
import styles from "./RelatedGuides.module.css";

const TITLES: Record<Locale, { guides: string; articles: string; read: string }> = {
  en: { guides: "Related guides", articles: "Related articles", read: "Read the guide" },
  ar: { guides: "أدلة ذات صلة", articles: "مقالات ذات صلة", read: "اقرأ الدليل" },
  fr: { guides: "Guides associés", articles: "Articles associés", read: "Lire le guide" },
  es: { guides: "Guías relacionadas", articles: "Artículos relacionados", read: "Leer la guía" },
};

/**
 * Blog articles from the given topic clusters, in the page language. Shown on
 * service pages ("Related guides") and under articles ("Related articles").
 * Renders nothing when the cluster has no published article yet.
 */
export async function RelatedGuides({
  locale,
  clusters,
  exclude,
  variant = "guides",
  tinted = false,
  limit = 4,
  title,
}: {
  locale: string;
  clusters: ClusterKey[];
  exclude?: string;
  variant?: "guides" | "articles";
  tinted?: boolean;
  limit?: number;
  /** Overrides the default heading. */
  title?: string;
}) {
  const t = TITLES[locale as Locale] ?? TITLES.en;
  const categories = clusters.map(categoryOf);
  let posts = (await getPublishedPosts(undefined, locale)).filter(
    (p) => p.slug !== exclude && p.category && categories.includes(p.category),
  );
  // Under an article, fall back to the latest articles if the cluster has no others yet.
  if (posts.length === 0 && variant === "articles") {
    posts = (await getPublishedPosts(undefined, locale)).filter((p) => p.slug !== exclude);
  }
  posts = posts.slice(0, limit);
  if (posts.length === 0) return null;

  return (
    <Section tinted={tinted} title={title ?? (variant === "guides" ? t.guides : t.articles)}>
      <ul className={styles.grid}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`${routes.blog}/${post.slug}`} className={styles.card}>
              {post.category && <span className={styles.badge}>{categoryLabel(post.category, locale)}</span>}
              <span className={styles.title}>{post.title}</span>
              {post.excerpt && <span className={styles.excerpt}>{post.excerpt}</span>}
              <span className={styles.more}>
                {t.read} <span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
