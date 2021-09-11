import React from 'react';
import './index.css';

const Icon = ({ image, onClick, open, appName }) => {
  const upperAppName = appName[0].toUpperCase() + appName.slice(1);

  return (
    <div
      className="icon-wrapper"
      onClick={onClick}
      style={{ backgroundColor: open && 'rgba(255, 255, 255, 0.1)' }}
    >
      <div className="tooltip">{upperAppName}</div>
      <img src={image} alt={`${image}`} />
    </div>
  );
};

export default Icon;
