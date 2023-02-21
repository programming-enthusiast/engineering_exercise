import { useState, ChangeEvent } from "react";

interface PropsType {
  headers: Array<string | number>;
  rows: Array<Array<string | number>>;
}

export default function Table({ headers, rows }: PropsType) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((col, index) => (
              <td key={index} className={index == 0 ? "w" : ""}>
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
