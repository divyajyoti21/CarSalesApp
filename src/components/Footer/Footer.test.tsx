import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
  test("footer rendered", () => {
    render(<Footer />);
  });
});
