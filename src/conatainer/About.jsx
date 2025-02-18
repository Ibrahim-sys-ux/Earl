import React from "react";
import "./about.css";
import dessertImage from "/dessert.jpg"; // Replace with actual image path

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h3 className="section-title">About Us</h3>
        <h1 className="about-heading">
          Heaven and Earth are <br /> between <span>each other</span>
        </h1>
        <p className="about-text">
          Discover a unique dining experience with the best of both worlds: exquisite meals 
          and a premium atmosphere. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="about-image">
        <img src={dessertImage} alt="Dessert" />
      </div>
    </section>
  );
};

export default About;
