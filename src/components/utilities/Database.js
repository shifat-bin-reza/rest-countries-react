const addFavouriteCountries = (flag, name, region) => {
  const country = {
    flag,
    name,
    region,
  };

  let favouriteCountry = [];
  const getStorage = JSON.parse(localStorage.getItem("favourite-country"));
  if (getStorage) {
    const isAddedPrevious = getStorage.find((country) => country.name == name);
    if (isAddedPrevious) {
      alert("This country already added in your favourite list");
    } else {
      favouriteCountry.push(...getStorage, country);
      localStorage.setItem(
        "favourite-country",
        JSON.stringify(favouriteCountry)
      );
    }
  } else {
    favouriteCountry.push(country);
    localStorage.setItem("favourite-country", JSON.stringify(favouriteCountry));
  }
};

const removeFromDb = (name) => {
  console.log(name);
  const getCart = JSON.parse(localStorage.getItem("favourite-country"));
  const afterRemove = getCart.find((country) => country.name !== name);
  localStorage.setItem("favourite-country", JSON.stringify(afterRemove));
};

export { addFavouriteCountries, removeFromDb };
