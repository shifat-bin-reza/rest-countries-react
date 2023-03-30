import React from "react";
import BlankImage from "../../assets/blank.png";
import { addFavouriteCountries } from "../utilities/Database";
import "./Country.css";

const Country = (props) => {
  // Check if there is any image available
  function isImageEmpty(obj) {
    return Object.keys(obj).length == 0;
  }

  const handleCart = props.addToCart;
  // console.log(handleCart);

  const image = isImageEmpty(props.country.coatOfArms);
  let setImage;
  if (image) {
    setImage = BlankImage;
  } else {
    setImage = props.country.coatOfArms.png;
  }

  return (
    <div className="col">
      <div className="card">
        <img src={setImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5>
            Name:{" "}
            <span className="card-title">{props.country.name.common}</span>
          </h5>
          <h5>
            Continents:{" "}
            <span className="card-title">{props.country.continents[0]}</span>
          </h5>
          <h5>
            Region: <span className="card-title">{props.country.region}</span>
          </h5>
          <h5>
            Population:{" "}
            <span className="card-title">{props.country.population}</span>
          </h5>
          <button
            onClick={() => handleCart(props.country)}
            className="btn-favourite"
          >
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
