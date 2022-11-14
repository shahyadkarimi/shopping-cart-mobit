import React from "react";
import { Routes, Route } from "react-router-dom";

// ---- css
import "./css/custom.css";

// ---- components
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import Home from "./components/Home/Home";

// ---- contexts
import ProductsContextsProvider from "./contexts/ProductsContextsProvider";

const App = () => {
  return (
    <ProductsContextsProvider>
      <MobileNav />
      <DesktopNav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ProductsContextsProvider>
  );
};

export default App;
