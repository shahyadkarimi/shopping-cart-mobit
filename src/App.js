import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"

// ---- css
import "./css/custom.css";

// ---- components
import MobileNav from "./components/MobileNav"
import DesktopNav from "./components/DesktopNav"

// ---- contexts

const App = () => {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
    </div>
    // <Routes>
    //   <Route path="/" element={}/>
    // </Routes>
  );
};

export default App;
