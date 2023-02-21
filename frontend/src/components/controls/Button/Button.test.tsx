import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <Button label={"Search"} onClick={() => {}} />
    );
    expect(getByText("Search")).toBeInTheDocument();
  });

  it("should handle click event", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button label={"Search"} onClick={handleClick} />
    );
    const button = getByText("Search");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
