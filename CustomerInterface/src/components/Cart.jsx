import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { IoTrashBin } from "react-icons/io5";
import MainContext from "../context/MainContext";
import OrderStatus from "./OrderStatus";
import StarIcon from "./StarIcon";
import Swal from 'sweetalert2'

const Cart = ({
  cardRef,
  removeFromCart,
  placedOrders,
  handlePlaceOrder,
  isLoggedIn,
  totalOfPlacedOrders,
}) => {
  const {setCart, openCart, setOpencart, navigate} = useContext(MainContext)
  
  let cartItems = (JSON.parse(localStorage.getItem("cartItems")) || [])
  const proceedToPlaceOrder = () => {
  //   // if (cartItem.length > 0) {
  //     // if (isLoggedIn) {
  //     //   console.log("Usr is logged in")
        // handlePlaceOrder(cartItems);
  //       // Navigate to the order status page after placing an order
  //       // navigate("/order-status");
  //     // } else {
  //     //   // Navigate to login page or show a message to the user
  //     //   alert("Please log in to place your order.");
  //     //   navigate("/signin"); // Navigate to the login page
  //     // }
  //     // console.log("Cart Items", cartItem);
  //   // } else {
  //   //   alert("Please add items to the cart.");
  //   // }
  };
// console.log("placed",placedOrders)
  const updateQuantity = (index, quantity) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart); // You need to manage cart state at a higher level or pass a setCart function
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
// console.log(cartItems)
  const total = cartItems.reduce((sum, item) => {
    const priceNumber = parseFloat(
      item.price.toString().replace(/[^0-9.-]+/g, "")
    );
    return sum + priceNumber * item.quantity;
  }, 0);


  return (
    <div ref={cardRef}
      className="container absolute right-3 top-11 w-[90%] md:w-[35%] text-white backdrop-blur-lg bg-black/70 md:top-8 md:right-44 mx-auto py-2 md:py-4 rounded-lg shadow-lg px-3 md:px-6">
      <h2 className="md:text-lg mb-1 font-bold md:px-2 md:mb-2">Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty!!</p>
      ) : (
        <div className="mx-auto overflow-y-scroll no-scrollbar max-h-[78vh]">
          <ul className="space-y-2">
           
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex relative bg-white justify-start md:border p-1 pr-2 md:p-4 rounded shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
                />
                <IoTrashBin
                  className="absolute bottom-3 right-2 md:top-3 md:right-4 text-sm md:text-lg cursor-pointer text-slate-400 hover:text-emerald-600"
                  onClick={() => removeFromCart(index)}
                />
                <div className=" flex pl-1 md:pl-3 flex-col text-sm">
                  <h2 className="text-sm md:text-base text-black font-medium">
                    {item.name}
                  </h2>
                  <span className="flex mt-1 md:mt-2 text-xs md:text-sm">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        color={
                          index < Math.floor(item.rating)
                            ? "text-orange-500"
                            : "text-slate-300/70"
                        }
                      />
                    ))}
                  </span>
                  
                  <p className="pl-1 md:pl-0 text-slate-500 text-xs md:text-sm mt-1 md:mt-4 font-semibold">
                    <span className="">
                      Qty:
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="md:mx-2 mx-1 px-1 border"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="md:mx-2 mx-1 px-1 border"
                      >
                        +
                      </button>
                    </span>
                    <span className="block mt-1 md:mt-0 md:absolute md:bottom- md:right-[5%] text-rose-700 font-bold text-sm md:text-lg">
                      {/* <span className="font-medium text-sm md:text-base">{item.quantity} x</span>  */}
                      ₹{item.price}/-</span>
                  </p>
                </div>
              </li>
            ))}

          </ul>

          <div className="mt-3 flex justify-between px-6 text-lg items-center">
            <h3 className="font-bold">Total:</h3>
            <span className="font-bold">{`₹${total}/-`}</span>
          </div>

          <button
            className="my-2 float-right hover:bg-blue-500 font-semibold bg-blue-600 text-white px-4 py-1 rounded-md"
            onClick={()=>handlePlaceOrder(cartItems)}
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


