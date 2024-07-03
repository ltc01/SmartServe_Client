import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, placeOrder ,isLoggedIn}) => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if(cartItems.length > 0){
      if (isLoggedIn) {
        placeOrder();
      } else {
        // Navigate to login page or show a message to the user
        alert('Please log in to place your order.');
        navigate('/signin'); // Navigate to the login page
      }
    } else{
      alert("Please add items to the cart.")
    }
  };
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>
        {/* {isLoggedIn ? 'Place Order' : 'Login to Place Order'} */}Place Order
      </button>
    </div>
  );
};

export default Cart;
