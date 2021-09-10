import React from 'react';
import './index.css';

const Icon = ({ image, onClick }) => {
  return (
    <div className="icon-wrapper" onClick={onClick}>
      <img src={image} alt={`${image}`} />
    </div>
  );
};

export default Icon;
