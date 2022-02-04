import { render, queries } from "@testing-library/react";
import tableQueries from "testing-library-table-queries";

const customRender = (ui: any) =>
  render(ui, { queries: { ...queries, ...tableQueries } });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
