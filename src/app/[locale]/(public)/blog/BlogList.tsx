"use client";

import { useEffect, useState } from "react";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import { routes } from "@/lib/routes";
import styles from "./blog.module.css";

export type BlogListItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  categoryLabel: string | null;
  meta: string;
};

/**
 * Article list with category filter. Filtering happens in the browser, so the
 * blog page itself can be pre-built and cached (the server sends every
 * article; search engines see them all). ?category=… links still work.
 */
export function BlogList({
  posts,
  categories,
  labels,
}: {
  posts: BlogListItem[];
  categories: { id: string; label: string }[];
  labels: { all: string; filterAria: string; emptyCategory: string; emptyNone: string };
}) {
  const [active, setActive] = useState<string | undefined>(undefined);

  // Read ?category= from the address on load, and follow back/forward.
  useEffect(() => {
    const read = () => {
      const c = new URLSearchParams(window.location.search).get("category") ?? undefined;
      setActive(c && categories.some((x) => x.id === c) ? c : undefined);
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, [categories]);

  const choose = (e: React.MouseEvent, id?: string) => {
    e.preventDefault();
    setActive(id);
    const url = id ? `?category=${encodeURIComponent(id)}` : window.location.pathname;
    window.history.pushState(null, "", url);
  };

  const shown = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <>
      <nav className={styles.filters} aria-label={labels.filterAria}>
        <Link
          href={routes.blog}
          className={styles.filter}
          aria-current={!active ? "true" : undefined}
          onClick={(e) => choose(e)}
        >
          {labels.all}
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`${routes.blog}?category=${encodeURIComponent(cat.id)}`}
            className={styles.filter}
            aria-current={active === cat.id ? "true" : undefined}
            onClick={(e) => choose(e, cat.id)}
          >
            {cat.label}
          </Link>
        ))}
      </nav>

      {shown.length === 0 ? (
        <p className={styles.empty}>{active ? labels.emptyCategory : labels.emptyNone}</p>
      ) : (
        <ul className={styles.list}>
          {shown.map((post) => (
            <li key={post.id}>
              <article className={styles.card}>
                {post.categoryLabel && <span className={styles.badge}>{post.categoryLabel}</span>}
                <h2 className={styles.cardTitle}>
                  <Link href={`${routes.blog}/${post.slug}`}>{post.title}</Link>
                </h2>
                {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                <p className={styles.meta}>{post.meta}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
