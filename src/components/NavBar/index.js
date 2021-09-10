import React from 'react';
import useDate from '../../hooks/useDate';

import './index.css';

const NavBar = () => {
  const { date, time, wish } = useDate();

  return (
    <div className="navbar-wrapper">
      <h1>
        {wish}
        <span>Mr. Borgoth</span>
      </h1>
      <h2>{date}</h2>
      <h2>{time}</h2>
    </div>
  );
};

export default NavBar;
