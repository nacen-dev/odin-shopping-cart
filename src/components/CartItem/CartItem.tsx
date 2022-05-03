import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { ICartItem } from "../../context/CartContext";

interface Props {
  handleQuantityChange: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void,
  cartItem: ICartItem
}

const CartItem = ({handleQuantityChange, cartItem}: Props) => {
  return (
    <div>
      <img src={cartItem.image} alt="" />
      <div>
        <h3>{cartItem.name}</h3>
        <span>{cartItem.price}</span>
      </div>
      <div className="flex items-center">
        <MdRemove />
        <input
          value={cartItem.quantity}
          type="number"
          min="1"
          max="99"
          onChange={(event) => handleQuantityChange(cartItem.id, event)}
        />
        <MdAdd />
      </div>
    </div>
  );
};

export { CartItem };
