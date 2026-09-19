# Decisions

A running log of significant choices and the reason behind each one.
Newest entries at the top.

## 2026-09-19 — Milestone 9: Testing & security review

- **Unit tests (Vitest):** validation schemas (auth, quote, post) and blog
  helpers, plus the existing RLS and middleware-protection tests — 27 total.
- **E2E (Playwright):** public browse, blog listing, and a full quote submission
  driven in a real browser; admin route-protection redirect. The admin
  authoring test (login → create → publish → delete) is gated on
  `TEST_ADMIN_EMAIL`/`TEST_ADMIN_PASSWORD` and auto-skips until an admin user
  exists.
- **Accessibility:** added `@axe-core/playwright` (dev-only) and scan all 14
  public pages against WCAG 2.0/2.1 A & AA — zero violations. (New dependency
  beyond the listed stack; it's the standard tool for the brief's required a11y
  checks and Playwright was already approved.)
- **Security headers** in `next.config.ts` (CSP, HSTS, X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy, Permissions-Policy). `'unsafe-eval'`
  is allowed in **development only** (React dev needs it); production CSP omits it.
- **Security review** documented in `SECURITY.md`: no high-severity findings;
  verified the service-role key value is absent from the client bundle.

## 2026-09-16 — Milestone 8: SEO & performance

- **`metadataBase` from `NEXT_PUBLIC_SITE_URL`** (localhost fallback), plus
  site-wide Open Graph/Twitter defaults in the root layout; every page/post sets
  its own title, description and **canonical** URL.
- **`sitemap.ts`** (dynamic) lists all static routes plus published post URLs;
  **`robots.ts`** allows everything except `/admin` and points to the sitemap.
- **Structured data** via a small `JsonLd` component: `ProfessionalService` on the
  home page, `BlogPosting` on each post.
- **Images through `next/image`** (cover images from `*.supabase.co`).
- **Lighthouse target (90+ mobile) to be measured on the deployed URL** — the
  practices that achieve it are in place (font optimization, image optimization,
  semantic HTML, minimal client JS, metadata); the score itself needs the live
  site and is verified at/after launch.

## 2026-09-16 — Milestone 7: Quote request form

- **Server Action + Zod** with per-field errors returned to the form. The insert
  uses the anonymous server client (RLS permits `insert` only), keeping least
  privilege rather than the service role.
- **Save first, email second.** The request is saved, then `sendQuoteEmails` runs
  best-effort in a try/catch — email failure (or missing Resend config) never
  blocks the saved request or the success message shown to the visitor.
- **Spam protection = honeypot + in-memory rate limit** (no CAPTCHA, per the
  brief's "ask first" rule). The rate limiter is best-effort on serverless; a
  shared store can replace it later without changing call sites.
- **No file uploads**, with an explicit notice not to send confidential files
  until terms/NDA are agreed.
- **Admin quote-requests**: list with status filter and inline status change
  (new/replied/closed) that auto-saves.
- **Resend added** (approved stack). Emails degrade gracefully until
  `RESEND_API_KEY` / `EMAIL_FROM` / `QUOTE_NOTIFICATION_EMAIL` are set.

## 2026-09-16 — Milestone 6: Blog

- **Markdown rendering via react-markdown + remark-gfm + rehype-sanitize**
  (approved). No raw HTML injection and output is sanitized, so post content and
  the live editor preview cannot run injected scripts.
- **Public blog pages are `force-dynamic`** so newly published/edited posts appear
  immediately with no redeploy; admin writes also call `revalidatePath`.
- **Cover images in a public `post-images` Storage bucket** (migration
  `20260916100000_...`): public read, authenticated (admin) write; the editor
  also enforces type (PNG/JPEG/WebP/GIF) and size (≤5 MB) before upload.
- **Slugs auto-generate from the title, stay editable, and are de-duplicated**
  (`-2`, `-3`, …) server-side.
- **Four starter posts seeded as drafts** via `scripts/seed-posts.mjs`
  (idempotent) rather than a migration, so content isn't tied to schema.
- **Reading time + slug are pure, unit-tested helpers** (`src/lib/blog/format`).
- **Next image optimization allowed for `*.supabase.co`** so cover images use
  `next/image`.

## 2026-09-16 — Milestone 5: Admin login

- **Auth = Supabase Auth email/password.** The only user is the admin; public
  signup is disabled in the Supabase dashboard (no signup UI exists either).
- **Two-layer protection.** `src/middleware.ts` (matcher `/admin/:path*`) runs
  `updateSession` to refresh the session and redirect unauthenticated users to
  `/admin/login`; the protected admin layout _also_ verifies with `getUser()`
  (defense in depth). Middleware is scoped to `/admin` so the public site works
  even without Supabase env.
- **Route group `admin/(protected)`** holds the authenticated area (dashboard,
  posts, quote-requests); `admin/login` sits outside it to avoid a redirect loop.
- **Login via Server Action** with Zod validation; errors are generic
  ("Invalid email or password") to avoid leaking which emails exist.
- **Admin pages are `noindex`** via metadata.
- **Vitest:** added `@`→`src` alias (needed for runtime value imports) and
  middleware protection tests.

## 2026-09-16 — Milestone 4: Database

- **Two tables, RLS on both** (`posts`, `quote_requests`) with explicit policies.
  The only authenticated user is the admin (public signup disabled in M5), so
  policies grant `authenticated` full access and restrict `anon` to reading
  published posts and inserting quote requests.
- **No separate `categories` table.** Small fixed set; `posts.category` is text,
  validated in the app with Zod. Avoids an extra table/join for no real benefit.
- **New Supabase API key format.** The project uses Supabase's new
  publishable/secret keys (`sb_publishable_…` / `sb_secret_…`) instead of the
  legacy `anon`/`service_role` JWTs. They are drop-in compatible; env var names
  kept as `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY`.
- **Types hand-written** to match the schema (small surface); can be regenerated
  with the Supabase CLI later.
- **RLS tests load `.env.local` via a manual parser**, not `@next/env`, because
  Next skips `.env.local` when `NODE_ENV=test` (which Vitest sets). Tests skip
  cleanly when keys are absent so CI stays green.

## 2026-09-16 — Milestone 3: Public pages

- **Content lives in typed data modules** under `src/content` (specializations,
  additional services, trust signals, success stories) so the home page and the
  services/work pages stay in sync and never duplicate copy.
- **Only brief-sourced facts are used.** Success-story figures come straight from
  the brief; anything not in the brief (name, bio, institutions, retention
  period, legal specifics) is a bracketed placeholder tracked in PLACEHOLDERS.md.
- **Home hero uses a client `LanguageSample`** with EN/FR/ES source tabs sharing
  one Arabic target — satisfying the switchable translation-panel requirement.
- **New reusable components:** `Section`, `Card`/`CardGrid`, `Callout`.
- **Terms & Privacy are clearly marked drafts** (warning callout + eyebrow) with a
  lawyer-review note, per the brief.
- **Custom 404** (`app/not-found.tsx`) renders inside the site chrome by including
  the header/footer directly, since the root not-found sits outside the
  `(public)` group layout.

## 2026-09-16 — Milestone 2: Design system and layout

- **Color palette:** deep teal-blue primary (`#14506e`) with a muted teal accent
  (`#0d7d74`) and calm neutrals — professional, not template-like. Full token set
  (color, spacing, type, radius, shadow, layout) lives in `src/styles/tokens.css`.
- **Dark mode follows the system setting only** (`prefers-color-scheme`), per the
  brief. In dark mode the brand tones lighten and buttons use dark text, keeping
  WCAG AA contrast.
- **Fonts** loaded via `next/font` (IBM Plex Sans + IBM Plex Sans Arabic) and
  exposed as CSS variables `--font-ibm-plex-sans` / `--font-ibm-plex-sans-arabic`.
- **i18n without a new dependency.** Rather than add `next-intl`, we use a small
  typed dictionary system (`src/i18n`): English is the source of truth; Arabic
  chrome strings are provided; `localeDirection` drives `<html dir>`. Full Arabic
  _content_ remains out of scope for launch (structure only).
- **Shared layout via a `(public)` route group** so every public page gets the
  header (nav + Request a quote + mobile menu), skip link, `<main>` and footer.
- **Stub pages for every route** were added so navigation works end to end now;
  their real content is written in Milestone 3.
- **`typecheck` runs `next typegen` first** to avoid failures from stale generated
  route types after pages are added/removed.

## 2026-09-16 — Milestone 1: Project foundation

- **Next.js 16.3.5 with the App Router, TypeScript strict.** Matches the fixed
  stack. App Router only; the Pages Router is never used.
- **Updated global npm 8.17.0 → latest (12.x).** The machine had a stale global
  npm from the Node 16 era shadowing the npm bundled with Node 24. npm 8 can
  mis-resolve modern dependency trees; updating avoids install problems. This is
  tooling maintenance, not a new project dependency.
- **Bumped `@types/node` from ^20 to ^24.** The scaffold pinned v20, but the
  machine runs Node 24 and Vitest requires `@types/node` v22+. Aligning the types
  with the actual runtime is the correct fix (no `--force`/`--legacy-peer-deps`).
- **Vitest chosen as the unit test runner.** Needed to satisfy the "test" script
  and the testing requirements in later milestones. Fast, TS-native, integrates
  with Vite. Playwright will be added in Milestone 9 for end-to-end tests.
- **Prettier added and integrated with ESLint via `eslint-config-prettier`.** One
  formatting tool; ESLint no longer fights Prettier over style.
- **No CSS framework.** Plain CSS + CSS custom properties via CSS Modules, per the
  brief. Design tokens arrive in Milestone 2.
- **Content brief kept under `docs/` for reference; the original `.docx` at the
  repo root is git-ignored** to avoid committing a duplicate binary. The brief is
  the single source of truth for content (no invented clients/claims).

## Format for future entries

```
## YYYY-MM-DD — <short title>
- **Decision.** Why. Alternatives considered and why rejected.
```
