import { useState } from "react";

import "./App.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleOpenBurger = () => {
    setIsOpen(!isOpen);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "wrapper light" : "wrapper dark"}>
      <button className="dark-mode" onClick={handleDarkMode}>Dark mode</button>
      <div className="hamburger-container" onClick={handleOpenBurger}>
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <div className={darkMode ? "line dark" : "line light"}></div>
          <div className={darkMode ? "line dark" : "line light"}></div>
          <div className={darkMode ? "line dark" : "line light"}></div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
