import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

interface Props {
  showCart: () => void;
}

const Nav = ({showCart}: Props) => {
  return (
    <nav className="py-2 px-4 flex bg-red-700 text-white items-center">
      <Link to="/" className="mr-auto text-2xl">Resto</Link>
      <ul className="flex gap-4 text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li className="flex gap-2 items-center cursor-pointer" onClick={showCart}>
          <span>Cart</span>
          <MdShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
