/**
 * Set a post's status by slug. Utility for local checks.
 * Usage: node --env-file=.env.local scripts/set-post-status.mjs <slug> <draft|published>
 */
import { createClient } from "@supabase/supabase-js";

const [slug, status] = process.argv.slice(2);
if (!slug || !["draft", "published"].includes(status)) {
  console.error("Usage: set-post-status.mjs <slug> <draft|published>");
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

const update =
  status === "published"
    ? { status: "published", published_at: new Date().toISOString() }
    : { status: "draft" };

const { error } = await supabase.from("posts").update(update).eq("slug", slug);
if (error) {
  console.error("Failed:", error.message);
  process.exit(1);
}
console.log(`${slug} -> ${status}`);
