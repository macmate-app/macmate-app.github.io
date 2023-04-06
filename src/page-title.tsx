import React from 'react';
import { auto } from 'manate/react';

import { Store } from './store';
import { apps } from './constants';

const PageTitle = (props: { store: Store }) => {
  const render = () => {
    const siteName = 'MacMate.app';
    const app = apps.find((a) => a.path === props.store.path);
    if (app) {
      return <>{`${app.name} - ${siteName}`}</>;
    }
    return <>{`${siteName} - Maximize your productivity and creativity`}</>;
  };
  return auto(render, props);
};

export default PageTitle;
