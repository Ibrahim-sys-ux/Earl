import React from "react";
import "./Booking.css"; // Import CSS for styling

const Booking = () => {
  return (
    <div className="booking-container">
      {/* Left Side Image */}
      <div className="booking-image">
        <img src="chef-restaurant.jpg" alt="Chef Preparing Food" />
      </div>

      {/* Right Side Content */}
      <div className="booking-content">
        <h2 className="booking-title">Reservations</h2>
        <h1 className="booking-heading">
          Better food <span className="highlight">forever</span>
        </h1>
        <p className="booking-text">
          Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit.
        </p>
        <img src="swoosh.png" style={{width:70}}/>
        {/* Buttons */}
        <div className="booking-buttons">
          <button className="btn-outline">Book a Table</button>
          <button className="btn-filled">Special Food</button>
        </div>

        {/* Booking Box */}
        <div className="booking-box">
      {/* Left Side - Text Content */}
      <div className="booking-text">
        <h2 className="box-title">
          SPECIAL <br /> <span className="box-subtitle">FOOD</span>
        </h2>
        <p className="box-text">
          Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit.
        </p>
      </div>

      {/* Right Side - Form Fields */}
      <div className="booking-fields">
        <div className="input-box">
          <i className="fas fa-clock"></i>
          <input type="text" placeholder="--:--" />
        </div>
        <div className="input-box">
          <i className="fas fa-calendar-alt"></i>
          <input type="text" placeholder="dd-mm-yyyy" />
        </div>
        <div className="input-box">
          <i className="fas fa-user"></i>
          <select>
            <option>1 Person</option>
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
          </select>
        </div>
        <button className="btn-find">Find a Table</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Booking;
