import React, { useContext, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Signup from "./components/Signup";
import Menus from "./pages/Menus";
import AboutUs from "./pages/AboutUs";
import Reviews from "./pages/Reviews";
import CardCheckoutPage from "./pages/CardCheckoutPage";
import ProductPage from "./components/ProductDescription/ProductPage";
import Loading from "./components/Loading";
import MainContext from "./context/MainContext";
import OrderStatus from "./components/OrderTracking/OrderStatus";

function App() {
  const {loading} = useContext(MainContext)

  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/menus" element={<Menus />}/>
        <Route path='/sign-up' element={<Signup  />} />
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/checkout" element={<CardCheckoutPage />}/>
        <Route path="/product" element={<ProductPage  />}/>
        <Route path="/track-orders" element={<OrderStatus />} />
        
        
        {/* <Route path="/order-status" element={<OrderStatus userId={userId} />} /> */}
        {/* <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} /> */}
        
      </Routes>
    </>
  );
}

export default App;
