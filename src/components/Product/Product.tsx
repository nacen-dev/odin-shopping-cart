import React from "react";

export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface Props extends IProduct {
  handleClick: (product: IProduct) => void;
}

const Product = ({ id, name, image, price, handleClick }: Props) => {
  return (
    <div className="rounded p-4 flex flex-col gap-2 bg-white">
      <img src={image} alt="" className="h-[300px] rounded-[50%]" />
      <p className="text-center text-xl font-semibold">{name}</p>
      <p className="text-center text-xl">${price}</p>
      <button
        className="border rounded p-2 bg-red-600 text-white"
        onClick={() => handleClick({ name, image, price, id })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export { Product };
