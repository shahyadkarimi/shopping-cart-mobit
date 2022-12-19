import React from "react";
import { Routes, Route } from "react-router-dom";

// ---- css
import "./css/custom.css";

// ---- components
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

// ---- contexts
import ProductsContext from "./contexts/ProductsContext";
import CartContext from "./contexts/CartContext"

const App = () => {
  return (
    <ProductsContext>
      <CartContext>
        <MobileNav />
        <DesktopNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext>
    </ProductsContext>
  );
};

export default App;
