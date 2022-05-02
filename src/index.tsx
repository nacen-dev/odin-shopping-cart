import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ProductList } from "./components/ProductList/ProductList";
import { productListData } from "./productsData";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="menu"
            element={<ProductList productList={productListData} />}
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
