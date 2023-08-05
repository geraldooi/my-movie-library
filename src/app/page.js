export default function HomePage() {
  const appTitle = "My Movie Library";
  const url = "https://www.themoviedb.org/";

  return (
    <main>
      <h1>{appTitle.toUpperCase()}</h1>
      <p>Here is a list of popular movies:</p>
      <ul className="movie-list">
        <li className="featured">Indiana Jones and the Dial of Destiny</li>
        <li>Guardians of the Galaxy Vol. 3</li>
        <li>Mission: Impossible - Dead Reckoning Part One</li>
        <li>Spider-Man: Across the Spider-Verse</li>
        <li>The Super Mario Bros. Movie</li>
      </ul>
      <p>
        <a href="{url}">See more</a>
      </p>
    </main>
  );
}
