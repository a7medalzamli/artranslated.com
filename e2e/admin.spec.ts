import { test, expect } from "@playwright/test";
import { env } from "./support/env";

test.describe("admin protection", () => {
  test("redirects unauthenticated users to login", async ({ page }) => {
    await page.goto("/admin");
    await expect(page).toHaveURL(/\/admin\/login/);
  });
});

test.describe("admin authoring", () => {
  test.skip(
    !env.adminEmail || !env.adminPassword,
    "Set TEST_ADMIN_EMAIL and TEST_ADMIN_PASSWORD to run admin authoring e2e",
  );

  test("logs in, creates and publishes a post, then deletes it", async ({ page }) => {
    // Accept the delete confirmation dialog automatically.
    page.on("dialog", (dialog) => dialog.accept());

    await page.goto("/admin/login");
    await page.fill('input[name="email"]', env.adminEmail!);
    await page.fill('input[name="password"]', env.adminPassword!);
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page).toHaveURL(/\/admin$/);

    await page.goto("/admin/posts/new");
    const title = `E2E Post ${Date.now()}`;
    await page.fill('input[name="title"]', title);
    await page.fill('textarea[name="content"]', "# Hello\n\nEnd-to-end content.");
    await page.getByRole("button", { name: "Save" }).click();

    // Now on the edit page — publish it.
    await expect(page.getByRole("button", { name: "Publish" })).toBeVisible();
    await page.getByRole("button", { name: "Publish" }).click();
    await expect(page.getByText("published")).toBeVisible();

    // Clean up.
    await page.getByRole("button", { name: "Delete" }).click();
    await expect(page).toHaveURL(/\/admin\/posts$/);
  });
});
