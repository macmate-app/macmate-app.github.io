import { test, expect } from '@playwright/test';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { run } from 'shell-commands';

import { apps, pages } from '../src/constants';

const port = 3000;

test.beforeAll(async () => {
  await run(`
    rm -rf docs
    yarn parcel build src/index.html --dist-dir docs
  `);
  run(`timeout 10s yarn http-server -p ${port} docs -c-1`); // auto quit after 5s
});
test.afterAll(async () => {
  await run(`
    yarn lint
    cp -r saved/* docs/
    rm -rf saved
  `);
});

const saveFile = (path: string, _content: string) => {
  const folderPath = join(__dirname, '..', 'saved', path);
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true });
  }
  let content = _content;
  content = content.replace(/<script type="module" src="\/index\.[a-z0-9]+?\.js"><\/script>/, '');
  content = content.replace(/<html __playwright_target__="call@.+?">/, '<html>');
  writeFileSync(join(folderPath, 'index.html'), content);
};

test('Home Page', async ({ page }) => {
  await page.goto(`http://localhost:${port}/`);
  await expect(page).toHaveTitle(/MacMate.app - /);
  saveFile('.', await page.content());
});

test('Apps', async ({ page }) => {
  await page.goto(`http://localhost:${port}/`);
  for (const app of apps) {
    await page.getByTestId(app.path).click();
    await expect(page).toHaveTitle(`${app.name} - MacMate.app`);
    saveFile(app.path, await page.content());
  }
});

test('Pages', async ({ page }) => {
  await page.goto(`http://localhost:${port}/`);
  for (const p of pages) {
    await page.getByText(p.name).click();
    await expect(page).toHaveTitle(`${p.name} - MacMate.app`);
    saveFile(p.path, await page.content());
  }
});
