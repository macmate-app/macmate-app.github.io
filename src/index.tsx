import React from 'react';
import { createRoot } from 'react-dom/client';

import PageTitle from './page-title';
import store from './store';
import NavBar from './nav-bar';
import Body from './body';
import Footer from './footer';

createRoot(document.querySelector('title')!).render(<PageTitle store={store} />);
createRoot(document.getElementById('navbar-items')!).render(<NavBar store={store} />);
createRoot(document.getElementById('body-container')!).render(<Body store={store} />);
createRoot(document.getElementById('footer-container')!).render(<Footer />);

// Disable internal link redirect
// Because it is SPA, routes are handled by React + manate.
document.addEventListener('click', (event) => {
  if ((event?.target as HTMLElement).nodeName === 'A') {
    const a = event.target as HTMLAnchorElement;
    const href = a.getAttribute('href');
    if (href?.startsWith('/') && href?.endsWith('/')) {
      store.path = href;
      event.preventDefault();
    }
  }
});
