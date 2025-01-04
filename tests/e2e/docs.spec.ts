import { test, expect } from '@playwright/test';

test.describe('Docs Pages', () => {
  test('should navigate to docs page', async ({ page }) => {
    await page.goto('/docs');
    
    // Check that the page loaded
    await expect(page).toHaveTitle(/Introduction - shadcn\/ui/);
    await page.waitForSelector('h1');
    await expect(page.locator('h1').filter({ hasText: 'Introduction' })).toBeVisible();
  });

  test('should navigate to nested docs page', async ({ page }) => {
    await page.goto('/docs/theming');
    
    // Check that the page loaded
    await expect(page).toHaveTitle(/Theming - shadcn\/ui/);
    await page.waitForSelector('h1');
    await expect(page.locator('h1').filter({ hasText: 'Theming' })).toBeVisible();
  });

  test('should return not found for /docs/getting-started', async ({ page }) => {
    const response = await page.goto('/docs/getting-started');
    expect(response?.status()).toBe(200);
    await expect(page.locator('text=This page could not be found')).toBeVisible();
  });
});
