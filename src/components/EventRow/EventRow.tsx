import { Event } from "types";
import { formatDate } from "utils";

export function EventRow({ id, name, members, distance, time, cost }: Event) {
  return (
    <tr data-testid={id}>
      <td className="hidden">{id}</td>
      <td>{name}</td>
      <td>{members}</td>
      <td>{distance} miles</td>
      <td>{formatDate(time)}</td>
      <td>${cost}</td>
    </tr>
  );
}
