import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await expect(page).toHaveTitle('MacMate.app');
});

test('Icon Builder Plus', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await page.getByText('Icon Builder Plus').click();
  await expect(page).toHaveTitle('Icon Builder Plus - MacMate.app');
});

test('TypeScript Playground', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await page.getByText('TypeScript Playground').click();
  await expect(page).toHaveTitle('TypeScript Playground - MacMate.app');
});

test('Page content', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await page.getByText('TypeScript Playground').click();
  const content = await page.content();
  expect(content).toContain('<title>TypeScript Playground - MacMate.app</title>');
});
