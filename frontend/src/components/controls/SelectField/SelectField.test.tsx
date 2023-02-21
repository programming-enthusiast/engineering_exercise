import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectField from "./SelectField";
import { yearOptions } from "../../features/search/const";

describe("Select", () => {
  test("renders options", () => {
    const { getByText } = render(
      <SelectField
        label={"Year"}
        noValue={"Any"}
        options={yearOptions}
        value={undefined}
        onChange={() => {}}
      />
    );
    Object.keys(yearOptions).forEach((key) => {
      expect(getByText(yearOptions[key].toString())).toBeInTheDocument();
    });
  });

  test("calls onChange when an option is selected", () => {
    const handleChange = jest.fn();
    const { getByDisplayValue, getByLabelText } = render(
      <SelectField
        label={"Year"}
        noValue={"Any"}
        options={yearOptions}
        value={undefined}
        onChange={handleChange}
      />
    );
    const select = getByDisplayValue("Any");
    fireEvent.change(select, { target: { value: 2019 } });
    expect(handleChange).toHaveBeenCalledWith("2019");
  });
});
