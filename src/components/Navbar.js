import React from "react";
// import { FaHome, FaPizzaSlice, FaStore, FaNewspaper, FaUtensils } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <h1>ThievPizza</h1>
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#pizza">Pizza</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
