import React, { useContext } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext, ICart } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";

interface Props {}

const Cart = (props: Props) => {
  const {
    cart,
    addToCart,
    deleteFromCart,
    removeQuantityFromCart,
    handleQuantityChange,
    closeCart,
  } = useContext(CartContext);

  const cartItems = () => {
    return (
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            <CartItem
              cartItem={cartItem}
              handleQuantityChange={handleQuantityChange}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl mb-4">Your Cart</h2>
      </div>
      {cart.length === 0 ? (
        <div className="flex flex-col gap-4">
          <p className="text-lg">Your cart is empty</p>
          <button className="bg-red-700 text-white py-2 px-4 text-xl w-full">
            <Link to="/menu" onClick={closeCart}>
              Browse Menu
            </Link>
          </button>
        </div>
      ) : (
        <div>
          {cartItems()}
          <button className="bg-red-700 text-white py-2 px-4 text-xl w-full">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export { Cart };
