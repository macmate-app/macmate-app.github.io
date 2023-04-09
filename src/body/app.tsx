import React from 'react';

import Screenshots from './screenshots';
import Vidoes from './videos';
import { mdi } from '../utils';
import macappstore from '../assets/macappstore.png';

const App = (props: {
  assets: { screenshots: string[]; videos: string[]; icon: string };
  marketing: { name: string; description: string; features: string; download: string | undefined };
}) => {
  const { screenshots, videos, icon } = props.assets;
  const { marketing } = props;
  return (
    <div className="markdown-body">
      <h1>{marketing.name}</h1>
      <img src={icon} width="128" style={{ marginRight: '2rem' }} />
      <div dangerouslySetInnerHTML={{ __html: mdi.render(marketing.description) }}></div>
      <Screenshots screenshots={screenshots} />
      <h2>Features</h2>
      <div dangerouslySetInnerHTML={{ __html: mdi.render(marketing.features) }}></div>
      <h2>Download</h2>
      {marketing.download && (
        <a href={marketing.download} target="_blank">
          <img src={macappstore} />
        </a>
      )}
      {marketing.download === undefined && (
        <>
          <img src={macappstore} />
          <p>This app will be listed in the Mac App Store soon, please stay tuned.</p>
        </>
      )}
      <h2>Video Demo</h2>
      <Vidoes videos={videos} />
    </div>
  );
};

export default App;
