import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { IoTrashBin } from "react-icons/io5";
// import { StarIcon } from "./Menu";
const Cart = ({
 cardRef,
  cartItem,
  removeFromCart,
  placedOrders,
  handlePlaceOrder,
  isLoggedIn,
  totalOfPlacedOrders,
}) => {
  const navigate = useNavigate();
  const userId = "user123";
  const proceedToPlaceOrder = () => {
    if (cartItem.length > 0) {
      if (isLoggedIn) {
        handlePlaceOrder(cartItem);
        // Navigate to the order status page after placing an order
        // navigate("/order-status");
        // alert("Order placed!!!");
      } else {
        // Navigate to login page or show a message to the user
        alert("Please log in to place your order.");
        navigate("/signin"); // Navigate to the login page
      }
      console.log("Cart Items", cartItem);
    } else {
      alert("Please add items to the cart.");
    }
  };
  const total = cartItem.reduce((sum, item) => {
    const priceNumber = parseFloat(
      item.price.toString().replace(/[^0-9.-]+/g, "")
    );
    return sum + priceNumber * item.quantity;
  }, 0);

  return (
    // <div>
    //   <h2>Cart</h2>
    //   <ul>
    //     {cartItem.map((item, index) => (
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

    <div ref={cardRef}
    className="container absolute w-[30%] bg-slate-200 top-8 right-44 mx-auto py-4 rounded-lg shadow-lg px-6">
      <h2 className="text-lg  font-bold mb-2">Cart</h2>
      {cartItem.length === 0 ? (
        <p>Your cart is empty!!</p>
      ) : (
        <div className="mx-auto">
          <ul className="space-y-2">
            {cartItem.map((item, index) => (
              <li
                key={index}
                className="flex relative bg-white justify-start border p-4  rounded shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <IoTrashBin
                  className="absolute bottom-5 right-4 text-lg cursor-pointer text-red-600"
                  onClick={() => removeFromCart(index)}
                />
                <div className="flex pl-3 flex-col text-sm">
                  <h2 className="text-base text-slate-700 font-medium">
                    {item.name}
                  <span className="flex mt-1">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        color={
                          index < Math.floor(item.rating)
                            ? "text-orange-500"
                            : "text-white"
                        }
                      />
                    ))}
                  </span>
                  </h2>
                  <p className="text-rose-700 mt-2 font-semibold flex flex-col justify-between">
                    <span className="text-sm font-semibold text-emerald-600">
                      Qty: {item.quantity}
                    </span>
                    <span className="mt-1 text-base"> ₹{item.price.toFixed(2)}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between items-center">
            <h3 className="text-slate-600 font-semibold">Total:</h3>
            <span className="text-rose-800 font-bold">{`₹${total.toFixed(
              2
            )}`}</span>
          </div>
          <button
            className="mt-2 float-right hover:bg-blue-500 font-semibold bg-blue-600 text-white px-4 py-1 rounded-md"
            onClick={proceedToPlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}
      {/* Placed Orders Section */}
      {placedOrders.length > 0 && (
        <div className="mt-10 overflow-y-scroll h-[70vh]">
          <h2 className="text-2xl font-bold mb-4">Placed Orders</h2>
          <ul className="space-y-4">
            {placedOrders.map((order, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-green-700/20 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center">
                  <img
                    src={order.imageSrc}
                    alt={order.imageAlt}
                    className="h-16 w-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h5 className="font-semibold text-lg">{order.name}</h5>
                    <span className="text-md text-gray-600">
                      ₹{order.price} x {order.quantity}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        color={
                          index < Math.floor(order.rating)
                            ? "text-yellow-500"
                            : "text-white"
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-3">{order.rating}</span>
                  {/* <span className="ml-3">dummyData</span> */}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Total for Placed Orders:</h3>
            <span className="text-xl font-semibold">{`₹${totalOfPlacedOrders.toFixed(
              2
            )}`}</span>
          </div>
          {/* <button
            className="mt-5 w-full bg-red-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </button> */}
          <OrderStatus userId={userId} />
        </div>
      )}
    </div>
  );
};

export default Cart;

const OrderStatus = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  // const socket = io('http://localhost:5000');

  // useEffect(() => {
  //   // axios.get(`http://localhost:5000/api/orders/user/${userId}`)
  //   //   .then(response => setOrders(response.data))
  //   //   .catch(error => console.error('Error fetching orders:', error));

  //   socket.on('orderUpdate', updatedOrder => {
  //     setOrders(prevOrders => prevOrders.map(order => order._id === updatedOrder._id ? updatedOrder : order));
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [userId, socket]);

  const handlePayment = (orderId) => {
    //   axios.put(`http://localhost:5000/api/orders/${orderId}/pay`)
    //     .then(response => {
    //       setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? response.data : order));
    alert("Payment successful!");
    //     })
    //     .catch(error => console.error('Error processing payment:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Order Status</h2>
      <ul className="space-y-2">
        {orders.map((order) => (
          <li key={order._id} className="border p-2 rounded shadow">
            <div>
              <p>
                <strong>Items:</strong>{" "}
                {order.items.map((item) => item.name).join(", ")}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Total:</strong> ${order.totalAmount.toFixed(2)}
              </p>
            </div>
            {order.status === "approved" && !order.paid && (
              <button
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handlePayment(order._id)}
              >
                Proceed to Payment
              </button>
            )}
            {order.paid && (
              <span className="text-green-600 font-bold"> - Paid</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const StarIcon = ({ color }) => {
  return (
    <svg
      className={`w-3 h-3 ${color}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
};
