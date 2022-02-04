import "./styles.css";
import * as React from "react";
import { EventList } from "@components/EventList/EventList";
import { Events } from "types";

export default function App() {
  const [events, setEvents] = React.useState<Events>([]);

  React.useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <main>
      <article>
        <h1>Awesome Events</h1>
        <EventList events={events} />
      </article>
    </main>
  );
}
