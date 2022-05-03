import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { ICartItem } from "../../context/CartContext";

interface Props {
  cartItem: ICartItem;
  handleQuantityChange: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  addToCart: (cartItem: ICartItem) => void;
  removeCartItemQuantity: (cartItem: ICartItem, quantity: number) => void;
}

const CartItem = ({
  cartItem,
  handleQuantityChange,
  addToCart,
  removeCartItemQuantity,
}: Props) => {
  return (
    <div className="grid justify-center">
      <img src={cartItem.image} alt="" className="h-[250px] w-[250px]" />
      <div>
        <h3 className="text-xl">{cartItem.name}</h3>
        <span className="text-lg">${cartItem.price}</span>
      </div>
      <div className="flex items-center gap-2 text-lg">
        <label className="text-lg">Quantity: </label>
        <MdRemove
          className="cursor-pointer"
          onClick={() => removeCartItemQuantity(cartItem, 1)}
        />
        <input
          value={cartItem.quantity}
          type="number"
          min="1"
          max="99"
          onChange={(event) => handleQuantityChange(cartItem.id, event)}
          className="border text-center"
        />
        <MdAdd onClick={() => addToCart(cartItem)} className="cursor-pointer" />
      </div>
    </div>
  );
};

export { CartItem };
