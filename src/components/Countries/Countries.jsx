import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [cart, setCart] = useState([]);

  // let setFlag, setName, setRegion;
  const addToCart = (country) => {
    let newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 body-container">
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            addToCart={addToCart}
          ></Country>
        ))}
      </div>
      <div className="cart-container">
        <span>0</span> item(s)
        <div className="added-cart-items">
          {cart.map((singleCart) => (
            <Cart key={singleCart.cca2} singleCart={singleCart}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
