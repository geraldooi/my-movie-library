export function MovieListItem({ movie }) {
  return (
    <li key={movie.id} className={movie.featured && "featured"}>
      {movie.title}
    </li>
  );
}
