import React from 'react';
import { auto } from 'manate/react';

import { Store } from './store';
import { apps, pages } from './assets';

const PageTitle = (props: { store: Store }) => {
  const render = () => {
    const siteName = 'MacMate.app';
    const app = apps.find((a) => a.marketing.path === props.store.path);
    if (app) {
      return <>{`${app.marketing.name} - ${siteName}`}</>;
    }
    const page = pages.find((p) => p.path === props.store.path);
    if (page) {
      return <>{`${page.name} - ${siteName}`}</>;
    }
    return <>{`${siteName} - Maximize your productivity and creativity`}</>;
  };
  return auto(render, props);
};

export default PageTitle;
