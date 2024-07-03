import React, { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./components/Signin";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import OrderStatus from "./components/OrderStatus";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const userId = 'user123'; 

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const placeOrder = () => {
    axios
      .post("http://localhost:5000/api/orders", { items: cart })
      .then((response) => {
        alert("Order placed successfully!");
        setCart([]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menus"
          element={
            <>
              <Menu addToCart={addToCart} />
              <Cart
                cartItems={cart}
                removeFromCart={removeFromCart}
                placeOrder={placeOrder}
                isLoggedIn={isLoggedIn}
              />
            </>
          }
        />
         <Route path="/order-status" element={<OrderStatus userId={userId} />} />
        <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
