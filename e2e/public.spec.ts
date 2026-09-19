import { test, expect } from "@playwright/test";
import { createClient } from "@supabase/supabase-js";
import { env } from "./support/env";

test.describe("public site", () => {
  test("home renders and navigates to services", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Precise Arabic");
    await page.getByRole("link", { name: "Explore services" }).click();
    await expect(page).toHaveURL(/\/services$/);
  });

  test("blog listing loads", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByRole("heading", { name: "Blog", level: 1 })).toBeVisible();
  });

  test("submits a quote request and shows success", async ({ page }) => {
    const email = `e2e-${Date.now()}@example.com`;

    await page.goto("/contact");
    await page.fill('input[name="name"]', "E2E Tester");
    await page.fill('input[name="email"]', email);
    await page.selectOption('select[name="language_pair"]', "English → Arabic");
    await page.fill('textarea[name="message"]', "Automated test submission.");
    await page.getByRole("button", { name: "Send request" }).click();

    await expect(page.getByText("your request has been received")).toBeVisible();

    // Clean up the created row.
    if (env.url && env.serviceKey) {
      const admin = createClient(env.url, env.serviceKey, { auth: { persistSession: false } });
      await admin.from("quote_requests").delete().eq("email", email);
    }
  });
});
