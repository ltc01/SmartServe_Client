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
import { BsCartCheckFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

// Dummy Data for menu items
const dummyData = [
  { id: 1, name: "Margherita Pizza", price: 8.99, rating: 4.5, img: img1, quantity: 1 },
  { id: 2, name: "Pepperoni Pizza", price: 9.99, rating: 3.7, img: img2, quantity: 1 },
  { id: 3, name: "Caesar Salad", price: 7.99, rating: 1.3, img: img3, quantity: 1 },
  { id: 4, name: "Grilled Chicken Sandwich", price: 10.99, rating: 2.6, img: img4, quantity: 1 },
  { id: 5, name: "Spaghetti Bolognese", price: 11.99, rating: 3.8, img: img5, quantity: 1 },
  { id: 6, name: "Cheeseburger", price: 9.49, rating: 2.4, img: img6, quantity: 1 },
  { id: 7, name: "French Fries", price: 3.99, rating: 5.0, img: img7, quantity: 1 },
  { id: 8, name: "Chocolate Cake", price: 4.99, rating: 3.9, img: img8, quantity: 1 },
  { id: 9, name: "Vanilla Ice Cream", price: 2.99, rating: 2.7, img: img9, quantity: 1 },
  { id: 10, name: "Coke", price: 1.99, rating: 4.5, img: img10, quantity: 1 },
];


const Menu = ({isLoggedIn}) => {
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState(dummyData);
  const [openCart, setOpencart] = useState(true);
  const [placedOrders, setPlacedOrders] = useState([]);
  const [allPlacedOrders, setAllPlacedOrders] = useState(0);

  // useEffect(() => {
  //   // Fetch menu items from the backend
  //   axios
  //     .get("http://localhost:5000/api/menu")
  //     .then((response) => setMenuItems(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  // function to show or hide cart
  const handleOpenCart = () => setOpencart(!openCart);

  // function to remove items from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // functionality to place order
  const handlePlaceOrder = (cartItems) => {
    axios
      .post("http://localhost:5000/api/orders", { cartItems: cart })
      .then((response) => {
        alert("Order placed successfully!");
        setCart([]);
      })
      .catch((error) => console.error(error));

    const orderTotal = cartItems.reduce((sum, item) => {
      const priceNumber = parseFloat(item.price.toString().replace(/[^0-9.-]+/g, ""));
      return sum + priceNumber * item.quantity;
    }, 0);

    // Add current order to placed orders
    setPlacedOrders((prevOrders) => [...prevOrders, ...cartItems]);

    // Accumulate the total cost in the placedOrdersTotal state
    setAllPlacedOrders((prevTotal) => prevTotal + orderTotal);

    // Clear the cart
    setCart([]);
  };

  // Function to payment
  const proceedToPayment = () => {};

   // function to add items into cart
   const addToCart = (item) => {
    setCart((preCart) => {
      console.log("Adding item to cart:", item);
      const itemIndex = preCart.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (itemIndex !== -1) {
        const updateCart = [...preCart];
        updateCart[itemIndex].quantity += 1;
        return updateCart;
      } else {
        return [...preCart, { ...item, quantity: 1 }];
      }
    });
    console.log("Updated cart:", cart);
  };
  
  return (
    <>
      {/* cart icon */}
      <CartIcon
        cart={cart}
        handleOpenCart={handleOpenCart}
        allPlacedOrders={allPlacedOrders}
      />
      <br />
      {openCart && (
        <Cart
          cartItem={cart}
          removeFromCart={removeFromCart}
          placedOrders={placedOrders}
          isLoggedIn={isLoggedIn}
          allPlacedOrders={allPlacedOrders}
          handlePlaceOrder={handlePlaceOrder}
        />
      )}

      <h2 className="text-3xl text-center font-bold pb-2">Menu</h2>
      <div className="flex flex-wrap justify-center items-center gap-1">
        {menuItems.map((item,index) => (
          <div
            key={index}
            className="bg-black/20 md:w-1/4 lg:w-1/6 m-2 mx-auto text-center rounded-t-3xl"
          >
            <MenuItem item={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </>
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
  const {id, img, name, price, rating, quantity } = item
  const [quantities, setQuantities] = useState({});

  // function to update quantity on change in input field of quantity
  const handleQuantityChange = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1; // Default to 1 if no quantity is set
    addToCart({ ...item, quantity });
  };
  return (
    <>
      <div>
        <img
          src={img}
          alt={`Image of ${name}`}
          className="h-44 w-full object-cover object-top"
        />
        <h3 className="text-xl font-bold text-nowrap">{name}</h3>
        <p className="text-lg">
          <span className="font-semibold pr-2">Price:</span>${price}
        </p>
        {/* <p className="text-lg">
          <span className="font-semibold pr-2">Rating:</span> {rating}
        </p> */}
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                color={index < Math.floor(rating) ? "yellow-300" : "white"}
              />
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <label
            htmlFor={name}
            className="text-sm font-medium text-gray-700"
          >
            Qty:
          </label>
          <input
            type="number"
            id={name}
            min="1"
            value={quantities[id] || 1}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            className="w-16 border border-gray-300 rounded-md px-2 py-1 text-center"
          />
        </div>
        <button
          onClick={() => handleAddToCart({img, name, price, rating,quantity })}
          className="font-bold hover:bg-green-700 hover:text-white bg-green-100 text-green-800 my-5 mx-auto px-5 py-2 rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};


// Start Icon for ratings of menuItem
const StarIcon = ({ color }) => {
  return (
    <svg
      className={`w-4 h-4 text-${color}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};


// Cart icon for cart 
const CartIcon = ({ cart, handleOpenCart, allPlacedOrders }) => {
  // Calculate total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative cursor-pointer " onClick={handleOpenCart}>
      <BsCartCheckFill className="text-4xl float-right mr-20 text-emerald-900" />
      {totalItems > 0 && (
        <span className="absolute top-0 z-[999] right-24 inline-flex items-center justify-center w-6 h-6 text-md font-bold text-white bg-red-500 rounded-full -mt-2 -mr-2">
          {totalItems}
        </span>
      )}
      {allPlacedOrders > 0 && (
        <span className="absolute top-0 right-20 inline-flex items-center justify-center w-6 h-6 text-2xl font-bold text-emerald-800 bg-white rounded-full -mt-2 -mr-2">
          <FaCheckCircle />
        </span>
      )}
    </div>
  );
};