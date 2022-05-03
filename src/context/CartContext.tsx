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
    cartItem: ICartItem,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  openCart: () => void;
  closeCart: () => void;
  showCart: boolean;
  addCartItemQuantity: (cartItem: ICartItem, quantity: number) => void;
  calculateTotalPrice: () => number;
}

export const CartContext = createContext<ICart>({
  cart: [],
  addToCart: (cartItem: ICartItem) => {},
  deleteFromCart: (cartItem: ICartItem) => {},
  removeCartItemQuantity: (cartItem: ICartItem, quantity: number) => {},
  handleQuantityChange: (
    cartItem: ICartItem,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {},
  openCart: () => {},
  closeCart: () => {},
  showCart: false,
  addCartItemQuantity: (cartItem: ICartItem, quantity: number) => {},
  calculateTotalPrice: () => 0
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
      addCartItemQuantity(cartItem, 1);
    } else {
      setCart([...cart, cartItem]);
    }
  };

  const deleteFromCart = (cartItem: ICartItem) => {
    setCart(cart.filter((cItem) => cItem.id !== cartItem.id));
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
    cartItem: ICartItem,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (Number(event.target.value) === 0) {
      deleteFromCart(cartItem);
    } else {
      setCart(
        cart.map((cItem) =>
          cItem.id === cartItem.id
            ? { ...cItem, quantity: Number(event.target.value) }
            : cItem
        )
      );
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (currentValue, nextValue) => ({
        ...currentValue,
        price: currentValue.price + nextValue.quantity * nextValue.price,
      }),
      { price: 0 }
    ).price;
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
        calculateTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
