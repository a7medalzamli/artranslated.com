"use client";

import type { PostStatus } from "@/lib/supabase/database.types";
import { publishPost, unpublishPost, deletePost } from "./actions";
import styles from "./posts.module.css";

export function PostAdminActions({ id, status }: { id: string; status: PostStatus }) {
  return (
    <div className={styles.adminActions}>
      {status === "draft" ? (
        <form action={publishPost}>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className={styles.publish}>
            Publish
          </button>
        </form>
      ) : (
        <form action={unpublishPost}>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className={styles.unpublish}>
            Unpublish
          </button>
        </form>
      )}

      <form
        action={deletePost}
        onSubmit={(e) => {
          if (!confirm("Delete this post? This cannot be undone.")) e.preventDefault();
        }}
      >
        <input type="hidden" name="id" value={id} />
        <button type="submit" className={styles.delete}>
          Delete
        </button>
      </form>
    </div>
  );
}
