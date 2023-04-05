import { manage } from 'manate';

import { paths } from './constants';

export class Store {
  public path: (typeof paths)[number] = '/';
  public get title() {
    const siteName = 'MacMate.app';
    switch (this.path) {
      case '/icon-builder-plus/': {
        return 'Icon Builder Plus - ' + siteName;
      }
      default: {
        return siteName;
      }
    }
  }
}

const store = manage(new Store());

export default store;
