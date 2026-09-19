import { createPost } from "../actions";
import { PostEditor } from "../PostEditor";
import styles from "../posts.module.css";

export default function NewPostPage() {
  return (
    <div>
      <div className={styles.head}>
        <h1>New post</h1>
      </div>
      <PostEditor action={createPost} />
    </div>
  );
}
