import pkg from "@/../package.json" with { type: "json" };
import { expect, test } from "@playwright/test";

test.describe("Docs Pages", () => {
  test("should navigate to docs page", async ({ page }) => {
    await page.goto("/docs");

    // Check that the page loaded
    await expect(page).toHaveTitle(new RegExp(`Introduction - ${pkg.name}`));
    await page.waitForSelector("h1");
    await expect(
      page.locator("h1").filter({ hasText: "Introduction" }),
    ).toBeVisible();
  });

  test("should navigate to nested docs page", async ({ page }) => {
    await page.goto("/docs/theming");

    // Check that the page loaded
    await expect(page).toHaveTitle(new RegExp(`Theming - ${pkg.name}`));
    await page.waitForSelector("h1");
    await expect(
      page.locator("h1").filter({ hasText: "Theming" }),
    ).toBeVisible();
  });

  test("should return not found for /docs/getting-started", async ({
    page,
  }) => {
    const response = await page.goto("/docs/getting-started");
    expect(response?.status()).toBe(404);
    await expect(
      page.locator("text=This page could not be found"),
    ).toBeVisible();
  });
});
