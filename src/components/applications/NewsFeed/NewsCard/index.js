import React from 'react';
import './index.css';

const NewsCard = ({ title, content }) => {
  return (
    <div className="news-card-wrapper">
      <div className="news-card-title">
        <strong>Title:</strong> {title}
      </div>
      <div>
        <strong>Content:</strong> {content}
      </div>
    </div>
  );
};

export default NewsCard;
