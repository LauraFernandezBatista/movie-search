import MovieCard from "./MovieCard";

export default function MovieList({ movies = [], emptyMessage = "Sin resultados." }){
  if (!movies || movies.length === 0) {
    return <p className="opacity-70">{emptyMessage}</p>;
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </div>
  );
}
