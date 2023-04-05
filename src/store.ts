import { manage } from 'manate';

import { paths } from './constants';

export class Store {
  public path: (typeof paths)[number] = '/';
}

const store = manage(new Store());

export default store;
