import React from "react";

interface Props {

};

const Home = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h1>Delicious Food</h1>
      <button>Order Now</button>
    </div>
  )
};

export { Home };  