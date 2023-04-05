import React from 'react';
import { createRoot } from 'react-dom/client';

import PageTitle from './page-title';
import store from './store';

const titleElement = document.querySelector('title')!;
const titleRoot = createRoot(titleElement);
titleRoot.render(<PageTitle store={store} />);
