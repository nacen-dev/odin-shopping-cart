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
  removeQuantityFromCart: (cartItem: ICartItem) => void;
  handleQuantityChange: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  openCart: () => void;
  closeCart: () => void;
  showCart: boolean;
}

export const CartContext = createContext<ICart>({
  cart: [],
  addToCart: (cartItem: ICartItem) => {},
  deleteFromCart: (cartItem: ICartItem) => {},
  removeQuantityFromCart: (cartItem: ICartItem) => {},
  handleQuantityChange: (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {},
  openCart: () => {},
  closeCart: () => {},
  showCart: false,
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

  const addToCart = (cartItem: ICartItem) => {
    const isProductInCart = cart.find((cItem) => cItem.id === cartItem.id);

    if (isProductInCart) {
      setCart(
        cart.map((cItem) => {
          return cItem.id === cartItem.id
            ? { ...cItem, quantity: cItem.quantity + cartItem.quantity }
            : cItem;
        })
      );
    } else {
      setCart([...cart, cartItem]);
    }
  };

  const deleteFromCart = (cartItem: ICartItem) => {
    const isProductInCart = cart.find((cItem) => cItem.id === cartItem.id);

    if (isProductInCart) {
      setCart(
        cart.map((cItem) => {
          return cItem.id === cartItem.id
            ? { ...cartItem, quantity: cItem.quantity + cartItem.quantity }
            : cartItem;
        })
      );
    } else {
      setCart([...cart, cartItem]);
    }
  };

  const removeQuantityFromCart = (cartItem: ICartItem) => {
    const isProductInCart = cart.find((cItem) => cItem.id === cartItem.id);

    if (isProductInCart) {
      setCart(
        cart.map((cItem) => {
          return cItem.id === cartItem.id
            ? { ...cartItem, quantity: cItem.quantity + cartItem.quantity }
            : cartItem;
        })
      );
    } else {
      setCart([...cart, cartItem]);
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
        removeQuantityFromCart,
        deleteFromCart,
        handleQuantityChange,
        openCart,
        closeCart,
        showCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
