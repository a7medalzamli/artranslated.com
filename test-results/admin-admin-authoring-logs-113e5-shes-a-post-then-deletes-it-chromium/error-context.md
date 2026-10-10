# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin.spec.ts >> admin authoring >> logs in, creates and publishes a post, then deletes it
- Location: e2e\admin.spec.ts:17:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Save' })
    - locator resolved to <button type="submit" class="editor-module__LID1mG__save">Save</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p class="CookieConsent-module__ORNcuG__text">…</p> from <div role="region" aria-label="Cookie consent" class="CookieConsent-module__ORNcuG__banner">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div role="region" aria-label="Cookie consent" class="CookieConsent-module__ORNcuG__banner">…</div> intercepts pointer events
  - retrying click action
    - waiting 100ms
    10 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <p class="CookieConsent-module__ORNcuG__text">…</p> from <div role="region" aria-label="Cookie consent" class="CookieConsent-module__ORNcuG__banner">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <p class="CookieConsent-module__ORNcuG__text">…</p> from <div role="region" aria-label="Cookie consent" class="CookieConsent-module__ORNcuG__banner">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div role="region" aria-label="Cookie consent" class="CookieConsent-module__ORNcuG__banner">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <p class="CookieConsent-module__ORNcuG__text">…</p> from <div role="region" aria-label="Cookie consent" class="CookieConsent-module__ORNcuG__banner">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p class="CookieConsent-module__ORNcuG__text">…</p> from <div role="region" aria-label="Cookie consent" class="CookieConsent-module__ORNcuG__banner">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
    - generic [ref=f1e2]:
        - complementary [ref=f1e3]:
            - generic [ref=f1e4]: Admin
            - navigation "Admin" [ref=f1e5]:
                - link "Dashboard" [ref=f1e6] [cursor=pointer]:
                    - /url: /admin
                - link "Home page" [ref=f1e7] [cursor=pointer]:
                    - /url: /admin/content
                - link "Site settings" [ref=f1e8] [cursor=pointer]:
                    - /url: /admin/settings
                - link "Posts" [ref=f1e9] [cursor=pointer]:
                    - /url: /admin/posts
                - link "Quote requests" [ref=f1e10] [cursor=pointer]:
                    - /url: /admin/quote-requests
                - link "View site →" [ref=f1e11] [cursor=pointer]:
                    - /url: /
            - generic [ref=f1e12]:
                - paragraph [ref=f1e13]: e2e-admin@example.com
                - button "Sign out" [ref=f1e15] [cursor=pointer]
        - main [ref=f1e16]:
            - generic [ref=f1e17]:
                - heading "New post" [level=1] [ref=f1e19]
                - generic [ref=f1e20]:
                    - generic [ref=f1e21]:
                        - generic [ref=f1e22]:
                            - generic [ref=f1e23]:
                                - generic [ref=f1e24]: Title
                                - textbox "Title" [ref=f1e25]: E2E Post 1791623133916
                            - generic [ref=f1e26]:
                                - generic [ref=f1e27]: Slug (URL)
                                - textbox "Slug (URL)" [ref=f1e28]:
                                    - /placeholder: auto-generated-from-title
                                    - text: e2e-post-1791623133916
                            - generic [ref=f1e29]:
                                - generic [ref=f1e30]: Excerpt
                                - textbox "Excerpt" [ref=f1e31]
                            - generic [ref=f1e32]:
                                - generic [ref=f1e33]: Content (Markdown)
                                - button "Hide preview" [ref=f1e34] [cursor=pointer]
                            - generic [ref=f1e35]:
                                - textbox "Content (Markdown)" [active] [ref=f1e36]: "# Hello End-to-end content."
                                - generic [ref=f1e38]:
                                    - heading "Hello" [level=1] [ref=f1e39]
                                    - paragraph [ref=f1e40]: End-to-end content.
                        - complementary [ref=f1e41]:
                            - generic [ref=f1e42]:
                                - generic [ref=f1e43]: Category
                                - combobox "Category" [ref=f1e44]:
                                    - option "— none —" [selected]
                                    - option "Workflow"
                                    - option "Terminology"
                                    - option "Confidentiality"
                                    - option "Audiovisual"
                                    - option "Localization"
                                    - option "AI & data"
                            - generic [ref=f1e45]:
                                - generic [ref=f1e46]: Cover image
                                - button "Choose File" [ref=f1e47]
                            - generic [ref=f1e48]:
                                - generic [ref=f1e49]: SEO title
                                - textbox "SEO title" [ref=f1e50]
                            - generic [ref=f1e51]:
                                - generic [ref=f1e52]: SEO description
                                - textbox "SEO description" [ref=f1e53]
                    - button "Save" [ref=f1e55] [cursor=pointer]
    - button "Open Next.js Dev Tools" [ref=f1e61] [cursor=pointer]
    - alert [ref=f1e65]
    - region "Cookie consent" [ref=f1e66]:
        - paragraph [ref=f1e67]:
            - text: This website uses privacy-friendly analytics to understand how the site is used. See the
            - link "privacy policy" [ref=f1e68] [cursor=pointer]:
                - /url: /privacy
            - text: .
        - generic [ref=f1e69]:
            - button "Decline" [ref=f1e70] [cursor=pointer]
            - button "Accept" [ref=f1e71] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { env } from "./support/env";
  3  |
  4  | test.describe("admin protection", () => {
  5  |   test("redirects unauthenticated users to login", async ({ page }) => {
  6  |     await page.goto("/admin");
  7  |     await expect(page).toHaveURL(/\/admin\/login/);
  8  |   });
  9  | });
  10 |
  11 | test.describe("admin authoring", () => {
  12 |   test.skip(
  13 |     !env.adminEmail || !env.adminPassword,
  14 |     "Set TEST_ADMIN_EMAIL and TEST_ADMIN_PASSWORD to run admin authoring e2e",
  15 |   );
  16 |
  17 |   test("logs in, creates and publishes a post, then deletes it", async ({ page }) => {
  18 |     // Accept the delete confirmation dialog automatically.
  19 |     page.on("dialog", (dialog) => dialog.accept());
  20 |
  21 |     await page.goto("/admin/login");
  22 |     await page.fill('input[name="email"]', env.adminEmail!);
  23 |     await page.fill('input[name="password"]', env.adminPassword!);
  24 |     await page.getByRole("button", { name: "Sign in" }).click();
  25 |     await expect(page).toHaveURL(/\/admin$/);
  26 |
  27 |     await page.goto("/admin/posts/new");
  28 |     const title = `E2E Post ${Date.now()}`;
  29 |     await page.fill('input[name="title"]', title);
  30 |     await page.fill('textarea[name="content"]', "# Hello\n\nEnd-to-end content.");
> 31 |     await page.getByRole("button", { name: "Save" }).click();
     |                                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 |
  33 |     // Now on the edit page — publish it.
  34 |     await expect(page.getByRole("button", { name: "Publish" })).toBeVisible();
  35 |     await page.getByRole("button", { name: "Publish" }).click();
  36 |     await expect(page.getByText("published")).toBeVisible();
  37 |
  38 |     // Clean up.
  39 |     await page.getByRole("button", { name: "Delete" }).click();
  40 |     await expect(page).toHaveURL(/\/admin\/posts$/);
  41 |   });
  42 | });
  43 |
```
