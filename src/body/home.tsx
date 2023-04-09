import React from 'react';

import { mdi } from '../utils';
import { screenshots as ss0 } from '../assets/icon-builder-plus';
import { screenshots as ss1 } from '../assets/typescript-playground';
import Screenshots from './screenshots';

const screenshots = [ss0[0], ss1[0]];

const markdown = `
Looking to boost your productivity and creativity on your Mac? Look no further than our collection of professionally-built apps designed to help you get the job done quickly and efficiently.

Our apps are not just hobby projects - they're designed with the needs of professionals in mind. Whether you're a developer, designer, or general user, our apps are the perfect tools to help you achieve your goals.

So why wait? Try out our apps today and take your productivity and creativity to the next level!
`;
const html = mdi.render(markdown);

const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <h2>Power up your productivity and creativity with our professionally-built Mac apps.</h2>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
      <div className="container">
        <Screenshots screenshots={screenshots} />
      </div>
    </>
  );
};

export default Home;
