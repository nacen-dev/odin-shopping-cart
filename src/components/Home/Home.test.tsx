import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  it("renders delicious food, and order now button", () => {
    render(<Home />);

    expect(screen.getByRole("heading")).toHaveTextContent("Delicious Food");
    expect(
      screen.getByRole("button", { name: /Order Now/i })
    ).toBeInTheDocument();
  });
});
