import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome To Earls</h1>
        <h2>THE FINEST<span style={{color:"#ff7b00"}}> DRINKS</span></h2>
        <p>
          Discover the best cocktails and beverages served with style and quality. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="book-now">Book Now</button>
      </div>
    </section>
  );
};

export default Home;
