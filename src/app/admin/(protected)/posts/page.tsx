import Link from "next/link";
import { getAllPosts } from "@/lib/blog/posts";
import { adminRoutes } from "@/lib/routes";
import { formatDate } from "@/lib/blog/format";
import styles from "./posts.module.css";

export const dynamic = "force-dynamic";

const LANGUAGE: Record<string, string> = { en: "English", ar: "Arabic", fr: "French", es: "Spanish" };

/** "published" posts with a future date are scheduled: they go live on that date. */
function statusOf(post: { status: string; published_at: string | null }): "draft" | "scheduled" | "published" {
  if (post.status !== "published") return "draft";
  return post.published_at && Date.parse(post.published_at) > Date.now() ? "scheduled" : "published";
}

export default async function AdminPostsPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <div className={styles.head}>
        <h1>Posts</h1>
        <Link href={`${adminRoutes.posts}/new`} className={styles.newButton}>
          New post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className={styles.empty}>No posts yet. Create your first one.</p>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Language</th>
                <th>Status</th>
                <th>Category</th>
                <th>Publish date</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td dir="auto">
                    <Link href={`${adminRoutes.posts}/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>{LANGUAGE[post.locale] ?? post.locale}</td>
                  <td>
                    <span className={styles[statusOf(post)]}>{statusOf(post)}</span>
                  </td>
                  <td>{post.category ?? "—"}</td>
                  <td>{formatDate(post.published_at) || "—"}</td>
                  <td>{formatDate(post.updated_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
