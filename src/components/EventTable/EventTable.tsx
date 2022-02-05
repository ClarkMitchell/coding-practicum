import * as React from "react";
import { EventRow } from "components/EventRow/EventRow";
import { EventHeader } from "components/EventHeader/EventHeader";
import { EventFilters } from "components/EventFilters/EventFilters";
import { Event, Events } from "types";

interface Props {
  events: Events;
}

const headers = ["id", "name", "members", "distance", "time", "cost"] as const;

export function EventTable({ events }: Props) {
  const [orderedEvents, setOrderedEvents] = React.useState<Events>(events);

  return (
    <>
      <EventFilters events={events} setEvents={setOrderedEvents} />
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <EventHeader setEvents={setOrderedEvents} name={header} key={header}>
                {header.toUpperCase()}
              </EventHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {orderedEvents.map((event: Event) => (
            <EventRow
              key={event.id}
              id={event.id}
              name={event.name}
              members={event.members}
              distance={event.distance}
              time={event.time}
              cost={event.cost}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
