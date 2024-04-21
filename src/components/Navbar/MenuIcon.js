// MenuIcon.js
import React, { useState } from 'react';
import './MenuIcon.css';

const MenuIcon = () => {
  const [isOpenv, setIsOpenv] = useState(false);

  const handleClick = () => {
    setIsOpenv(!isOpenv);
  };
  return (
    <div className={`menu-icon ${isOpenv ? 'open' : ''}`} onClick={handleClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className={`bar2 ${isOpenv ? 'bar-2-open' : ''}`}></div>
    </div>
  );
};

export default MenuIcon;
