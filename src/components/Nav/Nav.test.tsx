import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { screen, render } from "@testing-library/react";
import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders Company Name, Home, Menu, Cart", () => {
    render(
      <Router>
        <Nav />
      </Router>
    );

    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Menu/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Resto/i })).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  });
});
