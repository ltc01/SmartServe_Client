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
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
  const [menuItems, setMenuItems] = useState(dummyData);
  const [open, setOpen] = useState(false);
  const [placedOrders, setPlacedOrders] = useState(JSON.parse(localStorage.getItem("placedOrders")) || []);
  const [totalOfPlacedOrders, setTotalOfPlacedOrders] = useState(0);
  const [filterStatus, setFilterStatus] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // states for signup functionality
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step 1: Phone input, Step 2: OTP input
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  // navbar ke states
  const cardRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayOnScroll, setDisplayOnScroll] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const subNavItems = [
    { item: "About us", url: "/about-us" },
    { item: "Menus", url: "/menus" },
    { item: "Customer Reviews", url: "/reviews" },
  ];

  // orderstatus ke states
  const userId = "user123";
  const [orders, setOrders] = useState([]);

  const inputRefs = useRef([]);
  const values = {
    inputRefs,
    loading, setLoading,
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
    open,
    setOpen,
    placedOrders,
    setPlacedOrders,
    totalOfPlacedOrders,
    setTotalOfPlacedOrders,
    cardRef,
    isOpenMenu,
    setIsOpenMenu,
    // OrderStatus ke states
    userId,
    orders, setOrders,
  };
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default ContextProvider;

// Dummy Data for menu items
const dummyData = [
  { name: "Margherita Pizza", price: 150, rating: 4.5, imageSrc: img1, quantity: 1, desc: "Classic cheese pizza with a delicious tomato base." },
  { name: "Pepperoni Pizza", price: 220, rating: 3.7, imageSrc: img2, quantity: 1, desc: "Pepperoni slices and melted cheese on a crispy crust." },
  { name: "Caesar Salad", price: 160, rating: 1.3, imageSrc: img3, quantity: 1, desc: "Fresh romaine lettuce, Caesar dressing, and croutons." },
  { name: "Grilled Chicken Sandwich", price: 210, rating: 2.6, imageSrc: img4, quantity: 1, desc: "Grilled chicken breast with lettuce and a tangy sauce." },
  { name: "Spaghetti Bolognese", price: 120, rating: 3.8, imageSrc: img5, quantity: 1, desc: "Pasta topped with a rich and savory meat sauce." },
  { name: "Cheeseburger", price: 140, rating: 2.4, imageSrc: img6, quantity: 1, desc: "Juicy beef patty with cheese, lettuce, and tomato." },
  { name: "French Fries", price: 80, rating: 5.0, imageSrc: img7, quantity: 1, desc: "Crispy golden fries, perfect as a side or snack." },
  { name: "Chocolate Cake", price: 450, rating: 3.9, imageSrc: img8, quantity: 1, desc: "Decadent and moist chocolate cake with frosting." },
  { name: "Vanilla Ice Cream", price: 90, rating: 2.7, imageSrc: img9, quantity: 1, desc: "Creamy vanilla ice cream, a classic favorite." },
  { name: "Coke", price: 120, rating: 4.5, imageSrc: img10, quantity: 1, desc: "Chilled and refreshing soda, perfect for any meal." },
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
