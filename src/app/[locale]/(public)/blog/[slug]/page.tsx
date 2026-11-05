import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { Markdown } from "@/components/Markdown/Markdown";
import { JsonLd } from "@/components/JsonLd/JsonLd";
import { getPublishedPostBySlug, publishedLocalesFor } from "@/lib/blog/posts";
import { formatDate, readingTimeMinutes } from "@/lib/blog/format";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n";
import { locales } from "@/i18n/config";
import { routes } from "@/lib/routes";
import { siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { LocaleLink as Link } from "@/components/LocaleLink/LocaleLink";
import { RelatedGuides } from "@/components/RelatedGuides/RelatedGuides";
import { AuthorBox } from "@/components/Trust/Trust";
import { ids } from "@/lib/entity";
import { fitTitle } from "@/lib/seoTitle";
import { clusters } from "@/content/postCategories";
import styles from "./post.module.css";

/** Lead-in for the link from an article to its main service page. */
const PILLAR_LEAD: Record<Locale, string> = {
  en: "Related service:",
  ar: "الخدمة ذات الصلة:",
  fr: "Service associé :",
  es: "Servicio relacionado:",
};

// Articles are built on first visit, then cached and refreshed hourly (see the
// public layout). None are pre-built, so scheduled articles never leak early.
export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPublishedPostBySlug(slug, locale);
  if (!post) return { title: "Post not found" };

  const title = post.seo_title || post.title;
  const live = await publishedLocalesFor(post.slug, locales);
  const description = post.seo_description || post.excerpt || undefined;

  return {
    title: fitTitle(title),
    description,
    alternates: {
      canonical: `/${locale}/blog/${post.slug}`,
      languages: {
        ...Object.fromEntries(
          live.map((l) => [l, `/${l}/blog/${post.slug}`]),
        ),
        ...(live.includes("en")
          ? { "x-default": `/en/blog/${post.slug}` }
          : {}),
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      images: post.cover_image_url ? [{ url: post.cover_image_url }] : undefined,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getContent(locale as Locale);
  const post = await getPublishedPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const cluster = clusters.find((c) => c.label.en === post.category);

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt ?? undefined,
    image: post.cover_image_url ?? undefined,
    datePublished: post.published_at ?? undefined,
    dateModified: post.updated_at,
    // Named author with credentials (E-E-A-T), linked to the person and business in the site-wide graph.
    author: {
      "@type": "Person",
      "@id": ids.person,
      name: site.name,
      url: `${siteUrl}/${locale}${routes.about}`,
    },
    url: `${siteUrl}/${locale}/blog/${post.slug}`,
    mainEntityOfPage: `${siteUrl}/${locale}/blog/${post.slug}`,
    inLanguage: locale,
    publisher: { "@id": ids.business },
  };

  return (
    <>
      <JsonLd data={blogPosting} />
      <PageHeader
        eyebrow={post.category ?? undefined}
        title={post.title}
        long
        locale={locale}
        breadcrumbs={[
          { label: t.common.homeCrumb, href: routes.home },
          { label: t.blog.crumb, href: routes.blog },
          { label: post.title },
        ]}
      />

      <Container className={styles.article}>
        <p className={styles.meta}>
          {formatDate(post.published_at)} &middot; {readingTimeMinutes(post.content)} {t.blog.minRead}
        </p>

        {post.cover_image_url && (
          <div className={styles.cover}>
            <Image
              src={post.cover_image_url}
              alt={post.title}
              width={1200}
              height={630}
              sizes="(min-width: 75em) 1100px, 100vw"
              className={styles.coverImg}
              priority
            />
          </div>
        )}

        <Markdown>{post.content}</Markdown>

        {cluster && (
          <p className={styles.pillar}>
            <span>{PILLAR_LEAD[locale as Locale] ?? PILLAR_LEAD.en}</span>{" "}
            <Link href={cluster.pillar}>
              {cluster.label[locale as Locale] ?? cluster.label.en}
            </Link>
          </p>
        )}

        <AuthorBox locale={locale} />
      </Container>

      {cluster && (
        <RelatedGuides locale={locale} clusters={[cluster.key]} exclude={post.slug} variant="articles" tinted limit={3} />
      )}
    </>
  );
}
