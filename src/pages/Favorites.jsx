// pages/Favorites.jsx
import { useFavs } from "../context/FavoritesContext";
import MovieList from "../components/MovieList";

export default function Favorites(){
  const { favorites } = useFavs();
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">⭐ Favoritos</h1>
      <MovieList movies={favorites} emptyMessage="Aún no tienes favoritos." />
    </div>
  );
}
