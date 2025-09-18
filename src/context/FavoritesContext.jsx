// context/FavoritesContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }){
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favorites") || "[]"); }
    catch { return []; }
  });

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.find(m => m.imdbID === movie.imdbID);
      if (exists) return prev.filter(m => m.imdbID !== movie.imdbID);
      return [...prev, movie];
    });
  };

  const isFav = (id) => favorites.some(m => m.imdbID === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFav }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavs = () => useContext(FavoritesContext);
