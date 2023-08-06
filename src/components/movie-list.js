import { MovieListItem } from "./movie-list-item";

export function MovieList({ movies }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieListItem movie={movie} />
      ))}
    </ul>
  );
}
