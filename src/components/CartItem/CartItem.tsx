import React from "react";
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";
import { ICartItem } from "../../context/CartContext";

interface Props {
  cartItem: ICartItem;
  handleQuantityChange: (
    cartItem: ICartItem,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  addToCart: (cartItem: ICartItem) => void;
  removeCartItemQuantity: (cartItem: ICartItem, quantity: number) => void;
  deleteFromCart: (cartItem: ICartItem) => void;
}

const CartItem = ({
  cartItem,
  handleQuantityChange,
  addToCart,
  removeCartItemQuantity,
  deleteFromCart,
}: Props) => {
  return (
    <div className="flex flex-col justify-center gap-3">
      <div className="items-center">
        <img src={cartItem.image} alt="" className="h-[250px] w-[250px]" />
      </div>
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
          onChange={(event) => handleQuantityChange(cartItem, event)}
          className="border text-center"
        />
        <MdAdd onClick={() => addToCart(cartItem)} className="cursor-pointer" />
      </div>
      <button
        className="bg-red-700 text-white flex items-center text-lg justify-center p-2"
        onClick={() => deleteFromCart(cartItem)}
      >
        Delete Order
        <MdDelete className="" />
      </button>
    </div>
  );
};

export { CartItem };
