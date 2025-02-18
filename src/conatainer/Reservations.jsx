
import React, { useState } from "react";
import "./Reservations.css";
import backgroundVideo from "/bar-background.mp4"; 


const Reservation = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="reservation-container">
      <video autoPlay loop muted className="reservation-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {/* Dark Overlay for Blackish Effect */}
      <div className="dark-overlay"></div>

      <div className="reservation-content">
        {/* Play Button Properly Positioned Above Left Text */}
        <div className="play-button">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-6 h-6"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span>
        </div>

        {/* Left Side Text */}
        <div className="left-text">
          <h2>We create delightful experiences.</h2>
        </div>

        {/* Right Side Reservation Box - Increased Width */}
        <div className="reservation-box">
          <h3 className="reservation-title">Reservations</h3>
          <p className="reservation-highlight">
            It only takes <span className="italic-text">a little sip.</span>
          </p>
          <p className="reservation-description">
            Crocodile undergoes incision prior to preserving the incisors and after that cleaning the tongue.
          </p>

          <h4 className="signature-title">Signature Cocktails</h4>
          <ul className="cocktail-list">
            <li><span>Irish Hopped Scotch</span><span>$9.50</span></li>
            <li><span>Vieux Carre</span><span>$9.50</span></li>
            <li><span>Vesper Martini</span><span>$9.50</span></li>
          </ul>

          {/* Expandable Sections */}
          <div className="expandable-item" onClick={() => toggleItem(0)}>
            <div className="item-header">
              <span>Almondmilk Latte</span>
              <span className="expand-icon">{openIndex === 0 ? "−" : "+"}</span>
            </div>
            {openIndex === 0 && <p className="expand-content">Details about Almondmilk Latte.</p>}
          </div>

          <div className="expandable-item" onClick={() => toggleItem(1)}>
            <div className="item-header">
              <span>Sparkling</span>
              <span className="expand-icon">{openIndex === 1 ? "−" : "+"}</span>
            </div>
            {openIndex === 1 && <p className="expand-content">Details about Sparkling drinks.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
