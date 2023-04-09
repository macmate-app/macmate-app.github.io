import { run } from 'shell-commands';
import { readdirSync, writeFileSync } from 'fs';

const apps = ['icon-builder-plus', 'typescript-playground'];

const gather = async () => {
  for (const app of apps) {
    await run(`
      rm -rf src/assets/${app}
      mkdir -p src/assets/${app}
      cp -r ~/src/ts/${app}/icon.png src/assets/${app}/
      mkdir -p src/assets/${app}/screenshots
      cp -r ~/src/ts/${app}/test/screenshots/[0-9].png src/assets/${app}/screenshots/
      mkdir -p src/assets/${app}/videos
      cp -r ~/src/ts/${app}/test/videos/[0-9].mp4 src/assets/${app}/videos/
      cp ~/src/ts/${app}/marketing.ts src/assets/${app}/
    `);
    const screenshotCounts = readdirSync(`src/assets/${app}/screenshots`).length;
    const screenshotIndexes = Array.from({ length: screenshotCounts }, (_, i) => i);
    const videoCounts = readdirSync(`src/assets/${app}/videos`).length;
    const videoIndexes = Array.from({ length: videoCounts }, (_, i) => i);
    let code = screenshotIndexes.map((i) => `import screenshot${i} from './screenshots/${i}.png';\n`).join('');
    code += videoIndexes.map((i) => `import video${i} from './videos/${i}.mp4';\n`).join('');
    code += "import icon from './icon.png';\n";
    code += `
const screenshots = [${screenshotIndexes.map((i) => `screenshot${i}`).join(', ')}];
const videos = [${videoIndexes.map((i) => `video${i}`).join(', ')}];

const assets = { screenshots, videos, icon };
export default assets;
`;
    writeFileSync(`src/assets/${app}/assets.ts`, code);
  }

  writeFileSync(
    'src/assets/index.ts',
    `
  ${apps
    .map(
      (app, i) => `import assets${i} from './${app}/assets';
  import marketing${i} from './${app}/marketing';`,
    )
    .join('\n  ')}
  
  export const apps = [
    ${apps.map((_, i) => `{ assets: assets${i}, marketing: marketing${i} }`).join(', ')},
  ];
  
  export const pages = [
    { path: '/customer-support/', name: 'Customer Support' },
    { path: '/privacy-policy/', name: 'Privacy Policy' },
  ];
`,
  );

  await run('yarn lint');
};

gather();
