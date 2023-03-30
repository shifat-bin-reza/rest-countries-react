import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
// import { removeFromDb } from "../utilities/Database";
import BlankImage from "../../assets/blank.png";

const Cart = (props) => {
  function isImageEmpty(obj) {
    return Object.keys(obj).length == 0;
  }

  const image = isImageEmpty(props.singleCart.coatOfArms);
  let setImage;
  if (image) {
    setImage = BlankImage;
  } else {
    setImage = props.singleCart.coatOfArms.png;
  }

  return (
    <div className="item-container">
      <img className="cart-flag" src={setImage} alt="" />
      <h5>{props.singleCart.name.common}</h5>
      <h5>{props.singleCart.region}</h5>
      <button className="button-cross">
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
};

export default Cart;
