import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MainContext from "../../context/MainContext";
import axios from "axios";

const PlaceOrder = () => {
  const {
    cart,
    setTotalOfPlacedOrders,
    setLoading,
    loading,
    setCart,
    setPlacedOrders,
    isLoggedIn,
    total,
    setOrders,
    apiUrl
  } = useContext(MainContext);
  const navigate = useNavigate();

  // Functionality to place order
  const handlePlaceOrder = async (cartItems) => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem("token");
    // console.log(cartItems, cart);
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "⚠ You must be logged in to place an order.",
      });
      // alert("You must be logged in to place an order.");
      // setOpen(false);
      navigate("/sign-up");
      return; // Prevent the function from continuing
    }
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
      totalAmount: total,
      status: "pending",
      paid: false,
      quantity: cartItems.length,
    };
    // console.log(orderPayload);
    try {
      setLoading(true);
      // Check if the server is running
      // const healthCheckResponse = axios.get(
      //   "http://localhost:5000/api/orders"
      // );
      // if (healthCheckResponse.status !== 201) {
      //   throw new Error("Server is not running not getting 200.");
      // }
      const response = await axios.post(
        `${apiUrl}/api/orders/`,
        orderPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
          },
        }
      );
      // const response = { status: 201 };
      if (response.status === 201) {
        setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Orders",
            text: "Order placed successfully!",
          });
          // alert("Order placed successfully!");
          setCart([]);
          localStorage.removeItem("cartItems");
  
          // Add current order to placed orders
          const preOrders = JSON.parse(localStorage.getItem("placedOrders")) || [];
          const updatedPlacedOrders = [...preOrders, ...cartItems];
          localStorage.setItem("placedOrders",JSON.stringify(updatedPlacedOrders));
          setPlacedOrders(updatedPlacedOrders);
  
          // Retrieve the existing orders from localStorage
          const existingOrders = JSON.parse(localStorage.getItem("Orders")) || [];
          const updatedOrders = [...existingOrders, orderPayload];
          localStorage.setItem("Orders", JSON.stringify(updatedOrders));
          setOrders(updatedOrders)
          setTotalOfPlacedOrders((prevTotal) => prevTotal + orderTotal);
        
        } else {
        throw new Error(response.message, "Server is not running");

      }
    } catch (error) {
      setLoading(false);
      // console.error("Error placing order:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Error placing order: ${error}`,
      });
      // alert("Server isn't running. Please try again.");
    }
  };

  // const proceedToPlaceOrder = () => {
  //   console.log("erun")
  //   const cartItem = cart
  //   if (cartItem.length > 0) {
  //     if (isLoggedIn) {
  //       handlePlaceOrder(cartItem);
  //       // Navigate to the order status page after placing an order
  //       // navigate("/order-status");
  //     } else {
  //       // Navigate to login page or show a message to the user
  //       alert("Please log in to place your order.");
  //       navigate("/signin"); // Navigate to the login page
  //     }
  //     // console.log("Cart Items", cartItem);
  //   } else {
  //     alert("Please add items to the cart.");
  //   }
  // };

  const proceedToPlaceOrder = (e) => {
    e.preventDefault();
    handlePlaceOrder(cart);
  };
  return (
    <div className="w-[90%] min-w-40 max-w-80 mb-6 md:mb-0 md:w-1/2 lg:max-w-96">
      <div className="border shadow shadow-slate-400 rounded-lg p-4 md:p-7">
        <h2 className="text-lg text-center sm:text-xl font-semibold mb-2 sm:mb-4">
          Place Order
        </h2>
        <form onSubmit={(e) => proceedToPlaceOrder(e)}>
          <div className="mb-4">
            <label
              htmlFor="table-number"
              className="block text-gray-700 font-medium"
            >
              Table Number
            </label>
            <input
              type="number"
              id="table-number"
              name="table-number"
              className="mt-1 block w-full lg:max-w-sm p-2 sm:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter your table number..."
              required
            />
          </div>
          <button
            type="submit"
            class="flex w-full items-center text-center text-nowrap justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Proceed to Place Order
          </button>
        </form>
      </div>
      <div className="mt-2">
        <h2 className="text-sm  sm:text-base font-semibold">
          {/* Estimated Delivery Time: */}
        </h2>
        <p className="text-[.68rem] font-semibold md:pl-2 text-nowrap text-red-700 italic md:text-sm">
          Your order will be ready in approximately 30 minutes.
        </p>
      </div>
    </div>
  );
};

export default PlaceOrder;
