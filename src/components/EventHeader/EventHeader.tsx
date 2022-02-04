import * as React from "react";
import { Event, Events } from "types";

interface Props {
  name: keyof Event;
  children: string;
  setEvents: React.Dispatch<React.SetStateAction<Events>>;
  ascending?: boolean;
}

export function EventHeader({
  name,
  children,
  setEvents,
  ascending = true
}: Props) {
  const [asc, setAsc] = React.useState(ascending);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAsc((dir) => !dir);
  }

  function getDirection() {
    return asc ? "ascending" : "descending";
  }

  React.useEffect(() => {
    setEvents((events) => {
      const sorted = [...events].sort((a, b) => (a[name] > b[name] ? 1 : -1));
      return asc ? sorted : sorted.reverse();
    });
  }, [asc, name, setEvents]);

  return (
    <th
      aria-sort={getDirection()}
      className={name === "id" ? "hidden" : undefined}
    >
      <button type="submit" onClick={handleClick}>
        {children}
        <span className={getDirection()} aria-hidden />
      </button>
    </th>
  );
}
