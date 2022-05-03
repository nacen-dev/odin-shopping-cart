import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Nav } from "./components/Nav/Nav";
import { SideDrawer } from "./components/SideDrawer/SideDrawer";
import { CartContext } from "./context/CartContext";

function App() {
  const { showCart, closeCart, openCart } = useContext(CartContext);

  return (
    <div className="grid grid-rows-[10%_90%] grid-cols-1 h-screen">
      <Nav showCart={openCart} />
      <main>
        <Outlet />
      </main>
      <SideDrawer open={showCart} onClose={closeCart}>
        <Cart />
      </SideDrawer>
    </div>
  );
}

export default App;
