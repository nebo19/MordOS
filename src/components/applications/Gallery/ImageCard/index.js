import React from 'react';
import './index.css';

const ImageCard = ({ image, title }) => {
  return (
    <div className="image-card-wrapper">
      <img
        src={image}
        alt={title}
        onClick={() => window.open(image, '_blank').focus()}
      />
      <p>{title}</p>
    </div>
  );
};

export default ImageCard;
