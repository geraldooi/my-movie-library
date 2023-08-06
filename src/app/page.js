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

  return (
    <main>
      <h1>
        {displayTitle && (upperCaseTitle ? appTitle.toUpperCase() : appTitle)}
      </h1>
      <p>Here is a list of popular movies:</p>
      <ul className="movie-list">
        <li className="featured">Indiana Jones and the Dial of Destiny</li>
        <li>Guardians of the Galaxy Vol. 3</li>
        <li>Mission: Impossible - Dead Reckoning Part One</li>
        <li>Spider-Man: Across the Spider-Verse</li>
        <li>The Super Mario Bros. Movie</li>
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
