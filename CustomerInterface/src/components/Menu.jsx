import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Cart from "./Cart";

// Dummy Data for menu items
const dummyData = [
  { name: "Margherita Pizza", price: 8.99, rating: 4.5, img: img1 },
  { name: "Pepperoni Pizza", price: 9.99, rating: 4.7, img: img2 },
  { name: "Caesar Salad", price: 7.99, rating: 4.3, img: img3 },
  { name: "Grilled Chicken Sandwich", price: 10.99, rating: 4.6, img: img4 },
  { name: "Spaghetti Bolognese", price: 11.99, rating: 4.8, img: img5 },
  { name: "Cheeseburger", price: 9.49, rating: 4.4, img: img6 },
  { name: "French Fries", price: 3.99, rating: 4.2, img: img7 },
  { name: "Chocolate Cake", price: 4.99, rating: 4.9, img: img8 },
  { name: "Vanilla Ice Cream", price: 2.99, rating: 4.7, img: img9 },
  { name: "Coke", price: 1.99, rating: 4.5, img: img10 },
];

const Menu = ({ addToCart }) => {
  const [menuItems, setMenuItems] = useState(dummyData);
  const [opencart, setOpencart] = useState(false);

  // useEffect(() => {
  //   // Fetch menu items from the backend
  //   axios
  //     .get("http://localhost:5000/api/menu")
  //     .then((response) => setMenuItems(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div className="bg-slate-100 py-16">
      {/* cart icon */}
      <div className=" float-right mr-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
      <br />

      <h2 className="text-3xl text-center font-bold pb-2">Menu</h2>
      <div className="flex flex-wrap justify-center items-center gap-1">
        {menuItems.map((item) => (
          <div
            key={item._id}
            className="bg-black/20 md:w-1/4 lg:w-1/6 m-2 mx-auto text-center rounded-t-3xl"
          >
            <MenuItem item={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
      {open && (
        <Cart
          cartItems={cart}
          removeFromCart={removeFromCart}
          placeOrder={placeOrder}
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
};

export default Menu;

const MenuItem = ({ item, addToCart }) => {
  // // Convert binary data to base64 string
  // const base64String = btoa(
  //   new Uint8Array(item.img.data).reduce(
  //     (data, byte) => data + String.fromCharCode(byte),
  //     ""
  //   )
  // );
  // const imageUrl = `data:image/jpeg;base64,${base64String}`; // Adjust MIME type as needed
  const imageUrl = item.img;

  return (
    <>
      <div>
        <img
          src={imageUrl}
          alt={item.name}
          className="h-44 w-full object-cover object-top"
        />
        <h3 className="text-xl font-bold text-nowrap">{item.name}</h3>
        <p className="text-lg">
          <span className="font-semibold pr-2">Price:</span>${item.price}
        </p>
        <p className="text-lg">
          <span className="font-semibold pr-2">Rating:</span> {item.rating}
        </p>
        <button
          onClick={() => addToCart(item)}
          className="font-bold hover:bg-green-700 hover:text-white bg-green-100 text-green-800 my-5 mx-auto px-5 py-2 rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};
