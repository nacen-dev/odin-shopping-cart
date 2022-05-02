import React from "react";

export interface IProduct {
  name: string;
  image: string;
  price: number;
};

const Product = ({name, image, price}: IProduct) => {
  return (
    <div className="rounded p-2 flex flex-col gap-2">
      <img src={image} alt="" />
      <p>{name}</p>
      <p>Price: ${price}</p>
    </div>
  ) 
};

export { Product };  