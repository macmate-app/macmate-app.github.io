import { test, expect } from '@playwright/test';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { run } from 'shell-commands';

const port = 3000;

test.beforeAll(async () => {
  await run(`
    rm -rf docs
    yarn parcel build src/index.html --dist-dir docs
  `);
  run(`timeout 5s yarn http-server -p ${port} docs -c-1`); // auto quit after 5s
});
test.afterAll(async () => {
  await run(`
    yarn lint
    cp -r saved/* docs/
    rm -rf saved
    rm -rf test-results
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
  const regex = new RegExp(`http://localhost:${port}/`, 'g');
  content = content.replace(regex, '/');
  writeFileSync(join(folderPath, 'index.html'), content);
};

// 这是有点神奇的操作。把一个SPA转成传统的静态网站。
// 原理很简单，就是把所有页面的内容都点出来，然后保存实时的html。
test('Make the whole site static', async ({ page }) => {
  await page.goto(`http://localhost:${port}/`);
  const content = await page.content();
  await expect(page).toHaveTitle(/MacMate.app - /);
  for (const href of content.match(/href=".+?"/g) ?? []) {
    const path = href.substring(6, href.length - 1);
    if (!(path.startsWith('/') && path.endsWith('/'))) {
      continue;
    }
    const link = await page.$(`a[href="${path}"]`);
    await link!.click();
    saveFile(path, await page.content());
  }
});
