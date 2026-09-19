import { defineConfig, devices } from "@playwright/test";

/**
 * E2E config. Specs live in ./e2e (Vitest owns ./tests). Playwright starts the
 * dev server itself. Admin specs auto-skip unless TEST_ADMIN_EMAIL /
 * TEST_ADMIN_PASSWORD are set (a real admin user must exist in Supabase Auth).
 *
 * Run: npx playwright install  (one-time)  then  npm run test:e2e
 */
export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  reporter: "list",
  use: {
    baseURL: process.env.E2E_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
