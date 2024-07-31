import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import grocery from "../assets/images/grocery.gif";
import emptyCart from '../assets/images/cart.png'
import MainContext from "../context/MainContext";

export const Grocery = () => {
  return (
    <div className="w-28 h-24 flex items-center justify-center">
      <img 
      src={grocery} 
      alt="Grocery_img" 
      className="w-full h-full object-cover"
      // style={{ filter: "grayscale(0%) brightness(100%)" }}
       />
    </div>
  );
};

export const EmptyCart = () => {
  return (
    <div className="w-36 h-36 flex items-center justify-center">
      <img 
      src={emptyCart} 
      alt="Grocery" 
      className="w-full h-full object-cover"
      // style={{ filter: "grayscale(40%) brightness(100%)" }}
       />
    </div>
  );
};
// Cart icon for cart
const CartIcon = ({ carts, handleOpenCart, placedOrders }) => {
  // let cartItem = (JSON.parse(localStorage.getItem("cartItems")) || []).length;
  const {cart, setOpen, setIsOpenMenu} = useContext(MainContext)
  const handleClick = () =>{
    setIsOpenMenu(false)
    setOpen(true)
  }

  return (
    <div className="relative cursor-pointer " onClick={handleClick}>
      <FiShoppingCart className="" size={20} />
      {/* <Grocery > */}
      {cart.length > 0 && (
        <span className="absolute top-0 z-[999] left-3 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-rose-600 rounded-full -mt-2">
          {cart.length}
        </span>
      )}
      {/* {placedOrders?.length > 0 && (
        <span className="absolute top-0 z-[998] left-3 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-emerald-800 rounded-full -mt-2">
         {placedOrders?.length}
        </span>
      )} */}
      {/* </Grocery> */}
    </div>
  );
};

export default CartIcon;
