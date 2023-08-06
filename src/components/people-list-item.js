export function PeopleListItem({ people }) {
  return <li key={people.id}>{people.name}</li>;
}
