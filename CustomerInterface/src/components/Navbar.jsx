import React, {useEffect } from "react";
import { FiHeart, FiUser} from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import Cart from "./Cart";
import axios from "axios";
import CartIcon from "./CartIcon";

const Navbar = ({ navItemText }) => {
  const {
    isLoggedIn,
    navigate,
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
    openCart,
    setOpencart,
    placedOrders,
    setPlacedOrders,
    totalOfPlacedOrders,
    setTotalOfPlacedOrders,
    cardRef,
    isOpen,
    setIsOpen,
  } = useContext(MainContext);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setDisplayOnScroll(
        scrollY >= 30
          ? "shadow-md border-b border-rose-100 bg-rose-100 backdrop-filter backdrop-blur-lg bg-opacity-30"
          : ""
      )
    );
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // function to show or hide cart
  const handleOpenCart = () => setOpencart(!openCart);

  const handleClickOutside = (event) => {
    if (
      cardRef.current &&
      !cardRef.current.contains(event.target) &&
      !event.target.closest(".cart-icon")
    ) {
      setOpencart(false);
    }
  };

  // function to remove items from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // functionality to place order
  const handlePlaceOrder = (cartItems) => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in to place an order.");
      navigate("/signup");
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
    axios
      .post("http://localhost:5000/api/orders/", orderPayload, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
        },
      })
      .then((response) => {
        alert("Order placed successfully!");
        setCart([]);

        // Add current order to placed orders
        setPlacedOrders((prevOrders) => [...prevOrders, ...cartItems]);
        // console.log("Placed order:", placedOrders);

        // Accumulate the total cost in the placedOrdersTotal state
        setTotalOfPlacedOrders((prevTotal) => prevTotal + orderTotal);
        // console.log(totalOfPlacedOrders);
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        alert("Server isn't running. Please try again.");
      });
  };

  // function for menu in mobile size screen
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
            className="py-4 text-2xl w-[30%] text-emerald-700 font-bold"
          >
            SmartServe
          </h2>
        </Link>

        <div className="w-full mx-auto hidden lg:flex">
          <div className="w-full py-1 px-4 ">
            <ul className="w-full flex gap-6 justify-end lg:justify-center xl:gap-8 tracking-wider">
              {subNavItems.map((item, index) => (
                <li className="flex-shrink-0 " key={index}>
                  <Link
                    to={item.url}
                    className="hover:underline text-sm font-medium text-slate-500 hover:text-rose-800"
                    onClick={() => navItemText(item)}
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:px-8 xl:pr-20">
          <div className="w-full flex lg:justify-center justify-end items-center ">
            <div className="hidden cart-icon lg:flex space-x-6 text-slate-500">
              <CartIcon
                size={20}
                cart={cart}
                handleOpenCart={handleOpenCart}
                totalOfPlacedOrders={totalOfPlacedOrders}
                handleClickOutside={handleClickOutside}
              />
              <br />
              {openCart && (
                <Cart
                  cardRef={cardRef}
                  cartItem={cart}
                  removeFromCart={removeFromCart}
                  placedOrders={placedOrders}
                  isLoggedIn={isLoggedIn}
                  totalOfPlacedOrders={totalOfPlacedOrders}
                  handlePlaceOrder={handlePlaceOrder}
                />
              )}
              <Link to={"/sign-up"}>
                <FiUser size={20} onClick={() => setDisplayAuth(true)} />
              </Link>
            </div>

            <div className="pr-8 lg:hidden">
              <button onClick={toggleMenu} className="text-gray-800">
                <FaBars size={22} />
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="absolute max-h-screen top-0 bg-white/70 right-0 w-[80%] md:w-[60%] z-50 backdrop-blur-lg shadow-lg shadow-slate-600 py-4 pl-4 transition-[transform] duration-[0.5s] ease-in-out lg:hidden">
                <div className="flex items-center justify-between pr-4">
                  <button
                    type="button"
                    className="btn-close font-medium text-3xl cursor-pointer"
                    onClick={toggleMenu}
                  >
                    &times;
                  </button>

                  <div className="flex space-x-4 justify-center my-2">
                    <CartIcon
                      cart={cart}
                      handleOpenCart={handleOpenCart}
                      totalOfPlacedOrders={totalOfPlacedOrders}
                    />
                    <br />
                    {openCart && (
                      <Cart
                        cardRef={cardRef}
                        cartItem={cart}
                        removeFromCart={removeFromCart}
                        placedOrders={placedOrders}
                        isLoggedIn={isLoggedIn}
                        totalOfPlacedOrders={totalOfPlacedOrders}
                        handlePlaceOrder={handlePlaceOrder}
                      />
                    )}
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
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;


