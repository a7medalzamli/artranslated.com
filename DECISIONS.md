# Decisions

A running log of significant choices and the reason behind each one.
Newest entries at the top.

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
