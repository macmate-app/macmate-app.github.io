import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await expect(page).toHaveTitle(/MacMate.app/);
});
