import { render, screen, fireEvent } from "@testing-library/react";
import MultiFilter from "./MultiFilter";

describe("<MultiFilter />", () => {
  test("Multifilter rendered", () => {
    render(
      <MultiFilter
        manufacturers={["test1", "test2"]}
        colors={["test1", "test2"]}
      />
    );
  });
});
