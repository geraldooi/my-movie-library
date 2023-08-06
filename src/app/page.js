export default function HomePage() {
  // Control whether to display the title or not
  const displayTitle = true;

  // Controls whether the title should be uppercased
  const upperCaseTitle = false;

  // Controls whether to display the end message ("See more" link
  // or "Nothing to see here" message
  const displayEndMessage = true;

  // Controls the domain name for the "See more" link
  const seeMoreDomain = "https://www.themoviedb.org/";

  const appTitle = "My Movie Library";

  const movies = [
    { id: 0, title: "Indiana Jones and the Dial of Destiny", featured: true },
    { id: 1, title: "Guardians of the Galaxy Vol. 3", featured: false },
    {
      id: 2,
      title: "Mission: Impossible - Dead Reckoning Part One",
      featured: false,
    },
    { id: 3, title: "Spider-Man: Across the Spider-Verse", featured: false },
    { id: 4, title: "The Super Mario Bros. Movie", featured: false },
  ];

  return (
    <main>
      <h1>
        {displayTitle && (upperCaseTitle ? appTitle.toUpperCase() : appTitle)}
      </h1>
      <p>Here is a list of popular movies:</p>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className={movie.featured && "featured"}>
            {movie.title}
          </li>
        ))}
      </ul>
      <p>
        {displayEndMessage ? (
          <a href={seeMoreDomain}>See more</a>
        ) : (
          "Nothing to see here"
        )}
      </p>
    </main>
  );
}
