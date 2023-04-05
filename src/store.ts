import { manage } from 'manate';

export class Store {
  public path = '/';
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
