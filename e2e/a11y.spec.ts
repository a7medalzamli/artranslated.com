import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/** Accessibility scan of every public page (WCAG 2.0/2.1 A & AA rules). */
const publicPaths = [
  "/",
  "/services",
  "/services/technical",
  "/services/legal",
  "/services/financial",
  "/services/healthcare",
  "/services/audiovisual",
  "/process",
  "/confidentiality",
  "/work",
  "/blog",
  "/contact",
  "/terms",
  "/privacy",
];

for (const path of publicPaths) {
  test(`a11y: ${path}`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
