import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import './index.css';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=50')
          .then((response) => response.json())
          .then((data) => setItems(data));
      } catch (err) {
        setError(err);
      }
    };

    fetchItems();
  }, []);

  return error ? (
    <div>{error}</div>
  ) : (
    <div className="gallery-wrapper">
      {items.map((item, index) => (
        <ImageCard title={item.title} image={item.url} key={index} />
      ))}
    </div>
  );
};

export default Gallery;
