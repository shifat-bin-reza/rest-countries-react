import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { removeFromDb } from "../utilities/Database";

const Cart = (props) => {
  const { flag, name, region } = props.list;
  return (
    <div className="item-container">
      <img className="cart-flag" src={flag} alt="" />
      <h5>{name}</h5>
      <h5>{region}</h5>
      <button onClick={() => removeFromDb(name)} className="button-cross">
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
};

export default Cart;
