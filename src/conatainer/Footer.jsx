<<<<<<< HEAD
import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3 className="footer-title 1">Address</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> Street: 3840 Winifred Way, Marion,
            <br />
            United States
          </p>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-section">
          <h3 className="footer-title 2">Contact Us</h3>
          <p>
            <FaPhoneAlt className="footer-icon" /> (123) 23456 788 123 4578 954
            <br />
            Open: 09:00 am - 01:00 pm
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <h2 className="footer-logo">Earls</h2>
        <nav className="footer-nav">
          <a href="/home">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="#">BLOG</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">SHOP</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
=======
import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3 className="footer-title 1">Address</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> Street: 3840 Winifred Way, Marion,
            <br />
            United States
          </p>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-section">
          <h3 className="footer-title 2">Contact Us</h3>
          <p>
            <FaPhoneAlt className="footer-icon" /> (123) 23456 788 123 4578 954
            <br />
            Open: 09:00 am - 01:00 pm
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <h2 className="footer-logo">Earls</h2>
        <nav className="footer-nav">
          <a href="/home">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="#">BLOG</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">SHOP</a>
          <a href="#">CONTACT</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> c774365 (Initial upload of folder and files)
