import { render } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  test("renders table header", () => {
    const headers = ["Total Vehicles Matched", 0];
    const rows = [[]];
    const { getByText } = render(<Table headers={headers} rows={rows} />);
    expect(getByText("Total Vehicles Matched")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();
  });

  test("renders table rows", () => {
    const headers = ["Total Vehicles Matched", 0];
    const rows = [
      ["Lowest Price", 10],
      ["Median Price", 20],
      ["Highest Price", 30],
    ];
    const { getByText } = render(<Table headers={headers} rows={rows} />);
    rows.forEach((row) => {
      expect(getByText(row[0].toString())).toBeInTheDocument();
      expect(getByText(row[1].toString())).toBeInTheDocument();
    });
  });
});
