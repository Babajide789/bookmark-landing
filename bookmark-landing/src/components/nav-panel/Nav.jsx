import React, { useState } from 'react';
import logo from "../../assets/images/logo-bookmark.svg";
import "./Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <div className="nav-panel">
        <div className="logo">
          <img src={logo} alt="Bookmark logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
