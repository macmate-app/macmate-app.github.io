import React from 'react';
import { auto } from 'manate/react';

import { Store } from './store';

const PageTitle = (props: { store: Store }) => {
  const render = () => {
    const siteName = 'MacMate.app';
    let title = siteName;
    switch (props.store.path) {
      case '/icon-builder-plus/': {
        title = 'Icon Builder Plus - ' + siteName;
        break;
      }
      case '/typescript-playground/': {
        title = 'TypeScript Playground - ' + siteName;
        break;
      }
      default: {
        break;
      }
    }
    return <>{title}</>;
  };
  return auto(render, props);
};

export default PageTitle;
