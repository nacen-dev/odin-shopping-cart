import React from "react";
import HomeBackground from "../../assets/home-bg.jpg";
import { Link } from "react-router-dom";
interface Props {}

const Home = (props: Props) => {
  return (
    <div
      className="flex items-center justify-center flex-col gap-4 h-full bg"
      style={{
        background: `linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),url(${HomeBackground})`,
      }}
    >
      <h1 className="text-4xl text-white">Delicious Food</h1>
      <button className="text-lg rounded py-4 px-6 bg-red-600 text-white">
        <Link to="/odin-shopping-cart/menu">Order Now</Link>
      </button>
    </div>
  );
};

export { Home };
