import React from "react";

export interface IProduct {
  name: string;
  image: string;
  price: number;
};

interface Props extends IProduct {
  handleClick: (product: IProduct) => void;
}

const Product = ({name, image, price, handleClick}: Props) => {
  return (
    <div className="rounded p-4 flex flex-col gap-2 bg-white w-[300px] h-[300px]">
      <img src={image} alt="" className="h-[60%] rounded-[50%]" />
      <p className="text-center text-xl font-semibold">{name}</p>
      <p className="text-center text-xl">${price}</p>
      <button onClick={() => handleClick({name, image, price})}>Add to Cart</button>
    </div>
  ) 
};

export { Product };  