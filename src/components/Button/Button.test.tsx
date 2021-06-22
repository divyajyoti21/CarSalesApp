import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("button rendered", () => {
    render(<Button />);
  });

  test("button clicked", async () => {
    function handleClick() {
      // done();
    }
    render(<Button onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });
});
