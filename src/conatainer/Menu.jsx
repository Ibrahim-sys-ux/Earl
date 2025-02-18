<<<<<<< HEAD
import React from "react";
import "./Menu.css";
import dish1 from "/dish1.jpg"; // Replace with actual image paths
import dish2 from "/dish2.jpg";
import dish3 from "/dish3.jpg";


const Menu = () => {
  return (
    <section className="menu-section">
      <h2 className="menu-title">
        From <span>Our Menu</span>
      </h2>

      <div className="menu-container">
        {/* Starter Section */}
        <div className="menu-column">
          <img src={dish1} alt="Starter Dish" className="menu-img" />
          <h3 className="menu-category">Starter</h3>
          <ul className="menu-list">
            <li><span>Prawn Bisque</span><span>$59</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Beef Skewers</span><span>$29</span></li>
            <p>Classic greek salad, barrel aged feta cheese</p>
            <hr />
            <li><span>Tomato Soup</span><span>$18</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Petit Carp</span><span>$29</span></li>
            <p>Small portion of fried carp with mashed potatoes</p>
            <hr />
            <li><span>Pâté de Salmon</span><span>$59</span></li>
            <p>Topped with cucumber and roe</p>
            <hr />
          </ul>
        </div>

        {/* Main Dish Section */}
        <div className="menu-column">
          <h3 className="menu-category">Main Dish</h3>
          <ul className="menu-list">
            <li><span>Fish Steak</span><span>$5.95</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Tournedos Rossini</span><span>$29</span></li>
            <p>Classic greek salad, barrel aged feta cheese</p>
            <hr />
            <li><span>Prawn Bisque</span><span>$18</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Duck Confit</span><span>$18</span></li>
            <p>Small portion of fried carp with mashed potatoes</p>
            <hr />
            <li><span>Sponge Cake</span><span>$59</span></li>
            <p>Topped with cucumber and roe</p>
            <hr />
          </ul>
          <img src={dish2} alt="Main Dish" className="menu-img" />
        </div>

        {/* Dessert Section */}
        <div className="menu-column">
          <img src={dish3} alt="Dessert Dish" className="menu-img" />
          <h3 className="menu-category">Dessert</h3>
          <ul className="menu-list">
            <li><span>Prawn Bisque</span><span>$59</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Beef Skewers</span><span>$29</span></li>
            <p>Classic greek salad, barrel aged feta cheese</p>
            <hr />
            <li><span>Tomato Soup</span><span>$18</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Petit Carp</span><span>$29</span></li>
            <p>Small portion of fried carp with mashed potatoes</p>
            <hr />
            <li><span>Pâté de Salmon</span><span>$59</span></li>
            <p>Topped with cucumber and roe</p>
            <hr />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;

=======
import React from "react";
import "./Menu.css";
import dish1 from "/dish1.jpg"; // Replace with actual image paths
import dish2 from "/dish2.jpg";
import dish3 from "/dish3.jpg";


const Menu = () => {
  return (
    <section className="menu-section">
      <h2 className="menu-title">
        From <span>Our Menu</span>
      </h2>

      <div className="menu-container">
        {/* Starter Section */}
        <div className="menu-column">
          <img src={dish1} alt="Starter Dish" className="menu-img" />
          <h3 className="menu-category">Starter</h3>
          <ul className="menu-list">
            <li><span>Prawn Bisque</span><span>$59</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Beef Skewers</span><span>$29</span></li>
            <p>Classic greek salad, barrel aged feta cheese</p>
            <hr />
            <li><span>Tomato Soup</span><span>$18</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Petit Carp</span><span>$29</span></li>
            <p>Small portion of fried carp with mashed potatoes</p>
            <hr />
            <li><span>Pâté de Salmon</span><span>$59</span></li>
            <p>Topped with cucumber and roe</p>
            <hr />
          </ul>
        </div>

        {/* Main Dish Section */}
        <div className="menu-column">
          <h3 className="menu-category">Main Dish</h3>
          <ul className="menu-list">
            <li><span>Fish Steak</span><span>$5.95</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Tournedos Rossini</span><span>$29</span></li>
            <p>Classic greek salad, barrel aged feta cheese</p>
            <hr />
            <li><span>Prawn Bisque</span><span>$18</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Duck Confit</span><span>$18</span></li>
            <p>Small portion of fried carp with mashed potatoes</p>
            <hr />
            <li><span>Sponge Cake</span><span>$59</span></li>
            <p>Topped with cucumber and roe</p>
            <hr />
          </ul>
          <img src={dish2} alt="Main Dish" className="menu-img" />
        </div>

        {/* Dessert Section */}
        <div className="menu-column">
          <img src={dish3} alt="Dessert Dish" className="menu-img" />
          <h3 className="menu-category">Dessert</h3>
          <ul className="menu-list">
            <li><span>Prawn Bisque</span><span>$59</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Beef Skewers</span><span>$29</span></li>
            <p>Classic greek salad, barrel aged feta cheese</p>
            <hr />
            <li><span>Tomato Soup</span><span>$18</span></li>
            <p>Smooth bisque topped with river prawn</p>
            <hr />
            <li><span>Petit Carp</span><span>$29</span></li>
            <p>Small portion of fried carp with mashed potatoes</p>
            <hr />
            <li><span>Pâté de Salmon</span><span>$59</span></li>
            <p>Topped with cucumber and roe</p>
            <hr />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;

>>>>>>> c774365 (Initial upload of folder and files)
