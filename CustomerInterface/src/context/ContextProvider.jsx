import React, { useRef, useState  } from "react";
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
import { useNavigate } from "react-router-dom";

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState(dummyData);
  const [openCart, setOpencart] = useState(false);
  const [placedOrders, setPlacedOrders] = useState([]);
  const [totalOfPlacedOrders, setTotalOfPlacedOrders] = useState(0);
  const [filterStatus, setFilterStatus] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // states for signup functionality
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: Phone input, Step 2: OTP input
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  // navbar ke states
  const cardRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayOnScroll, setDisplayOnScroll] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const subNavItems = [
    { item: "About us", url: "/about-us" },
    { item: "Menus", url: "/menus" },
    { item: "Customer Reviews", url: "/reviews" },
  ];

  // orderstatus ke states
  const userId = "user123";
  const [orders, setOrders] = useState([]);


  const values = {
    searchItem,
    setSearchItem,
    filterStatus,
    setFilterStatus,
    // signupp ke states
    navigate,
    step,
    setStep,
    phone,
    setPhone,
    name,
    setName,
    otp,
    setOtp,
    error,
    setError,
    // Navbar k states
    openDropdown,
    setOpenDropdown,
    displayAuth,
    setDisplayAuth,
    displayOnScroll,
    setDisplayOnScroll,
    subNavItems,
    cart,
    isLoggedIn,
    setIsLoggedIn,
    setCart,
    menuItems,
    setMenuItems,
    openCart,
    setOpencart,
    placedOrders,
    setPlacedOrders,
    totalOfPlacedOrders,
    setTotalOfPlacedOrders,
    cardRef,
    isOpen,
    setIsOpen,
    // OrderStatus ke states
    userId,
    orders, setOrders,
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
const categories = [
  {
    title: "Snacks",
    items: [
      {
        name: "Bhaji",
        price: "15",
        rating: 4.3,
        imageSrc: "https://bit.ly/3XvQTf5",
      },
      {
        name: "Samosa",
        price: "20",
        rating: 4.9,
        imageSrc: "https://bit.ly/3yJkKpJ",
      },
      {
        name: "Vada Pav",
        price: "15",
        rating: 4.5,
        imageSrc: "https://bit.ly/3RiEg2W",
      },
    ],
  },
  {
    title: "Breads",
    items: [
      { name: "Naan", price: "15", rating: 4.3 },
      { name: "Roti", price: "15", rating: 4.3 },
      { name: "Paratha", price: "15", rating: 4.3 },
      { name: "Poori", price: "15", rating: 4.3 },
    ],
  },
  {
    title: "Meals",
    items: [
      { name: "Tikka Masala", price: "15", rating: 4.3 },
      { name: "Chole Masala", price: "15", rating: 4.3 },
      { name: "Dal Makhni", price: "15", rating: 4.3 },
      { name: "Biryani", price: "15", rating: 4.3 },
      { name: "Tadka Dal", price: "15", rating: 4.3 },
      { name: "Aloo gobi", price: "15", rating: 4.3 },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Chai", price: "15", rating: 4.3 },
      { name: "Masala Chai", price: "15", rating: 4.3 },
      { name: "Lassi", price: "15", rating: 4.3 },
      { name: "Chas", price: "15", rating: 4.3 },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Gulab Jamun", price: "15", rating: 4.3 },
      { name: "Halwa", price: "15", rating: 4.3 },
      { name: "Barfi", price: "15", rating: 4.3 },
      { name: "Gaajar Halwa", price: "15", rating: 4.3 },
      { name: "Kaaju kathli", price: "15", rating: 4.3 },
      { name: "Doodh Peda", price: "15", rating: 4.3 },
      { name: "Coconut Barfi", price: "15", rating: 4.3 },
    ],
  },
];
