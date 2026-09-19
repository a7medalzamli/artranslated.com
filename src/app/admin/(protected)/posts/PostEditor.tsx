"use client";

import { useActionState, useId, useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Markdown } from "@/components/Markdown/Markdown";
import { slugify } from "@/lib/blog/format";
import { postCategories } from "@/content/postCategories";
import type { Post } from "@/lib/blog/posts";
import type { PostFormState } from "./actions";
import styles from "./editor.module.css";

type EditorAction = (state: PostFormState, formData: FormData) => Promise<PostFormState>;

const ACCEPTED = ["image/png", "image/jpeg", "image/webp", "image/gif"];
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

export function PostEditor({ action, post }: { action: EditorAction; post?: Post }) {
  const [state, formAction, pending] = useActionState<PostFormState, FormData>(action, {
    error: null,
  });

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(post?.slug));
  const [content, setContent] = useState(post?.content ?? "");
  const [coverUrl, setCoverUrl] = useState(post?.cover_image_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  const ids = useId();

  function onTitleChange(value: string) {
    setTitle(value);
    if (!slugEdited) setSlug(slugify(value));
  }

  async function onFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    if (!ACCEPTED.includes(file.type)) {
      setUploadError("Use a PNG, JPEG, WebP or GIF image.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setUploadError("Image must be 5 MB or smaller.");
      return;
    }

    setUploading(true);
    try {
      const supabase = createClient();
      const ext = file.name.split(".").pop() ?? "img";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from("post-images").upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (error) {
        setUploadError(error.message);
        return;
      }
      const {
        data: { publicUrl },
      } = supabase.storage.from("post-images").getPublicUrl(path);
      setCoverUrl(publicUrl);
    } finally {
      setUploading(false);
    }
  }

  return (
    <form action={formAction} className={styles.form}>
      {post && <input type="hidden" name="id" value={post.id} />}
      <input type="hidden" name="cover_image_url" value={coverUrl} />

      <div className={styles.grid}>
        <div className={styles.main}>
          <label className={styles.field}>
            <span>Title</span>
            <input
              name="title"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              required
            />
          </label>

          <label className={styles.field}>
            <span>Slug (URL)</span>
            <input
              name="slug"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
                setSlugEdited(true);
              }}
              placeholder="auto-generated-from-title"
            />
          </label>

          <label className={styles.field}>
            <span>Excerpt</span>
            <textarea name="excerpt" rows={2} defaultValue={post?.excerpt ?? ""} />
          </label>

          <div className={styles.contentHead}>
            <label htmlFor={`${ids}-content`}>Content (Markdown)</label>
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setShowPreview((v) => !v)}
            >
              {showPreview ? "Hide preview" : "Show preview"}
            </button>
          </div>

          <div className={showPreview ? styles.split : undefined}>
            <textarea
              id={`${ids}-content`}
              name="content"
              className={styles.editor}
              rows={18}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {showPreview && (
              <div className={styles.preview}>
                {content.trim() ? (
                  <Markdown>{content}</Markdown>
                ) : (
                  <p className={styles.previewEmpty}>Preview appears here.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <aside className={styles.side}>
          <label className={styles.field}>
            <span>Category</span>
            <select name="category" defaultValue={post?.category ?? ""}>
              <option value="">— none —</option>
              {postCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>

          <div className={styles.field}>
            <span>Cover image</span>
            {coverUrl && (
              <Image
                src={coverUrl}
                alt=""
                width={320}
                height={168}
                className={styles.coverPreview}
              />
            )}
            <input type="file" accept={ACCEPTED.join(",")} onChange={onFile} disabled={uploading} />
            {uploading && <p className={styles.hint}>Uploading…</p>}
            {uploadError && <p className={styles.error}>{uploadError}</p>}
            {coverUrl && (
              <button type="button" className={styles.remove} onClick={() => setCoverUrl("")}>
                Remove image
              </button>
            )}
          </div>

          <label className={styles.field}>
            <span>SEO title</span>
            <input name="seo_title" defaultValue={post?.seo_title ?? ""} />
          </label>

          <label className={styles.field}>
            <span>SEO description</span>
            <textarea name="seo_description" rows={3} defaultValue={post?.seo_description ?? ""} />
          </label>
        </aside>
      </div>

      {state.error && (
        <p role="alert" className={styles.error}>
          {state.error}
        </p>
      )}

      <div className={styles.actions}>
        <button type="submit" className={styles.save} disabled={pending || uploading}>
          {pending ? "Saving…" : "Save"}
        </button>
      </div>
    </form>
  );
}
