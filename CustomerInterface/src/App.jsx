import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Signup from "./components/Signup";
import Menus from "./pages/Menus";
import AboutUs from "./pages/AboutUs";
import Reviews from "./pages/Reviews";
import CheckoutPage from "./components/Checkout/CheckoutPage";
// import { Signin } from "./components/Signin";
// import OrderStatus from "./components/OrderStatus";

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/menus" element={<Menus />}/>
        <Route path='/sign-up' element={<Signup  />} />
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/checkout" element={<CheckoutPage />}/>
        
        
        
        {/* <Route path="/order-status" element={<OrderStatus userId={userId} />} /> */}
        {/* <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} /> */}
        
      </Routes>
    </>
  );
}

export default App;
