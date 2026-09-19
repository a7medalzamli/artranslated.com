import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/blog/posts";
import { routes } from "@/lib/routes";
import { updatePost } from "../actions";
import { PostEditor } from "../PostEditor";
import { PostAdminActions } from "../PostAdminActions";
import styles from "../posts.module.css";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className={styles.editHead}>
        <h1>
          Edit post
          <span className={post.status === "published" ? styles.published : styles.draft}>
            {post.status}
          </span>
        </h1>
        {post.status === "published" && (
          <Link href={`${routes.blog}/${post.slug}`} target="_blank" className={styles.viewLive}>
            View live &#8599;
          </Link>
        )}
      </div>

      <PostAdminActions id={post.id} status={post.status} />
      <PostEditor action={updatePost} post={post} />
    </div>
  );
}
