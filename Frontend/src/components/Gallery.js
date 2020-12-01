import React, { useState, useEffect } from 'react';
import Craft from './Crafts';

function Gallery({flag}) {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch('/gallery')
      .then((x) => x.json())
      .then((data) => setArts(data));
  }, [flag]);

  return (
    <div>
      {arts.map((art) => {
        return <Craft author={art['author']} src={art['img']} key={art['id']} />;
      })}
    </div>
  );
}

export default Gallery;
