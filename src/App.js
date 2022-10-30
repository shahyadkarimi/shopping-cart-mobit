import React from "react";
import { Routes, Route } from "react-router-dom"

// ---- css
import "./css/custom.css";

// ---- components
import MobileNav from "./components/MobileNav"
import DesktopNav from "./components/DesktopNav"
import Home from "./components/Home/Home"

// ---- contexts

const App = () => {
  return (
    <div>
      <MobileNav />
      <DesktopNav />

    <Routes>
      <Route path="/" element={ <Home /> }/>
    </Routes>
    </div>
    
  );
};

export default App;
