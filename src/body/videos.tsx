import React from 'react';

const Vidoes = (props: { videos: string[] }) => {
  const { videos } = props;
  const arr = videos.map((video, index) => (
    <video controls width="100%" key={index}>
      <source src={video} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  ));
  return <>{arr.flatMap((e, i) => (i === arr.length - 1 ? [e] : [e, <hr />]))}</>;
};

export default Vidoes;
