import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, placeOrder, isLoggedIn }) => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      if (isLoggedIn) {
        placeOrder();
        // Navigate to the order status page after placing an order
        navigate("/order-status");
      } else {
        // Navigate to login page or show a message to the user
        alert("Please log in to place your order.");
        navigate("/signin"); // Navigate to the login page
      }
    } else {
      alert("Please add items to the cart.");
    }
  };
  return (
    // <div>
    //   <h2>Cart</h2>
    //   <ul>
    //     {cartItems.map((item, index) => (
    //       <li key={index}>
    //         {item.name} - ${item.price}
    //         <button onClick={() => removeFromCart(index)}>Remove</button>
    //       </li>
    //     ))}
    //   </ul>
    //   <button onClick={handlePlaceOrder}>
    //     {/* {isLoggedIn ? 'Place Order' : 'Login to Place Order'} */}Place Order
    //   </button>
    // </div>

    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul className="space-y-2">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-2 rounded shadow"
          >
            <span>
              {item.name} - ${item.price.toFixed(2)}
            </span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default Cart;
