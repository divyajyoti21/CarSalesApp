import { render, screen, fireEvent } from "@testing-library/react";
import SelectDropdown from "./SelectDropdown";

describe("<SelectDropdown />", () => {
  test("Select dropdown rendered", () => {
    render(<SelectDropdown params={["test1", "test2"]} />);
  });
});
