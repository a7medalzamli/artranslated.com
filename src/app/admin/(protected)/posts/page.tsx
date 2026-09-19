import Link from "next/link";
import { getAllPosts } from "@/lib/blog/posts";
import { adminRoutes } from "@/lib/routes";
import { formatDate } from "@/lib/blog/format";
import styles from "./posts.module.css";

export const dynamic = "force-dynamic";

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
                <th>Status</th>
                <th>Category</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <Link href={`${adminRoutes.posts}/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>
                    <span className={post.status === "published" ? styles.published : styles.draft}>
                      {post.status}
                    </span>
                  </td>
                  <td>{post.category ?? "—"}</td>
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
