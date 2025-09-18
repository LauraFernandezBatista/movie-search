// pages/Home.jsx
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const API_KEY = process.env.REACT_APP_OMDB_KEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchSearch = async (q, p=1) => {
    if (!API_KEY) { setError("Falta la variable REACT_APP_OMDB_KEY en .env"); return; }
    try{
      setLoading(true);
      setError(null);
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(q)}&page=${p}`);
      const data = await res.json();
      if (data.Response === "False") {
        setMovies([]);
        setTotal(0);
        setError(data.Error || "Sin resultados.");
      } else {
        setMovies(data.Search || []);
        setTotal(Number(data.totalResults||0));
      }
    }catch(e){
      setError("No se pudo cargar la búsqueda.");
    }finally{
      setLoading(false);
    }
  };

  const searchMovies = (q) => {
    setQuery(q);
    setPage(1);
    fetchSearch(q, 1);
  };

  const changePage = (p) => {
    setPage(p);
    fetchSearch(query, p);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">🎬 Buscador de Películas</h1>
      <SearchBar onSearch={searchMovies} />
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {query && !error && <p className="mb-2 opacity-75">Resultados para <strong>{query}</strong> — {total} encontrados</p>}
      <MovieList movies={movies} />
      {total > 10 && <Pagination page={page} total={total} onPage={changePage} />}
    </div>
  );
}
