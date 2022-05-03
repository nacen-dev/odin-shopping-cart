import React from "react";
import { useState, createContext } from "react";
import { IProduct } from "../components/Product/Product";

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICart {
  cart: ICartItem[];
  addToCart: (cartItem: ICartItem) => void;
  deleteFromCart: (cartItem: ICartItem) => void;
  removeCartItemQuantity: (cartItem: ICartItem, quantity: number) => void;
  handleQuantityChange: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  openCart: () => void;
  closeCart: () => void;
  showCart: boolean;
  addCartItemQuantity: (cartItem: ICartItem, quantity: number) => void;
}

export const CartContext = createContext<ICart>({
  cart: [],
  addToCart: (cartItem: ICartItem) => {},
  deleteFromCart: (cartItem: ICartItem) => {},
  removeCartItemQuantity: (cartItem: ICartItem, quantity: number) => {},
  handleQuantityChange: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {},
  openCart: () => {},
  closeCart: () => {},
  showCart: false,
  addCartItemQuantity: (cartItem: ICartItem, quantity: number) => {},
});

interface Props {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };

  const addCartItemQuantity = (cartItem: ICartItem, quantity: number) => {
    setCart(
      cart.map((cItem) =>
        cItem.id === cartItem.id
          ? { ...cItem, quantity: cItem.quantity + quantity }
          : cItem
      )
    );
  };

  const addToCart = (cartItem: ICartItem) => {
    const isProductInCart = cart.find((cItem) => cItem.id === cartItem.id);

    if (isProductInCart) {
      addCartItemQuantity(cartItem, cartItem.quantity);
    } else {
      setCart([...cart, cartItem]);
    }
  };

  const deleteFromCart = (cartItem: ICartItem) => {
    setCart(cart.filter(cItem => cItem.id !== cartItem.id));
  };

  const removeCartItemQuantity = (cartItem: ICartItem, quantity: number) => {
    if (cartItem.quantity - quantity === 0) {
      deleteFromCart(cartItem);
    } else {
      setCart(
        cart.map((cItem) =>
          cItem.id === cartItem.id
            ? { ...cItem, quantity: cItem.quantity - quantity }
            : cItem
        )
      );
    }
  };

  const handleQuantityChange = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: Number(event.target.value) }
          : cartItem
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCartItemQuantity,
        deleteFromCart,
        handleQuantityChange,
        openCart,
        closeCart,
        showCart,
        addCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
