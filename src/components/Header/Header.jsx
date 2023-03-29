import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="categories-container">
        <FontAwesomeIcon icon={faBars} />
        <h3>All Categories</h3>
      </div>
      <div className="search-container">
        <input className="input-field" type="text" placeholder="Search" />
      </div>
      <div className="cart-container">
          <span>0</span> item(s) - <span>0</span>TK
          <div className="added-cart-items">
            <p>Cart</p>
          </div>
      </div>
    </div>
  );
};

export default Header;
