import React from 'react';
import { auto } from 'manate/react';

import { Store } from './store';
import { apps } from './assets';

const NavBar = (props: { store: Store }) => {
  const render = () => {
    const { store } = props;
    return (
      <ul className="nav navbar-nav">
        {apps.map((app) => (
          <li key={app.marketing.path} className={store.path === app.marketing.path ? 'active' : undefined}>
            <a href={app.marketing.path} data-testid={app.marketing.path}>
              {app.marketing.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return auto(render, props);
};

export default NavBar;
