import { run } from 'shell-commands';
import { readdirSync, writeFileSync } from 'fs';

import { apps } from '../src/constants';

const gather = async () => {
  for (const a of apps) {
    const app = a.path.substring(1, a.path.length - 1);
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
    code += "export { default as icon } from './icon.png';\n";
    code += `
export const screenshots = [${screenshotIndexes.map((i) => `screenshot${i}`).join(', ')}];
export const videos = [${videoIndexes.map((i) => `video${i}`).join(', ')}];
`;
    writeFileSync(`src/assets/${app}/assets.ts`, code);
  }
};

gather();
