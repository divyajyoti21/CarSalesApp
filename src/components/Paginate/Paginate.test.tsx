import { render, screen, fireEvent } from "@testing-library/react";
import Paginate from "./Paginate";

describe("<Paginate />", () => {
  test("paginate rendered", () => {
    render(<Paginate />);
  });
});
