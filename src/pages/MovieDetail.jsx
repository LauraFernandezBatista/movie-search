// pages/MovieDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_OMDB_KEY;

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_KEY) {
      setError("Falta REACT_APP_OMDB_KEY");
      return;
    }
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "False") setError(data.Error || "No encontrado");
        else setMovie(data);
      })
      .catch(() => setError("Error cargando la película"));
  }, [id]);

  if (error) return <div className="p-6"><Link to="/" className="link">← Volver</Link><p className="text-red-400 mt-4">{error}</p></div>;
  if (!movie) return <div className="p-6"><p>Cargando...</p></div>;

  return (
    <div className="p-6">
      <Link to="/" className="link">← Volver</Link>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.svg"} alt={movie.Title} className="rounded-lg shadow-md" />
        <div>
          <h1 className="text-3xl mb-2">{movie.Title}</h1>
          <p className="opacity-75 mb-2">{movie.Year} • {movie.Runtime} • {movie.Rated}</p>
          <p className="mb-2"><strong>Género:</strong> {movie.Genre}</p>
          <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
          <p className="mb-2"><strong>Actores:</strong> {movie.Actors}</p>
          <p className="mb-2"><strong>IMDb:</strong> {movie.imdbRating} / 10</p>
          <p className="mt-4">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}
