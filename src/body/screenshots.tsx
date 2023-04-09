import React from 'react';

const Screenshots = (props: { screenshots: string[] }) => {
  const { screenshots } = props;
  return (
    <div id="main-carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {screenshots.map((screenshot, index) => (
          <li
            key={index}
            data-target="#main-carousel"
            data-slide-to={index}
            className={index === 0 ? 'active' : undefined}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner" role="listbox">
        {screenshots.map((screenshot, index) => (
          <div key={index} className={index === 0 ? 'item active' : 'item'}>
            <img src={screenshot} />
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
  );
};

export default Screenshots;
