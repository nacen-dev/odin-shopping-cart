import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface Props extends IProduct {
}

const Product = ({ id, name, image, price }: Props) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="rounded p-4 flex flex-col gap-2 bg-white">
      <img src={image} alt="" className="h-[300px] rounded-[50%]" />
      <p className="text-center text-xl font-semibold">{name}</p>
      <p className="text-center text-xl">${price}</p>
      <button
        className="border rounded p-2 bg-red-600 text-white"
        onClick={() => addToCart({ name, image, price, id }, 1)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export { Product };
