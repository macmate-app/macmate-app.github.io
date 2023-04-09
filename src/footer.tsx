import React from 'react';

import { pages } from './assets';

const Footer = () => {
  return (
    <>
      {`© ${new Date().getFullYear().toString()} MacMate.app. All rights reserved.`}
      <span className="pull-right">
        {pages.map((page) => (
          <a href={page.path} key={page.path}>
            {page.name}
          </a>
        ))}
      </span>
    </>
  );
};

export default Footer;
