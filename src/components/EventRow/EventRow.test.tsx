import { render, screen } from "@testing-library/react";
import { EventRow } from "components/EventRow/EventRow";
import data from "../../../public/data.json";
import * as React from "react";

describe("EventTable Component", () => {
  it("renders a data row.", () => {
    const event = data[0];
    render(
      <table>
        <tbody>
          <EventRow {...event} />
        </tbody>
      </table>
    );

    expect(screen.getByText(event.name)).toBeInTheDocument();
  });

  it("renders id column hidden.", () => {
    const event = data[0];
    render(
      <table>
        <tbody>
          <EventRow {...event} />
        </tbody>
      </table>
    );

    expect(screen.getByText(event.id)).toHaveClass("hidden");
  });
});
