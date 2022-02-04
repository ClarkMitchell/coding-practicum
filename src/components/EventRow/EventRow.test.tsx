import { render, screen } from "@testing-library/react";
import { EventRow } from "@components/EventRow/EventRow";
import data from "../../../public/data.json";

describe("EventList Component", () => {
  it("renders a data row.", () => {
    const event = data[0];
    render(<EventRow {...event} />);

    expect(screen.getByText(event.name)).toBeInTheDocument();
  });

  it("renders id column hidden.", () => {
    const event = data[0];
    render(<EventRow {...event} />);

    expect(screen.getByText(event.id)).toHaveClass("hidden");
  });
});
