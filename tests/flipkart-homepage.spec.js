test('Search for iphone 16pro and wait for results', async ({ page }) => {
  await page.goto('https://www.flipkart.com');
  // Wait for the search box to be visible
  const searchBox = page.getByPlaceholder('Search for Products, Brands and More');
  await expect(searchBox).toBeVisible();
  // Type the search query and press Enter
  await searchBox.fill('iphone 16pro');
  await searchBox.press('Enter');
  // Wait for the results page to load (wait for a heading or product grid)
  await expect(page.getByText(/iphone 16pro/i)).toBeVisible({ timeout: 10000 });
});
import { test, expect } from '@playwright/test';

test('Flipkart homepage loads successfully', async ({ page }) => {
  await page.goto('https://www.flipkart.com');
  // Check for the Flipkart logo link in the header (exact match)
  await expect(page.getByRole('link', { name: 'Flipkart', exact: true })).toBeVisible();
});
