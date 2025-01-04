import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addToFavorites = (id) => {
    if (favoriteMealIds.includes(id)) {
      return;
    } else {
      setFavoriteMealIds((prev) => [...prev, id]);
    }
  };
  const removeFromFavorites = (id) => {
    if (favoriteMealIds.includes(id)) {
      setFavoriteMealIds((prev) => prev.filter((favorite) => favorite !== id));
    } else {
      return;
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ favoriteMealIds, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavorites = () => useContext(FavoriteContext);

export default FavoriteContextProvider;
export { useFavorites };
