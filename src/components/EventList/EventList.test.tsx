import { render } from "test-utils";
import { EventList } from "@components/EventList/EventList";
import data from "../../../public/data.json";
import { getAllRows, getAllCells } from "testing-library-table-queries";

describe("EventList Component", () => {
  it("renders an empty table with a header of six cells.", () => {
    const { container } = render(<EventList events={[]} />);

    const header = getAllRows(container);
    expect(header).toHaveLength(1);

    const cells = getAllCells(container);
    expect(cells).toHaveLength(6);
  });

  it("renders a table with one header row and one table row.", () => {
    const { container } = render(<EventList events={[data[0]]} />);

    const rows = getAllRows(container);
    expect(rows).toHaveLength(2);

    const cells = getAllCells(container);
    expect(cells).toHaveLength(12);
  });
});
