import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>THIEV PIZZA</h1>
            <p>
              Enjoy the finest pizza crafted with premium ingredients, delivered hot and fresh to your
              door.
            </p>
            <div className="banner__btn">
              <a href="#delivery" className="btn btn-smart">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
