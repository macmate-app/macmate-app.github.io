import React from 'react';

import { screenshots, videos, icon } from '../assets/icon-builder-plus/assets';
import Screenshots from './screenshots';
import Vidoes from './videos';
import { mdi } from '../utils';
import marketing from '../assets/icon-builder-plus/marketing';

const IconBuilderPlus = () => {
  return (
    <div className="container">
      <h1>{marketing.name}</h1>
      <img src={icon} width="128" style={{ marginRight: '2rem' }} />
      <div dangerouslySetInnerHTML={{ __html: mdi.render(marketing.description) }}></div>
      <Screenshots screenshots={screenshots} />
      <h2>Features</h2>
      <div dangerouslySetInnerHTML={{ __html: mdi.render(marketing.features) }}></div>
      <h2>Video Demo</h2>
      <Vidoes videos={videos} />
    </div>
  );
};

export default IconBuilderPlus;
