import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ClientFeedback.css";

const testimonials = [
  {
    id: 1,
    name: "Jon Hafiz",
    role: "CTO",
    feedback:
      "Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus, at ullamcorper erat feugiat eu.",
    image: "/profile.jpg",
  },
  {
    id: 2,
    name: "Alice Doe",
    role: "CEO",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula et elit tincidunt, at vulputate dolor interdum.",
    image: "/profile2.jpg",
  },
];

const ClientFeedback = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="n">
    <div className="feedback-container">
      <div className="feedback-image">
        <img src="/dish.jpg" alt="Dish" />
      </div>
      <div className="feedback-content">
        <h3 className="client-title">Client Feedback</h3>
        <h2 className="feedback-heading">
          What believe <span>our customers</span>
        </h2>
        <p className="feedback-text">
          Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet
          magna suscipit.
        </p>
        <div className="client-info">
          <img src={testimonials[index].image} alt={testimonials[index].name} />
          <div>
            <h4>{testimonials[index].name}</h4>
            <p>{testimonials[index].role}</p>
          </div>
        </div>
        <p className="client-feedback">{testimonials[index].feedback}</p>
        <div className="navigation">
          <button onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div></div>
  );
};

export default ClientFeedback;
