import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { CartContextProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CartContextProvider>
              <App />
            </CartContextProvider>
          }
        >
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
