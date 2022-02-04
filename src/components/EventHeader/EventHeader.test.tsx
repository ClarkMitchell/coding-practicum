import { render, screen } from "@testing-library/react";
import { EventHeader } from "@components/EventHeader/EventHeader";
import { Event } from "types";

import data from "../../../public/data.json";

describe("EventList Component", () => {
  it("renders a data row.", () => {
    const event = data[0];
    render(
      <EventHeader name={event.name as keyof Event} setEvents={() => {}}>
        {event.name}
      </EventHeader>
    );

    expect(screen.getByText(event.name)).toBeInTheDocument();
  });
});
