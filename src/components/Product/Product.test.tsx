import React from "react";
import { render, screen } from "@testing-library/react";
import { Product } from "./Product";

const props = 
  { img: "image", name: "Salmon Sushi Bake", price: 36}

describe("Product", () => {
  it("renders the product with price, image, name, order button", () => {
    render(<Product image={props.img} name={props.name} price={props.price} />);

    expect(screen.getByRole("img")).toHaveAttribute("src", props.img);
    expect(screen.getByText(/36/)).toBeInTheDocument();
    expect(screen.getByText(/Salmon Sushi Bake/)).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /Add to Cart/i})).toBeInTheDocument();
  });
  
});
