import React from 'react';

import { mdi } from '../utils';
import { screenshots as ibpScreenshots } from '../assets/icon-builder-plus/assets';
import { screenshots as tpScreenshots } from '../assets/typescript-playground/assets';
import ibpMarketing from '../assets/icon-builder-plus/marketing';
import tpMarketing from '../assets/typescript-playground/marketing';

const apps = [
  { name: ibpMarketing.name, slogan: ibpMarketing.slogan, screenshot: ibpScreenshots[0], path: ibpMarketing.path },
  { name: tpMarketing.name, slogan: tpMarketing.slogan, screenshot: tpScreenshots[0], path: tpMarketing.path },
];

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
        <div id="main-carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {apps.map((app, i) => (
              <li
                data-target="#main-carousel"
                data-slide-to="0"
                className={i === 0 ? 'active' : undefined}
                key={i}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {apps.map((app, i) => (
              <div className={i === 0 ? 'item active' : 'item'} key={i}>
                <a href={app.path}>
                  <img src={app.screenshot} />
                  <div className="carousel-caption">
                    <h4>{app.name}</h4>
                    <h6>{app.slogan}</h6>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <a className="left carousel-control" href="#main-carousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#main-carousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
