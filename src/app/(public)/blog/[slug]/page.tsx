import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Container } from "@/components/Container/Container";
import { Markdown } from "@/components/Markdown/Markdown";
import { getPublishedPostBySlug } from "@/lib/blog/posts";
import { formatDate, readingTimeMinutes } from "@/lib/blog/format";
import { routes } from "@/lib/routes";
import styles from "./post.module.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || undefined;

  return {
    title,
    description,
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow={post.category ?? undefined}
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: routes.home },
          { label: "Blog", href: routes.blog },
          { label: post.title },
        ]}
      />

      <Container size="narrow" className={styles.article}>
        <p className={styles.meta}>
          {formatDate(post.published_at)} &middot; {readingTimeMinutes(post.content)} min read
        </p>

        {post.cover_image_url && (
          <div className={styles.cover}>
            <Image
              src={post.cover_image_url}
              alt=""
              width={1200}
              height={630}
              className={styles.coverImg}
              priority
            />
          </div>
        )}

        <Markdown>{post.content}</Markdown>
      </Container>
    </>
  );
}
