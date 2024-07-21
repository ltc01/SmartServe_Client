import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { IoTrashBin } from "react-icons/io5";
import MainContext from "../context/MainContext";
import OrderStatus from "./OrderStatus";
import StarIcon from "./StarIcon";

const Cart = ({
  cartItem,
  cardRef,
  removeFromCart,
  placedOrders,
  handlePlaceOrder,
  isLoggedIn,
  totalOfPlacedOrders,
}) => {
  const {setCart, openCart, setOpencart, navigate} = useContext(MainContext)
  

  const proceedToPlaceOrder = () => {
    if (cartItem.length > 0) {
      if (isLoggedIn) {
        handlePlaceOrder(cartItem);
        // Navigate to the order status page after placing an order
        // navigate("/order-status");
      } else {
        // Navigate to login page or show a message to the user
        alert("Please log in to place your order.");
        navigate("/signin"); // Navigate to the login page
      }
      // console.log("Cart Items", cartItem);
    } else {
      alert("Please add items to the cart.");
    }
  };

  const updateQuantity = (index, quantity) => {
    const updatedCart = cartItem.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart); // You need to manage cart state at a higher level or pass a setCart function
  };

  const total = cartItem.reduce((sum, item) => {
    const priceNumber = parseFloat(
      item.price.toString().replace(/[^0-9.-]+/g, "")
    );
    return sum + priceNumber * item.quantity;
  }, 0);


  return (
    <div ref={cardRef}
      className="container absolute w-[40%] bg-slate-200 top-8 right-44 mx-auto py-4 rounded-lg shadow-lg px-6">
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
                  <p className=" text-sm mt-2 font-semibold flex flex-col justify-between">
                    <span className="mb-3">
                      Qty:
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="mx-2 px-1 border"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="mx-2 px-1 border"
                      >
                        +
                      </button>
                    </span>
                    <span className=" text-emerald-700 text-lg">₹{item.price} x {item.quantity}</span>
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
          <OrderStatus />
        </div>
      )}

    </div>
  );
};

export default Cart;


