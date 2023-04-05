import React from 'react';
import { auto } from 'manate/react';

import { Store } from './store';

const PageTitle = (props: { store: Store }) => {
  const render = () => <>{props.store.title}</>;
  return auto(render, props);
};

export default PageTitle;
