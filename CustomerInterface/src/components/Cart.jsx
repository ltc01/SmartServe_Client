// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
// import { IoTrashBin } from "react-icons/io5";
// import MainContext from "../context/MainContext";
// import OrderStatus from "./OrderStatus";
// import StarIcon from "./StarIcon";
// import Swal from 'sweetalert2'

// const Cart = ({
//   cardRef,
//   removeFromCart,
//   placedOrders,
//   handlePlaceOrder,
//   isLoggedIn,
//   totalOfPlacedOrders,
// }) => {
//   const {setCart, openCart, setOpencart, navigate} = useContext(MainContext)

//   let cartItems = (JSON.parse(localStorage.getItem("cartItems")) || [])
//   const proceedToPlaceOrder = () => {
//   //   // if (cartItem.length > 0) {
//   //     // if (isLoggedIn) {
//   //     //   console.log("Usr is logged in")
//         // handlePlaceOrder(cartItems);
//   //       // Navigate to the order status page after placing an order
//   //       // navigate("/order-status");
//   //     // } else {
//   //     //   // Navigate to login page or show a message to the user
//   //     //   alert("Please log in to place your order.");
//   //     //   navigate("/signin"); // Navigate to the login page
//   //     // }
//   //     // console.log("Cart Items", cartItem);
//   //   // } else {
//   //   //   alert("Please add items to the cart.");
//   //   // }
//   };
// // console.log("placed",placedOrders)
//   const updateQuantity = (index, quantity) => {
//     const updatedCart = cartItems.map((item, i) =>
//       i === index ? { ...item, quantity: Math.max(1, quantity) } : item
//     );
//     setCart(updatedCart); // You need to manage cart state at a higher level or pass a setCart function
//     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//   };
// // console.log(cartItems)
//   const total = cartItems.reduce((sum, item) => {
//     const priceNumber = parseFloat(
//       item.price.toString().replace(/[^0-9.-]+/g, "")
//     );
//     return sum + priceNumber * item.quantity;
//   }, 0);

//   return (
//     <div ref={cardRef}
//       className="container absolute right-3 top-11 w-[90%] md:w-[35%] text-white backdrop-blur-lg bg-black/70 md:top-8 md:right-44 mx-auto py-2 md:py-4 rounded-lg shadow-lg px-3 md:px-6">
//       <h2 className="md:text-lg mb-1 font-bold md:px-2 md:mb-2">Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty!!</p>
//       ) : (
//         <div className="mx-auto overflow-y-scroll no-scrollbar max-h-[78vh]">
//           <ul className="space-y-2">

//             {cartItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex relative bg-white justify-start md:border p-1 pr-2 md:p-4 rounded shadow-md"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
//                 />
//                 <IoTrashBin
//                   className="absolute bottom-3 right-2 md:top-3 md:right-4 text-sm md:text-lg cursor-pointer text-slate-400 hover:text-emerald-600"
//                   onClick={() => removeFromCart(index)}
//                 />
//                 <div className=" flex pl-1 md:pl-3 flex-col text-sm">
//                   <h2 className="text-sm md:text-base text-black font-medium">
//                     {item.name}
//                   </h2>
//                   <span className="flex mt-1 md:mt-2 text-xs md:text-sm">
//                     {[...Array(5)].map((_, index) => (
//                       <StarIcon
//                         key={index}
//                         color={
//                           index < Math.floor(item.rating)
//                             ? "text-orange-500"
//                             : "text-slate-300/70"
//                         }
//                       />
//                     ))}
//                   </span>

//                   <p className="pl-1 md:pl-0 text-slate-500 text-xs md:text-sm mt-1 md:mt-4 font-semibold">
//                     <span className="">
//                       Qty:
//                       <button
//                         onClick={() => updateQuantity(index, item.quantity - 1)}
//                         className="md:mx-2 mx-1 px-1 border"
//                       >
//                         -
//                       </button>
//                       {item.quantity}
//                       <button
//                         onClick={() => updateQuantity(index, item.quantity + 1)}
//                         className="md:mx-2 mx-1 px-1 border"
//                       >
//                         +
//                       </button>
//                     </span>
//                     <span className="block mt-1 md:mt-0 md:absolute md:bottom- md:right-[5%] text-rose-700 font-bold text-sm md:text-lg">
//                       {/* <span className="font-medium text-sm md:text-base">{item.quantity} x</span>  */}
//                       ₹{item.price}/-</span>
//                   </p>
//                 </div>
//               </li>
//             ))}

//           </ul>

//           <div className="mt-3 flex justify-between px-6 text-lg items-center">
//             <h3 className="font-bold">Total:</h3>
//             <span className="font-bold">{`₹${total}/-`}</span>
//           </div>

//           <button
//             className="my-2 float-right hover:bg-blue-500 font-semibold bg-blue-600 text-white px-4 py-1 rounded-md"
//             onClick={()=>handlePlaceOrder(cartItems)}
//           >
//             Place Order
//           </button>

//         </div>
//       )}

//       {/* Placed Orders Section */}
//       {placedOrders.length > 0 && (
//         <div className="mt-10 overflow-y-scroll h-[70vh]">
//           <h2 className="text-2xl font-bold mb-4">Placed Orders</h2>
//           <ul className="space-y-4">
//             {placedOrders.map((order, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between bg-green-700/20 p-4 rounded-lg shadow-sm"
//               >
//                 <div className="flex items-center">
//                   <img
//                     src={order.imageSrc}
//                     alt={order.imageAlt}
//                     className="h-16 w-16 object-cover rounded mr-4"
//                   />
//                   <div>
//                     <h5 className="font-semibold text-lg">{order.name}</h5>
//                     <span className="text-md text-gray-600">
//                       ₹{order.price} x {order.quantity}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="flex items-center space-x-1 rtl:space-x-reverse">
//                     {[...Array(5)].map((_, index) => (
//                       <StarIcon
//                         key={index}
//                         color={
//                           index < Math.floor(order.rating)
//                             ? "text-yellow-500"
//                             : "text-white"
//                         }
//                       />
//                     ))}
//                   </div>
//                   <span className="ml-3">{order.rating}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-5 flex justify-between items-center">
//             <h3 className="text-xl font-semibold">Total for Placed Orders:</h3>
//             <span className="text-xl font-semibold">{`₹${totalOfPlacedOrders.toFixed(
//               2
//             )}`}</span>
//           </div>
//           {/* <button
//             className="mt-5 w-full bg-red-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg"
//             onClick={handleProceedToPayment}
//           >
//             Proceed to Payment
//           </button> */}
//           <OrderStatus />
//         </div>
//       )}

//     </div>
//   );
// };

// export default Cart;

// ----------------------------------------------------TAILWIND COMPONENT------------

import { useContext, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MainContext from "../context/MainContext";
import { EmptyCart, Grocery } from "./CartIcon";
import { Link } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: '$32.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   // More products...
// ]

export default function Cart({removeFromCart}) {
  // const [open, setOpen] = useState(true)
  // {console.log(setOpen)}
  const { open, setOpen, setCart } = useContext(MainContext);
  const products = JSON.parse(localStorage.getItem("cartItems")) || [];

  const updateQuantity = (index, quantity) => {
    const updatedCart = products.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart); // You need to manage cart state at a higher level or pass a setCart function
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  const total = products.reduce((sum, item) => {
    const priceNumber = parseFloat(
      item.price.toString().replace(/[^0-9.-]+/g, "")
    );
    return sum + priceNumber * item.quantity;
  }, 0);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-1">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Cart details
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-600"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className={`-my-6 ${products.length > 0 && 'divide-y'} divide-gray-200`}
                      >
                        {products.length === 0 ? (
                          <>
                          <p className="text-slate-500" >Your cart is empty!!</p>
                          <li className="text-slate-500 h-[20rem] flex items-center justify-center ">
                          <EmptyCart />
                          </li>
                          </>
                        ) : (
                          <>
                            {products.map((product, index) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className="ml-4">{product.price}/-</p>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-400 pr-7">
                                      {product.desc} 
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    {/* <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p> */}
                                    <p className="text-slate-500">
                                      <span className="">
                                        Qty:
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              index,
                                              product.quantity - 1
                                            )
                                          }
                                          className="mx-1 px-1 border"
                                        >
                                          -
                                        </button>
                                        {product.quantity}
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              index,
                                              product.quantity + 1
                                            )
                                          }
                                          className=" mx-1 px-1 border"
                                        >
                                          +
                                        </button>
                                      </span>
                                      {/* <span className="block mt-1 md:mt-0 md:absolute md:bottom- md:right-[5%] text-rose-700 font-bold text-sm md:text-lg">
                                        ₹{product.price}/-
                                      </span> */}
                                    </p>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-teal-600 hover:text-teal-500"
                                        onClick={()=>removeFromCart(index)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                { total > 0 && <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p className="text-red-700">₹{total}.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                  Taxes and additional charges may apply at checkout.</p>
                  <div className="mt-4 md:mt-6">
                    <a
                      href="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-2 md:py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-3 flex justify-center text-center text-sm text-gray-500">
                    <Link to={'/menus'}>
                      or{" "}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-teal-600 hover:underline"
                      >
                        Browse More Dishes🥘
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </Link>
                  </div>
                </div>}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
