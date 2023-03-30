const addFavouriteCountries = (getCountry) => {
  let favouriteCountry = [];
  const getStorage = JSON.parse(localStorage.getItem("favourite-country"));
  if (getStorage) {
    const isAddedPrevious = getStorage.find(
      (country) => country.name == getCountry.name
    );
    if (isAddedPrevious) {
      alert("This country already added in your favourite list");
    } else {
      favouriteCountry.push(...getStorage, getCountry);
      localStorage.setItem(
        "favourite-country",
        JSON.stringify(favouriteCountry)
      );
    }
  } else {
    favouriteCountry.push(getCountry);
    localStorage.setItem("favourite-country", JSON.stringify(favouriteCountry));
  }
};

const removeFromDb = (name) => {
  const storedCart = JSON.parse(localStorage.getItem("favourite-country"));
  const remainCart = storedCart.filter((item) => item.name !== name);
  localStorage.setItem("favourite-country", JSON.stringify(remainCart));
};

export { addFavouriteCountries, removeFromDb };
