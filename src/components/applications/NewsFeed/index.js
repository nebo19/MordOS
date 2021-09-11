import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import './index.css';

const NewsFeed = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        await fetch('https://jsonplaceholder.typicode.com/comments/?_limit=50')
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
    <div className="news-feed-wrapper">
      {items.map((item, index) => (
        <NewsCard title={item.name} content={item.body} key={index} />
      ))}
    </div>
  );
};

export default NewsFeed;
