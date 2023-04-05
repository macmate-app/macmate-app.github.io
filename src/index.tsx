import React from 'react';
import { createRoot } from 'react-dom/client';

import PageTitle from './page-title';
import store from './store';
import NavBar from './nav-bar';
import { paths } from './constants';

createRoot(document.querySelector('title')!).render(<PageTitle store={store} />);
createRoot(document.getElementById('navbar-items')!).render(<NavBar store={store} />);

document.addEventListener('click', (event) => {
  if ((event?.target as HTMLElement).nodeName === 'A') {
    const a = event.target as HTMLAnchorElement;
    const href = a.getAttribute('href');
    if (paths.includes(href as (typeof paths)[number])) {
      store.path = href as (typeof paths)[number];
      event.preventDefault();
    }
  }
});
