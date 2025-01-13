import pkg from "@/../package.json" with { type: "json" };
import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load successfully", async ({ page }) => {
    await test.step("Navigate to homepage", async () => {
      await page.goto("/");
    });

    await test.step("Verify page title", async () => {
      await expect(page).toHaveTitle(new RegExp(`${pkg.name}`));
    });

    await test.step("Check for header", async () => {
      const header = page.getByRole("banner");
      await expect(header).toBeVisible();
    });

    await test.step("Take screenshot", async () => {
      await expect(page).toHaveScreenshot("homepage.png", {
        fullPage: true,
        maxDiffPixels: 100,
        timeout: 15000, // Give more time for animations/loading
      });
    });
  });
});
