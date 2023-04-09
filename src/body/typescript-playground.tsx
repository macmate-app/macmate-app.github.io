import React from 'react';

import { screenshots, videos, icon } from '../assets/typescript-playground/assets';
import Screenshots from './screenshots';
import Vidoes from './videos';
import marketing from '../assets/typescript-playground/marketing';
import { mdi } from '../utils';

const TypeScriptPlayground = () => {
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

export default TypeScriptPlayground;
