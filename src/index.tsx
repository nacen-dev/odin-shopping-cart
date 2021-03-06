import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { CartContextProvider } from "./context/CartContext";
import { Route404 } from "./components/Route404/Route404";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/odin-shopping-cart"
          element={
            <CartContextProvider>
              <App />
            </CartContextProvider>
          }
        >
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<Route404 />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
