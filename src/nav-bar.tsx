import React from 'react';
import { auto } from 'manate/react';

import { Store } from './store';
import { apps } from './constants';

const NavBar = (props: { store: Store }) => {
  const render = () => {
    const { store } = props;
    return (
      <ul className="nav navbar-nav">
        {apps.map((app) => (
          <li key={app.path} className={store.path === app.path ? 'active' : undefined}>
            <a href={app.path}>{app.name}</a>
          </li>
        ))}
      </ul>
    );
  };
  return auto(render, props);
};

export default NavBar;
