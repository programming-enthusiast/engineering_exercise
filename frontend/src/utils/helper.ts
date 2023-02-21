import { TableData, MakeModelTotal } from "../types";

export function generateTotalVehiclesTableData(total: number, lowest: number, median: number, highest: number): TableData {
  const tableData: TableData = {
    headers: ["Total Vehicles Matched", total],
    rows: [
      ["Lowest Price", lowest],
      ["Median Price", median],
      ["Highest Price", highest],
    ],
  };

  return tableData
}

export function generateMakeModelMatchesTableData(totals: Array<MakeModelTotal>): TableData {
  const tableData: TableData = {
    headers: ["Matches by Make and Model", ""],
    rows: totals.map(total => ([total.make + ' ' + total.model, total.total]))
  };

  return tableData
}
