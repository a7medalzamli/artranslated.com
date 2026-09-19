# Owner's guide

A plain-language guide to running your website day to day. No coding needed.

## Logging in

1. Go to **https://your-domain/admin** (before launch: `http://localhost:3000/admin`).
2. Enter the email and password you created in Supabase.
3. You'll land on the **Dashboard**, showing how many posts and new quote requests
   you have.

To sign out, use **Sign out** in the sidebar. If you forget your password, reset
it in Supabase → Authentication → Users.

## Writing and publishing a blog post

1. In the admin sidebar, click **Posts** → **New post**.
2. Fill in:
   - **Title** — the headline. The **Slug** (the web address) fills in
     automatically; you can edit it.
   - **Excerpt** — a one-line summary shown in the blog list.
   - **Content** — write in **Markdown** (simple formatting). Use the live
     **preview** on the right to see how it looks. Quick Markdown:
     - `## Heading` for a section heading
     - `**bold**`, `*italic*`
     - `- item` for bullet points
     - `[link text](https://example.com)` for a link
   - **Category** — choose one (optional).
   - **Cover image** — upload a PNG/JPEG/WebP/GIF up to 5 MB (optional).
   - **SEO title / description** — optional; used by Google and social previews.
3. Click **Save**. The post is saved as a **draft** (not public yet).
4. When ready, click **Publish**. It appears on the live site within seconds —
   no redeploy needed.
5. To take it down, open the post and click **Unpublish**. To remove it for good,
   click **Delete** (asks for confirmation).

**Editing:** Posts → click a post → change anything → **Save**. If it's published,
use **View live** to see it.

## Managing quote requests

1. Sidebar → **Quote requests**. Newest first.
2. Filter with **All / New / Replied / Closed** at the top.
3. Each request shows the client's details and message. Click the email address
   to reply from your normal email program.
4. Change the **Status** dropdown (New → Replied → Closed) to keep track — it
   saves automatically.

> Clients are told **not** to send confidential files through the form. Agree
> terms (and an NDA if they want one) before they share anything sensitive.

## What to check monthly

- [ ] **Quote requests** — any "New" ones you haven't answered.
- [ ] **Supabase project** — on the free plan it can _pause_ after inactivity.
      Log into supabase.com occasionally, or upgrade to keep it always on
      (see LAUNCH-GUIDE.md → "When to go paid").
- [ ] **Drafts** — finish any blog posts you started.
- [ ] **Placeholders** — see `PLACEHOLDERS.md` for any `[bracketed]` text still to
      be filled in (your name, bio, legal details, etc.).
- [ ] **Legal pages** — the Terms and Privacy pages are **drafts**; have a lawyer
      finalize them before relying on them.

## Getting help / making changes

- The code lives in your private GitHub repo: `MontherAlzamli/translator-website`.
- Any change pushed to GitHub deploys automatically to Vercel.
- Keep `DECISIONS.md`, `ARCHITECTURE.md` and `PLACEHOLDERS.md` for reference.
