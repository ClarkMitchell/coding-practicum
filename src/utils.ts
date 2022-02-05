import { Event, Events } from "types";

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function sortBySoonest(events: Events) {
  return events.sort(
    (a: Event, b: Event) => new Date(a.time).getTime() - new Date(b.time).getTime()
  );
}
