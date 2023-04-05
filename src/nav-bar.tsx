import React from 'react';
import { auto } from 'manate/react';

import { Store } from './store';

const NavBar = (props: { store: Store }) => {
  const render = () => {
    const { store } = props;
    return (
      <ul className="nav navbar-nav">
        <li className={store.path === '/icon-builder-plus/' ? 'active' : undefined}>
          <a href="/icon-builder-plus/">Icon Builder Plus</a>
        </li>
      </ul>
    );
  };
  return auto(render, props);
};

export default NavBar;
