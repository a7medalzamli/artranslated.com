# Architecture

This document records the **one agreed way** to do each thing in this project.
If you are tempted to do something differently, update this file first and explain
why in `DECISIONS.md`.

## Technology stack (fixed)

| Concern          | Choice                                                          |
| ---------------- | --------------------------------------------------------------- |
| Framework        | Next.js (App Router) + TypeScript **strict**                    |
| Node runtime     | Node 24 (matches local dev)                                     |
| Database         | PostgreSQL on Supabase                                          |
| Auth & Storage   | Supabase Auth + Supabase Storage                                |
| Supabase in Next | Official `@supabase/ssr` (server + browser clients)             |
| Validation       | **Zod** (server-side validation for every input)                |
| Email            | Resend                                                          |
| Styling          | Plain CSS + CSS custom properties (CSS Modules). No frameworks. |
| Testing          | Vitest (unit) + Playwright (e2e, added in Milestone 9)          |
| Hosting          | Vercel                                                          |
| Package manager  | npm only                                                        |
| Source control   | Git + GitHub (private)                                          |

Verified stable versions at project start (2026-09-16): Next.js 16.3.5,
React 19.2, `@supabase/ssr` 0.12.x.

## Folder structure

```
src/
  app/
    (public)/        # public-facing site (English at root for launch)
    admin/           # admin area, protected on the server (Milestone 5)
    api/             # route handlers (e.g. quote form) (Milestone 7)
    layout.tsx       # root layout
    page.tsx         # home page
    globals.css      # global styles / design tokens (tokens land in Milestone 2)
  components/        # reusable UI components
  lib/
    supabase/        # THE single Supabase client setup (server.ts, client.ts, middleware)
    validation/      # Zod schemas (one per form/entity)
    email/           # Resend helpers
  styles/            # shared CSS (design tokens, mixins)
  i18n/              # internationalization structure (English now, Arabic/RTL later)
supabase/
  migrations/        # every DB change as a migration file (never dashboard-only)
tests/               # Vitest unit/integration tests
e2e/                 # Playwright end-to-end tests (Milestone 9)
docs/                # reference material (e.g. the content brief)
```

## Conventions

- **Routing:** App Router only. Never add the Pages Router.
- **Supabase clients:** exactly one setup under `src/lib/supabase`. Browser client
  for Client Components; server client for Server Components / Server Actions /
  Route Handlers. The **service role key is used only in server-only code** and is
  never imported into anything that reaches the browser.
- **Validation:** every input is validated on the server with Zod, even when it is
  also validated in the browser.
- **Security:** Row Level Security is enabled on every table with explicit policies.
  No table is publicly writable.
- **Database changes:** only through migration files committed to `supabase/migrations`.
- **Styling:** CSS Modules (`*.module.css`) for component styles; design tokens as
  CSS custom properties in the global stylesheet. Light/dark follows the system
  setting.
- **Secrets:** never committed. Names live in `.env.example`; values live in
  `.env.local` (git-ignored) and in Vercel environment variables.
- **Definition of done:** `npm run lint`, `npm run typecheck`, `npm run test` and
  `npm run build` all pass with zero errors (`npm run check` runs all four).

## Scripts

| Command                | What it does                                    |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the local dev server                      |
| `npm run build`        | Production build                                |
| `npm run start`        | Run the production build locally                |
| `npm run lint`         | ESLint                                          |
| `npm run typecheck`    | TypeScript type check (no emit)                 |
| `npm run test`         | Vitest (unit/integration)                       |
| `npm run format`       | Format all files with Prettier                  |
| `npm run format:check` | Check formatting without changing files         |
| `npm run check`        | lint + typecheck + test + build (the full gate) |
