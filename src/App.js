import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"

// ---- css
import "./css/custom.css";

// ---- components
import MobileNav from "./components/MobileNav"

// ---- contexts

const App = () => {
  return (
    <div>
      <MobileNav />
    </div>
    // <Routes>
    //   <Route path="/" element={}/>
    // </Routes>
  );
};

export default App;
