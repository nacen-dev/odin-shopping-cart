import React from "react";
import { IProduct, Product } from "../Product/Product";

interface Props {
  productList: IProduct[];
}

const ProductList = ({ productList }: Props) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {productList.map((product) => (
        <li key={product.name}>
          <Product
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </li>
      ))}
    </ul>
  );
};

export { ProductList };