import * as React from "react";
import { Events } from "types";

interface Props {
  events: Events;
  setEvents: React.Dispatch<React.SetStateAction<Events>>;
}

export function EventFilters({ events, setEvents }: Props) {
  const [isFree, setIsFree] = React.useState<boolean>(false);
  const [distance, setDistance] = React.useState<string>("");

  function handleFree(event: React.ChangeEvent<HTMLInputElement>) {
    setIsFree((free) => !free);
  }

  function handleNumberInput(event: React.ChangeEvent<HTMLInputElement>) {
    setDistance(event.target.value);
  }

  React.useEffect(() => {
    setEvents((currentEvents) =>
      isFree ? currentEvents.filter((event) => event.cost === 0) : events
    );
  }, [isFree, setEvents, events]);

  React.useEffect(() => {
    setEvents((currentEvents) =>
      distance === "" ? events : currentEvents.filter((event) => event.distance <= Number(distance))
    );
  }, [distance, setEvents, events]);

  return (
    <form name="filters" onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        <legend className="sr-only">Event list filters</legend>
        <label>
          <input type="checkbox" name="free" onChange={handleFree} checked={isFree}></input>
          &nbsp;Free
        </label>
        <label>
          Distance&nbsp;
          <input
            type="number"
            name="distance"
            onChange={handleNumberInput}
            defaultValue={distance}
          />
        </label>
      </fieldset>
    </form>
  );
}
