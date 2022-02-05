import { render } from "test-utils";
import { EventTable } from "components/EventTable/EventTable";
import data from "../../../public/data.json";
import {
  getAllRows,
  getAllCells,
  getAllRowsByRowgroupType,
} from "testing-library-table-queries";
import { Event } from "types";
import { sortBySoonest } from "utils";
import { fireEvent, screen, waitFor } from "@testing-library/react";

describe("EventTable Component", () => {
  it("renders an empty table with a header row.", () => {
    const { container } = render(<EventTable events={[]} />);

    const headerRows = getAllRowsByRowgroupType(container, "thead");
    expect(headerRows).toHaveLength(1);
  });

  it("renders a table with one header row and one table row.", () => {
    const { container } = render(<EventTable events={[data[0]]} />);

    const rows = getAllRowsByRowgroupType(container, "tbody");
    expect(rows).toHaveLength(1);
  });

  it("clicking time to descending sorts by most distant dates.", async () => {
    const sortedByDateEvents = sortBySoonest(data);
    const { container } = render(<EventTable events={data} />);

    const timeButton = screen.getByText(/time/i);

    fireEvent.click(timeButton);

    await waitFor(() => {
      const [firstRow] = getAllRowsByRowgroupType(container, "tbody");
      const lastEvent = sortedByDateEvents.at(-1) as Event;
      expect(firstRow).toHaveTextContent(lastEvent.name);
    });
  });

  it("clicking time to ascending sorts by soonest dates.", async () => {
    const sortedByDateEvents = sortBySoonest(data);
    const { container } = render(<EventTable events={data} />);

    const timeButton = screen.getByText(/time/i);

    fireEvent.click(timeButton);
    fireEvent.click(timeButton);

    await waitFor(() => {
      const [firstRow] = getAllRowsByRowgroupType(container, "tbody");
      const [firstEvent] = sortedByDateEvents;
      expect(firstRow).toHaveTextContent(firstEvent.name);
    });
  });
});
