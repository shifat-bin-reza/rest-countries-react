import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "react-bootstrap";
import "./Header.css";
// import Favourite from "../Favourite/Favourite";
import Cart from "../Cart/Cart";
// import { setCart } from "../utilities/Cart";
import Country from "../Country/Country";

const Header = () => {
  const addToCart = (flag, name, region) => {
    console.log("Working");
  };

  return (
    <div className="header-container">
      <div className="categories-container">
        <FontAwesomeIcon icon={faBars} />
        <h3>All Categories</h3>
      </div>
      <div className="search-container">
        <input className="input-field" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
