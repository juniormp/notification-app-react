import React from "react";
import {render} from "@testing-library/react";
import LogHistory from "./LogHistory";

describe("LogHistory component", () => {
  test("renders log data", () => {
    const log = [
      {
        category: "Category 1",
        content: "Content 1",
      },
      {
        category: "Category 2",
        content: "Content 2",
      },
    ];

    const {getByText} = render(<LogHistory log={log} />);

    console.log(getByText);

    expect(getByText("Category 1")).toBeDefined();
    expect(getByText("Content 1")).toBeDefined();
    expect(getByText("Category 2")).toBeDefined();
    expect(getByText("Content 2")).toBeDefined();
  });
});
