# Security review

Scope: the pending build of the translator website (Next.js App Router + Supabase).
Last reviewed: 2026-09-19.

## Summary

No high-severity issues found. The app follows least-privilege access, enforces
Row Level Security at the database, protects admin routes on the server, sanitizes
rendered content, and ships security headers. Items to complete at launch are
listed at the end.

## Checklist

### 1. Secrets management — PASS

- Secrets live only in `.env.local` (git-ignored) and, in production, Vercel env
  vars. Verified `.env.local` is not staged in any commit.
- The service-role (`sb_secret_…`) key is used only in server-only modules
  (`src/lib/supabase/admin.ts` imports `server-only`).
- **Verified the real secret value is absent from the client bundle**
  (`grep` of `.next/static` for the key value → not found). The string
  `sb_secret_` that appears in a client chunk is the Supabase library's own
  prefix check, not our key.
- Only `NEXT_PUBLIC_` values (Supabase URL + publishable key) reach the browser,
  which is by design (the publishable key is safe to expose and is constrained by
  RLS).

### 2. Row Level Security — PASS

- RLS enabled on `posts` and `quote_requests` with explicit policies.
- Automated tests (`tests/rls.test.ts`) prove against the live DB that anonymous
  users: can read only published posts; cannot read drafts; cannot write posts;
  can insert quote requests; cannot read/update/delete quote requests.

### 3. Admin authentication & route protection — PASS

- Supabase Auth (email/password); public sign-up disabled in the dashboard.
- Two layers: `middleware.ts` redirects unauthenticated `/admin/*` requests to
  login, and the protected admin layout re-verifies with `getUser()`.
- Tests (`tests/admin-auth.test.ts`) confirm unauthenticated redirects; e2e
  (`e2e/admin.spec.ts`) confirms the redirect in a browser.

### 4. Input validation & sanitization — PASS

- All form input is validated server-side with Zod (`signInSchema`,
  `quoteRequestSchema`, `postInputSchema`) regardless of client validation.
- Blog Markdown is rendered with `react-markdown` + `rehype-sanitize`, so stored
  content cannot inject scripts (covers the admin-authored content path).

### 5. Security headers — PASS

- Set in `next.config.ts` for all routes: `Content-Security-Policy`,
  `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options: DENY`,
  `Referrer-Policy`, `Permissions-Policy`. Verified present in responses.
- CSP note: `script-src`/`style-src` include `'unsafe-inline'` because Next.js
  injects inline bootstrap scripts/styles without a nonce pipeline. Tightening to
  a nonce-based CSP is possible future hardening.

### 6. Spam / abuse — PASS (basic)

- Quote form has a honeypot field and in-memory rate limiting. The limiter is
  best-effort on serverless; a shared store (e.g. Upstash) can replace it if spam
  becomes an issue. No CAPTCHA (per the brief, to be discussed before adding).

## To complete at/after launch

- Rotate the Supabase secret key once before go-live (it was shared during setup).
- Set all env vars in Vercel (never commit them).
- Run Lighthouse on the deployed URL and confirm 90+ (mobile).
- Consider a nonce-based CSP and a shared-store rate limiter as future hardening.
