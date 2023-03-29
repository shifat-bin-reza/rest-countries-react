import React from "react";
import BlankImage from "../../assets/blank.png";
import "./Country.css";

const Country = (props) => {
  // Check if there is any image available
  function isImageEmpty(obj) {
    return Object.keys(obj).length == 0;
  }

  const image = isImageEmpty(props.country.coatOfArms);
  let setImage;
  if (image) {
    setImage = BlankImage;
  } else {
    setImage = props.country.coatOfArms.png;
  }

  return (
    <div className="col">
      <div class="card">
        <img src={setImage} className="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
