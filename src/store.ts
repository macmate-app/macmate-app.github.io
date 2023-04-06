import { manage } from 'manate';

export class Store {
  public path = '/';
}

const store = manage(new Store());

export default store;
