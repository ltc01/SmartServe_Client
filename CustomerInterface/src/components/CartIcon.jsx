import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
// Cart icon for cart
const CartIcon = ({ cart, handleOpenCart, totalOfPlacedOrders }) => {
    
    return (
      <div className="relative cursor-pointer " onClick={handleOpenCart}>
        <FiShoppingCart className="" size={20} />
        {cart.length > 0 && (
          <span className="absolute top-0 z-[10] left-3 inline-flex items-center justify-center w-4 h-4 text-xs font-medium text-white bg-rose-600 rounded-full -mt-2">
            {cart.length}
          </span>
        )}
        {totalOfPlacedOrders > 0 && (
          <span className="absolute top-0 inline-flex items-center justify-center w-6 h-6 text-2xl font-bold text-emerald-800 bg-white rounded-full -mt-2 -mr-2">
            <FaCheckCircle />
          </span>
        )}
      </div>
    );
  };

export default CartIcon