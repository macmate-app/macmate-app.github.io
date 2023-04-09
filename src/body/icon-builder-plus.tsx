import React from 'react';

import { screenshots, videos } from '../assets/icon-builder-plus';
import Screenshots from './screenshots';
import Vidoes from './videos';

const IconBuilderPlus = () => {
  return (
    <div className="container">
      <h1>Icon Builder Plus</h1>
      <Screenshots screenshots={screenshots} />
      <Vidoes videos={videos} />
    </div>
  );
};

export default IconBuilderPlus;
