import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Search from "./components/features/search";
import Table from "./components/controls/Table";
import { getSearchResults } from "./utils/api";
import { TableData } from "./types";
import {
  generateTotalVehiclesTableData,
  generateMakeModelMatchesTableData,
} from "./utils/helper";
import toastr from "toastr";
import { makeOptions } from "./components/features/search/const";

function App() {
  const [totalVehiclesTable, setTotalVehiclesTable] = useState<TableData>({
    headers: ["Total Vehicles Matched", 0],
    rows: [
      ["Lowest Price", 0],
      ["Median Price", 0],
      ["Highest Price", 0],
    ],
  });
  const [makeModelMatchesTable, setMakeModelMatchesTable] = useState<TableData>(
    {
      headers: ["Matches by Make and Model", ""],
      rows: [],
    }
  );

  const handleSearch = async (
    make: string | undefined,
    model: string | undefined,
    year: string | undefined,
    budget: string | undefined
  ) => {
    const makeString = make
      ? makeOptions[0].options[make] || makeOptions[1].options[make]
      : undefined;
    const { data, error } = await getSearchResults(
      makeString,
      model,
      year,
      budget
    );

    if (!error && data) {
      setTotalVehiclesTable(
        generateTotalVehiclesTableData(
          data.total,
          data.price.lowest,
          data.price.median,
          data.price.highest
        )
      );
      setMakeModelMatchesTable(generateMakeModelMatchesTableData(data.totals));
    } else {
      toastr.error(error.message);
    }
  };
  return (
    <>
      <strong className="mobile_view_txt">iPhone X (Mobile View):</strong>
      <div className="wrap">
        <header>
          <Logo />
        </header>
        <div className="search_container">
          <Search onSearch={handleSearch} />
          <Table
            headers={totalVehiclesTable.headers}
            rows={totalVehiclesTable.rows}
          />
          <Table
            headers={makeModelMatchesTable.headers}
            rows={makeModelMatchesTable.rows}
          />
        </div>
      </div>
    </>
  );
}

export default App;
