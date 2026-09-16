# Decisions

A running log of significant choices and the reason behind each one.
Newest entries at the top.

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
