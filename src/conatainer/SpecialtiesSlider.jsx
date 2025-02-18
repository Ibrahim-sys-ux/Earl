<<<<<<< HEAD
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./SpecialtiesSlider.css";

const items = [
    { id: 1, name: "Burger", image: "/burger.jpg" },
    { id: 2, name: "Cake", image: "/cake.jpg" },
    { id: 3, name: "Cheese", image: "/cheese.jpg" },
    { id: 4, name: "Pizza", image: "/drink1.jpg" },
    { id: 5, name: "Pasta", image: "/drink2.jpg" }
];

const SpecialtiesSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? items.length - 3 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index >= items.length - 3 ? 0 : index + 1);
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Our Specialities</h2>
      <div className="slider">
        <button className="slider-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="slider-content">
          {items.slice(index, index + 3).map((item) => (
            <div key={item.id} className="slide">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SpecialtiesSlider;
=======
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./SpecialtiesSlider.css";

const items = [
    { id: 1, name: "Burger", image: "/burger.jpg" },
    { id: 2, name: "Cake", image: "/cake.jpg" },
    { id: 3, name: "Cheese", image: "/cheese.jpg" },
    { id: 4, name: "Pizza", image: "/drink1.jpg" },
    { id: 5, name: "Pasta", image: "/drink2.jpg" }
];

const SpecialtiesSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? items.length - 3 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index >= items.length - 3 ? 0 : index + 1);
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Our Specialities</h2>
      <div className="slider">
        <button className="slider-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="slider-content">
          {items.slice(index, index + 3).map((item) => (
            <div key={item.id} className="slide">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SpecialtiesSlider;
>>>>>>> c774365 (Initial upload of folder and files)
