/**
 * Seeds the four starter blog posts as DRAFTS with placeholder bodies.
 * Idempotent: skips any post whose slug already exists.
 *
 * Run with:  node --env-file=.env.local scripts/seed-posts.mjs
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

const slugify = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const body = (intro) => `> **Draft — placeholder text.** Replace this with your own article.

## Introduction

${intro}

## Key points

- [First key point]
- [Second key point]
- [Third key point]

## Conclusion

[Write your closing thoughts here, and end with a clear call to action.]
`;

const posts = [
  {
    title: "What a TEP workflow actually includes, and why it matters for your project",
    category: "Workflow",
    excerpt: "A plain-language walkthrough of Translation, Editing and Proofreading.",
    content: body("[Explain what TEP means and why each stage protects quality.]"),
  },
  {
    title: "Counting syllables: how lip-sync works when dubbing Spanish into Arabic",
    category: "Audiovisual",
    excerpt: "Why dubbing is about timing and syllables, not just words.",
    content: body("[Explain how syllable counts and timing are matched to on-screen lips.]"),
  },
  {
    title: "Why I sign the NDA before I open your file",
    category: "Confidentiality",
    excerpt: "Confidentiality comes first — before any file is opened.",
    content: body("[Explain your confidentiality-first approach and what clients can expect.]"),
  },
  {
    title: "Environmental terminology in Arabic: where dictionaries fall short",
    category: "Terminology",
    excerpt: "Where general dictionaries fail technical environmental texts.",
    content: body("[Explain the terminology challenges and how you solve them.]"),
  },
];

let created = 0;
for (const post of posts) {
  const slug = slugify(post.title);
  const { data: existing, error: selErr } = await supabase
    .from("posts")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();
  if (selErr) {
    console.error("Lookup failed:", slug, selErr.message);
    process.exit(1);
  }
  if (existing) {
    console.log("skip (exists):", slug);
    continue;
  }

  const { error } = await supabase.from("posts").insert({
    title: post.title,
    slug,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    status: "draft",
  });
  if (error) {
    console.error("Insert failed:", slug, error.message);
    process.exit(1);
  }
  console.log("created:", slug);
  created += 1;
}

console.log(`Done. Created ${created} post(s).`);
