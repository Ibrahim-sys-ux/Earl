<<<<<<< HEAD
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Earls</h1>

      {/* Hamburger Menu Button */}
      <div 
        className={`menu-toggle ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}>
        <a href="/">Home</a>
        <a href="#about">About Us</a>
        <a href="/blog">Blog</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
        
        {/* Book Button (Only visible in mobile menu) */}
      </div>

      {/* Book Button (Hidden in Mobile) */}
      <button className="book-btn">Book a Table</button>
    </nav>
  );
};

export default Header;
=======
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Earls</h1>

      {/* Hamburger Menu Button */}
      <div 
        className={`menu-toggle ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(false)}>
        <a href="/">Home</a>
        <a href="#about">About Us</a>
        <a href="/blog">Blog</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
        
        {/* Book Button (Only visible in mobile menu) */}
      </div>

      {/* Book Button (Hidden in Mobile) */}
      <button className="book-btn">Book a Table</button>
    </nav>
  );
};

export default Header;
>>>>>>> c774365 (Initial upload of folder and files)
