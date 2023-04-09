import React from 'react';

import { mdi } from '../utils';
import { screenshots as ss0 } from '../assets/icon-builder-plus/assets';
import { screenshots as ss1 } from '../assets/typescript-playground/assets';

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
            <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#main-carousel" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <a href="/icon-builder-plus/">
                <img src={ss0[0]} />
                <div className="carousel-caption">
                  <h4>Icon Builder Plus</h4>
                  <h6>Design stunning icons with ease</h6>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="/typescript-playground/">
                <img src={ss1[0]} />
                <div className="carousel-caption">
                  <h4>TypeScript Playground</h4>
                  <h6>The fastest and easiest way to run TypeScript snippets.</h6>
                </div>
              </a>
            </div>
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
