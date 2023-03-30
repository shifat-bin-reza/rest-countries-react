import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Country from "../Country/Country";
import { addFavouriteCountries } from "../utilities/Database";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (flag, name, region) => {
    let setCartToList = {
      flag,
      name,
      region,
    };
    let newCart = [...cart, setCartToList];
    setCart(newCart);
    addFavouriteCountries(setCartToList);
  };

  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    const getLocalStorageItem = JSON.parse(
      localStorage.getItem("favourite-country")
    );
    if (getLocalStorageItem) {
      setCartList(getLocalStorageItem);
    }
  }, [cart]);

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
        <span>{cart.length}</span> item(s)
        <div className="added-cart-items">
          {cartList.map((list) => (
            <Cart key={list.name} list={list}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
