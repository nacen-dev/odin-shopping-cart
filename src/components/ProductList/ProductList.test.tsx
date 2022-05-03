import React from "react";
import { screen, render } from "@testing-library/react";
import { ProductList } from "./ProductList";

const productList = [
  { name: "X", price: 5, image: "", id: "a" },
  { name: "Y", price: 3, image: "", id: "b" },
  { name: "Z", price: 7, image: "", id: "c" },
];

describe("Product List", () => {
  it("renders a product list", () => {
    render(<ProductList productList={productList}/>);

    expect(screen.getAllByRole("listitem").length).toEqual(productList.length);
  });

  it("does not render a product list if product list is empty", () => {
    render(<ProductList productList={[]} />)
    const child = screen.queryByRole("listitem");
    expect(child).not.toBeInTheDocument();
  })
});
