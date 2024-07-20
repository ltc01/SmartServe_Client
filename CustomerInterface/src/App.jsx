import React, { useState } from "react";
import Menu from "./components/Menu";
// testing
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./components/Signin";
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Signup from "./components/Signup";
import OrderStatus from "./components/OrderStatus";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const userId = 'user123'; 

  
 

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menus"
          element={
            <>
              <Menu isLoggedIn={isLoggedIn}  />
              
            </>
          }
        />
         {/* <Route path="/order-status" element={<OrderStatus userId={userId} />} /> */}
        <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
