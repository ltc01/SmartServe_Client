import React from "react";
import MainContext from "./MainContext";
import img1 from "../assets/images/margherita.jpg";
import img2 from "../assets/images/pepperoni.jpg";
import img3 from "../assets/images/caesar-salad.jpg";
import img4 from "../assets/images/chicken-sandwich.jpg";
import img5 from "../assets/images/spaghetti-bolognese.jpg";
import img6 from "../assets/images/cheeseburger.jpg";
import img7 from "../assets/images/french-fries.jpg";
import img8 from "../assets/images/chocolate-cake.jpg";
import img9 from "../assets/images/coke.jpg";
import img10 from "../assets/images/vanilla-ice-cream.jpg";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState(dummyData);
  const [openCart, setOpencart] = useState(false);
  const [placedOrders, setPlacedOrders] = useState([]);
  const [totalOfPlacedOrders, setTotalOfPlacedOrders] = useState(0);

  const values = {
    cart,
    setCart,
    menuItems,
    setMenuItems,
    openCart,
    setOpencart,
    placedOrders,
    setPlacedOrders,
    totalOfPlacedOrders,
    setTotalOfPlacedOrders,
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default ContextProvider;

// Dummy Data for menu items
const dummyData = [
  { name: "Margherita Pizza", price: 10, rating: 4.5, img: img1, quantity: 1 },
  { name: "Pepperoni Pizza", price: 20, rating: 3.7, img: img2, quantity: 1 },
  { name: "Caesar Salad", price: 10, rating: 1.3, img: img3, quantity: 1 },
  {
    name: "Grilled Chicken Sandwich",
    price: 20,
    rating: 2.6,
    img: img4,
    quantity: 1,
  },
  {
    name: "Spaghetti Bolognese",
    price: 10,
    rating: 3.8,
    img: img5,
    quantity: 1,
  },
  { name: "Cheeseburger", price: 40, rating: 2.4, img: img6, quantity: 1 },
  { name: "French Fries", price: 20, rating: 5.0, img: img7, quantity: 1 },
  { name: "Chocolate Cake", price: 10, rating: 3.9, img: img8, quantity: 1 },
  { name: "Vanilla Ice Cream", price: 20, rating: 2.7, img: img9, quantity: 1 },
  { name: "Coke", price: 30, rating: 4.5, img: img10, quantity: 1 },
];
