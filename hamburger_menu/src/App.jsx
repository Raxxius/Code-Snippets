import { useState } from 'react'

import './App.css'

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-container" onClick={handleClick}>
      <div className={`hamburger ${isOpen ? 'open' : ''}`}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Hamburger;

