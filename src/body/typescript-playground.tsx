import React from 'react';

import { screenshots, videos } from '../assets/typescript-playground';
import Screenshots from './screenshots';
import Vidoes from './videos';

const TypeScriptPlayground = () => {
  return (
    <div className="container">
      <h1>TypeScript Playground</h1>
      <Screenshots screenshots={screenshots} />
      <Vidoes videos={videos} />
    </div>
  );
};

export default TypeScriptPlayground;
