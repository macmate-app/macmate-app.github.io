import { test, expect } from '@playwright/test';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { run } from 'shell-commands';

test.beforeAll(async () => {
  await run(`
    rm -rf docs
    yarn parcel build src/index.html --dist-dir docs
  `);
  run('timeout 5s yarn http-server -p 1234 docs -c-1'); // auto quit after 5s
});
test.afterAll(async () => {
  await run(`
    yarn lint
    cp -r saved/* docs/
    rm -rf saved
  `);
});

const saveFile = (_content: string, ...paths: string[]) => {
  const folderPath = join(__dirname, '..', 'saved', ...paths);
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true });
  }
  let content = _content;
  content = content.replace(/<script type="module" src="\/index\.[a-z0-9]+?\.js"><\/script>/, '');
  content = content.replace(/<html __playwright_target__="call@.+?">/, '<html>');
  writeFileSync(join(folderPath, 'index.html'), content);
};

test('Home Page', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await expect(page).toHaveTitle('MacMate.app');
  saveFile(await page.content());
});

test('Icon Builder Plus', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await page.getByText('Icon Builder Plus').click();
  await expect(page).toHaveTitle('Icon Builder Plus - MacMate.app');
  saveFile(await page.content(), 'icon-builder-plus');
});

test('TypeScript Playground', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await page.getByText('TypeScript Playground').click();
  await expect(page).toHaveTitle('TypeScript Playground - MacMate.app');
  saveFile(await page.content(), 'typescript-playground');
});

test('Page content', async ({ page }) => {
  await page.goto('http://localhost:1234/');
  await page.getByText('TypeScript Playground').click();
  const content = await page.content();
  expect(content).toContain('<title>TypeScript Playground - MacMate.app</title>');
});
