import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFavs } from "../context/FavoritesContext";

export default function MovieCard({ movie }){
  const { toggleFavorite, isFav } = useFavs();
  const fav = isFav(movie.imdbID);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="card card-compact bg-base-100 shadow-md hover:shadow-lg transition-shadow"
    >
      <figure className="aspect-[2/3] bg-base-200 overflow-hidden">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.svg"}
          alt={movie.Title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-base">{movie.Title}</h3>
        <p className="text-sm opacity-70">{movie.Year} • {movie.Type}</p>
        <div className="card-actions justify-between mt-2">
          <Link to={`/movie/${movie.imdbID}`} className="btn btn-sm">Ver</Link>
          <button className={"btn btn-sm " + (fav ? "btn-secondary" : "btn-outline")} onClick={()=>toggleFavorite(movie)}>
            {fav ? "Quitar" : "Favorito"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
