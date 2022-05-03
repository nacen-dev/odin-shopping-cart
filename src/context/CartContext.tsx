import React from "react";
import { useState, useEffect, createContext } from "react";
import { IProduct } from "../components/Product/Product";

interface CartItem extends IProduct {
  quantity: number;
}

interface CartContextInterface {
  cart: CartItem[];
  addToCart: (product: IProduct, quantity: number) => void;
}

export const CartContext = createContext<CartContextInterface>({
  cart: [],
  addToCart: (product, quantity) => {},
});

interface Props {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: IProduct, quantity: number) => {
    const isProductInCart = cart.find((cartItem) => cartItem.id === product.id);

    if (isProductInCart) {
      setCart(
        cart.map((cartItem) => {
          return cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem;
        })
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
