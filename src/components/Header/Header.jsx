import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "react-bootstrap";
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
    </div>
  );
};

export default Header;
