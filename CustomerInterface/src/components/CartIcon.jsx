import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import grocery from '../assets/images/grocery.gif'

const Grocery =()=>{
  return (
    <img src={grocery} alt="" className="w-20 h-8 mr-2"/>
  )
}

// Cart icon for cart
const CartIcon = ({ cart, handleOpenCart, placedOrders }) => {
  let cartItem = (JSON.parse(localStorage.getItem("cartItems")) || []).length;

    return (
      <div className="relative cursor-pointer " onClick={handleOpenCart}>
        <FiShoppingCart className="" size={20} />
        {/* <Grocery > */}
        {cartItem > 0 && (
          <span className="absolute top-0 z-[999] left-3 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-rose-600 rounded-full -mt-2">
            {cartItem}
          </span>
        )}
        {/* {placedOrders.length > 0 && (
          <span className="absolute top-0 inline-flex items-center justify-center w-6 h-6 text-2xl font-bold text-emerald-800 bg-white rounded-full -mt-2 -mr-2">
            {placedOrders.length}
          </span>
        )} */}
        {/* </Grocery> */}
      </div>
    );
  };

export default CartIcon