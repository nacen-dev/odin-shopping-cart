import React from "react";
import { productListData } from "../../productsData";
import { ProductList } from "../ProductList/ProductList";

interface Props {}

const Menu = (props: Props) => {
  return (
    <div className="bg-red-600 p-4">
      <h2 className="text-white text-center text-2xl m-4 font-semibold">
        Menu
      </h2>
      <ProductList productList={productListData} />
    </div>
  );
};

export { Menu };
