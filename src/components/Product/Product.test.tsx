import React from "react";
import { render, screen } from "@testing-library/react";
import { Product } from "./Product";
import user from "@testing-library/user-event";

const props = {
  img: "image",
  name: "Salmon Sushi Bake",
  price: 36,
  handleClick: jest.fn(),
  id: "2"
};

describe("Product", () => {
  it("renders the product with price, image, name, order button", () => {
    render(
      <Product
        image={props.img}
        name={props.name}
        price={props.price}
        handleClick={props.handleClick}
        id={props.id}
      />
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", props.img);
    expect(screen.getByText(/36/)).toBeInTheDocument();
    expect(screen.getByText(/Salmon Sushi Bake/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add to Cart/i })
    ).toBeInTheDocument();
  });

  it("calls handleClick function", () => {
    render(
      <Product
        image={props.img}
        name={props.name}
        price={props.price}
        handleClick={props.handleClick}
        id={props.id}
      />
    );

    user.click(screen.getByRole("button", { name: /Add to Cart/i}))
    expect(props.handleClick).toHaveBeenCalledTimes(1);
  });
});
