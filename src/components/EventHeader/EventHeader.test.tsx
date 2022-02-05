import { render, screen } from "@testing-library/react";
import { EventHeader } from "components/EventHeader/EventHeader";
import { Event } from "types";

import data from "../../../public/data.json";

describe("EventTable Component", () => {
  it("renders a data row.", () => {
    const event = data[0];
    render(
      <table>
        <thead>
          <tr>
            <EventHeader name={event.name as keyof Event} setEvents={() => {}}>
              {event.name}
            </EventHeader>
          </tr>
        </thead>
      </table>
    );

    expect(screen.getByText(event.name)).toBeInTheDocument();
  });
});
