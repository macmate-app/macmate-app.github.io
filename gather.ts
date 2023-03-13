import { run } from 'shell-commands';
import fs from 'fs';

const main = async () => {
  await run('cp ../icon-builder/icon.png ./maml/assets/img/icon-builder/');
  let i = 0;
  while (true) {
    const iconPath = `../icon-builder/test/screenshots/${i}.png`;
    if (!fs.existsSync(iconPath)) {
      break;
    }
    await run(`cp ${iconPath} ./maml/assets/img/icon-builder/`);
    i += 1;
  }
  await run(`
    cp ../icon-builder/test/videos/final.mp4 ./maml/assets/video/icon-builder/
    cp ../icon-builder/test/videos/original.webm ./maml/assets/video/icon-builder/
  `);
};

main();
