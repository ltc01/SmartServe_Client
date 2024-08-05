import React, { useEffect } from "react";
import { FiHeart, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import Cart from "./Cart";
import axios from "axios";
import CartIcon from "./CartIcon";
import fryingpan from "../assets/images/frying-pan.gif";
import Swal from "sweetalert2";
import Loading from "./Loading";

const Fryingpan = () => {
  return (
    <div className="w-10 h-10 -mt-3 mr-2">
      <img src={fryingpan} alt="" className="w-full h-full object-cover" />
    </div>
  );
};

const Navbar = () => {
  const {
    loading,
    setLoading,
    isLoggedIn,
    openDropdown,
    setOpenDropdown,
    displayAuth,
    setDisplayAuth,
    displayOnScroll,
    setDisplayOnScroll,
    subNavItems,
    cart,
    setCart,
    menuItems,
    open,
    setOpen,
    placedOrders,
    setPlacedOrders,
    totalOfPlacedOrders,
    setTotalOfPlacedOrders,
    cardRef,
    isOpenMenu,
    setIsOpenMenu,
    userId,
  } = useContext(MainContext);
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setDisplayOnScroll(
        scrollY >= 30
          ? "shadow-md border-b border-rose-100 bg-rose-100 backdrop-filter backdrop-blur-lg bg-opacity-30"
          : ""
      )
    );
    // document.addEventListener("mousedown", handleClickOutside);
    // return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // function to show or hide cart
  const handleOpenCart = () => setOpen(!open);

  // const handleClickOutside = (event) => {
  //   if (
  //     cardRef.current &&
  //     !cardRef.current.contains(event.target) &&
  //     !event.target.closest(".cart-icon")
  //   ) {
  //     setOpen(false);
  //   }
  // };

  // function to remove items from cart

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Functionality to place order
  const handlePlaceOrder = async (cartItems) => {
    // Retrieve the JWT token from local storage

    const token = localStorage.getItem("token");
    // console.log(cartItems, cart);
    // if (!token) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error",
    //     text: "⚠ You must be logged in to place an order.",
    //   });
    //   // alert("You must be logged in to place an order.");
    //   setOpen(false);
    //   navigate("/sign-up");
    //   return; // Prevent the function from continuing
    // }
    // commented upper code for testing purpose
    if (cartItems.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "⚠ Your cart is empty. Add items to the cart before placing an order.",
      });
      // alert("Your cart is empty. Add items to the cart before placing an order.");
      return; // Prevent empty cart submission
    }

    const orderTotal = cartItems.reduce((sum, item) => {
      const priceNumber = parseFloat(
        item.price.toString().replace(/[^0-9.-]+/g, "")
      );
      return sum + priceNumber * item.quantity;
    }, 0);

    // Create the order payload
    const orderPayload = {
      items: cartItems,
      totalAmount: orderTotal,
      status: "pending",
      paid: false,
      quantity: cartItems.length,
    };
    // console.log(orderPayload);
    try {
      setLoading(true);

      // // Check if the server is running
      // const healthCheckResponse = axios.get(
      //   "http://localhost:5000/api/orders"
      // );
      // if (healthCheckResponse.status !== 200) {

      //   throw new Error("Server is not running");
      // }
      // const response = axios.post(
      //   "http://localhost:5000/api/orders/",
      //   orderPayload,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
      //     },
      //   }
      // );
      const response = { status: 201 };
      setLoading(false);
      if (response.status !== 201) {
        throw new Error("Server is not running");
      } else {
        Swal.fire({
          icon: "success",
          title: "Orders",
          text: "Order placed successfully!",
        });
        // alert("Order placed successfully!");
        setCart([]);
        localStorage.removeItem("cartItems");

        // Add current order to placed orders
        setPlacedOrders((prevOrders) => {
          const updatedOrders = [...prevOrders, ...cartItems];
          // Retrieve the existing orders from localStorage
          const preOrders =
            JSON.parse(localStorage.getItem("placedOrders")) || [];
          // Save the updated orders back to localStorage
          localStorage.setItem("placedOrders", JSON.stringify(updatedOrders));

          return updatedOrders;
        });
        // Retrieve the existing orders from localStorage
        const existingOrders = JSON.parse(localStorage.getItem("Orders")) || [];
        // Add the new order to the existing orders
        const updatedOrders = [...existingOrders, orderPayload];
        // Save the updated orders back to localStorage
        localStorage.setItem("Orders", JSON.stringify(updatedOrders));

        // Accumulate the total cost in the placedOrdersTotal state
        setTotalOfPlacedOrders((prevTotal) => prevTotal + orderTotal);
      }
    } catch (error) {
      setLoading(false);
      // console.error("Error placing order:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error placing order: ${error.message}`,
      });

      // alert("Server isn't running. Please try again.");
    }
  };

  // function for menu in mobile size screen
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      {/* {loading && <Loading />} */}
      {/* <Auth show={displayAuth} changeView={setDisplayAuth} /> */}
      <nav
        className={`flex font-montserrat px-4 md:px-10 sticky top-0 z-40 w-full items-center justify-between ${displayOnScroll}`}
      >
        <Link to="/">
          {/* <img
              className="w-[100%] h-[70px] md:h-[90px] lg:h-[100px] py-1 md:py-2"
              src={''}
              alt="Description"
            /> */}
          <h2
            style={{ fontFamily: "Josefin Sans" }}
            className="py-2 pl-1 md:py-4 text-2xl w-[30%] text-emerald-700 font-bold"
          >
            SmartServe
          </h2>
        </Link>

        <div className="w-full mx-auto hidden lg:flex">
          <div className="w-full py-1 px-4 ">
            <ul className="w-full flex gap-6 justify-end lg:justify-center xl:gap-8 tracking-wider">
              {subNavItems.map((item, index) => (
                <li key={index}
                // >
                //   <Link
                //     to={`/${item.url}`}
                    className="flex-shrink-0 hover:underline text-sm font-medium text-slate-500 hover:text-rose-800"
                    onClick={() => navigate(`${item.url}`)}
                  >
                    {item.item}
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:px-8 xl:pr-20">
          <div className="w-full flex lg:justify-center justify-end items-center ">
            {placedOrders.length > 0 && <Fryingpan />}
            <div className="hidden cart-icon lg:flex space-x-6 text-slate-500">
              <CartIcon
                // size={20}
                // cart={cart}
                // handleOpenCart={handleOpenCart}
                placedOrders={placedOrders}
                // handleClickOutside={handleClickOutside}
              />
              <br />
              {/* {open && ( */}
              <Cart
                // cardRef={cardRef}
                // cartItems={cart}
                removeFromCart={removeFromCart}
                // placedOrders={placedOrders}
                isLoggedIn={isLoggedIn}
                totalOfPlacedOrders={totalOfPlacedOrders}
                handlePlaceOrder={handlePlaceOrder}
              />
              {/* )} */}
              <Link to={"/sign-up"}>
                <FiUser size={20} onClick={() => setDisplayAuth(true)} />
              </Link>
            </div>
            {/* menu bar mobile size */}
            <div className="md:pr-8 lg:hidden">
              <button onClick={toggleMenu} className="text-gray-800">
                {isOpenMenu ? (
                  <span className="text-3xl">&times;</span>
                ) : (
                  <FaBars size={22} />
                )}
              </button>
            </div>
          </div>
          {/*open card mobile size */}
          {isOpenMenu && 
          <div
            className={`absolute max-h-screen top-11 bg-green-100 rounded-s-xl right-0 w-[90%] md:w-[60%] shadow-sm shadow-slate-500 p-4 transition transform duration-700 ease-in-out lg:hidden ${
              isOpenMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-end pr-4">
              {/* <button
                  type="button"
                  className="btn-close font-medium text-3xl cursor-pointer"
                  onClick={toggleMenu}
                >
                  &times;
                </button> */}

              <div className="flex space-x-4 justify-center my-2">
                <CartIcon
                  size={20}
                  cart={cart}
                  handleOpenCart={handleOpenCart}
                  totalOfPlacedOrders={totalOfPlacedOrders}
                  // handleClickOutside={handleClickOutside}
                />
                <br />
                {/* {open && ( */}
                <Cart
                  cardRef={cardRef}
                  cartItem={cart}
                  removeFromCart={removeFromCart}
                  placedOrders={placedOrders}
                  isLoggedIn={isLoggedIn}
                  totalOfPlacedOrders={totalOfPlacedOrders}
                  handlePlaceOrder={handlePlaceOrder}
                />
                {/* )} */}
                <FiHeart className="text-gray-800" />
                <Link to={"/signup"}>
                  <FiUser onClick={() => setDisplayAuth(true)} />
                </Link>
              </div>
            </div>
            <div className="flex text-sm flex-col w-full gap-4 overflow-auto max-h-screen scroll-smooth">
              {subNavItems.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="px-2 text-gray-800 font-medium"
                >
                  {item.item}
                </Link>
              ))}
            </div>
          </div>
}
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
