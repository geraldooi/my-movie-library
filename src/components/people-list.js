import { PeopleListItem } from "./people-list-item";

export function PeopleList({ peoples }) {
  return (
    <ul>
      {peoples.map((people) => (
        <PeopleListItem people={people} />
      ))}
    </ul>
  );
}
