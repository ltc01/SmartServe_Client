// import React, { useState } from 'react';
// import { Dialog } from '@headlessui/react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import {SpecialInstructions} from './SpecialInstructions';

// const CheckoutPage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       {/* Checkout Header */}
//       <header className="bg-teal-600 text-white p-4 sm:p-6 shadow-md flex justify-center">
//         <h1 className="text-2xl sm:text-3xl font-bold">Checkout</h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-4 sm:p-6">
//         <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-2">
//           {/* Order Summary */}
//           <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
//             <h2 className="text-lg sm:text-xl font-semibold mb-4">Order Summary</h2>
//             <ul className="divide-y divide-gray-200 mb-4 sm:mb-6">
//               <li className="flex justify-between py-2 text-sm sm:text-base">
//                 <span>Margherita Pizza</span> <span>$10.00</span>
//               </li>
//               <li className="flex justify-between py-2 text-sm sm:text-base">
//                 <span>French Fries</span> <span>$5.00</span>
//               </li>
//               <li className="flex justify-between py-2 font-semibold text-sm sm:text-base">
//                 <span>Total</span> <span>$15.00</span>
//               </li>
//             </ul>
//             <button
//               onClick={openModal}
//               className="w-full px-4 py-2 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700 transition"
//             >
//               Review Order
//             </button>
//           </div>
//           {/* Special Instructions */}
//           <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
//             <h2 className="text-lg sm:text-xl font-semibold mb-4">Special Instructions</h2>
//             <SpecialInstructions />
//           </div>

//         </div>

//         {/* Additional Sections */}
//         <div className="max-w-4xl mx-auto mt-4 sm:mt-6 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
//           {/* Table Number */}
//           <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
//             <h2 className="text-lg sm:text-xl font-semibold mb-4">Table Information</h2>
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="table-number" className="block text-gray-700 font-medium">Table Number</label>
//                 <input
//                   type="text"
//                   id="table-number"
//                   name="table-number"
//                   className="mt-1 block w-full p-2 sm:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Enter your table number"
//                   required
//                 />
//               </div>
//             </form>
//           </div>

//           {/* Estimated Delivery Time */}
//           <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
//             <h2 className="text-lg sm:text-xl font-semibold mb-4">Estimated Delivery Time</h2>
//             <p className="text-gray-700 text-sm sm:text-base">Your order will be ready in approximately 30 minutes.</p>
//           </div>
//         </div>

//         {/* Complete Order Button */}
//         <div className="max-w-4xl mx-auto mt-4 sm:mt-6 text-center">
//           <button
//             onClick={openModal}
//             className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-teal-700 transition"
//           >
//             Complete Order
//           </button>
//         </div>
//       </main>

//       {/* Modal for Order Review */}
//       <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 flex items-center justify-center p-4">
//         <Dialog.Panel className="bg-white max-w-lg mx-auto p-6 rounded-lg shadow-lg relative">
//           <button
//             onClick={closeModal}
//             className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//           >
//             <XMarkIcon className="w-6 h-6" />
//           </button>
//           <h2 className="text-lg sm:text-xl font-semibold mb-4">Order Review</h2>
//           <p className="mb-4 text-sm sm:text-base">Your order is being processed. Thank you for dining with us!</p>
//           <button
//             onClick={closeModal}
//             className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
//           >
//             Close
//           </button>
//         </Dialog.Panel>
//       </Dialog>
//     </div>
//   );
// };

// export default CheckoutPage;

// // ---------------------flowbite code-----------------
import React from "react";
// import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import SpecialInstructions from "./SpecialInstructions";

export const OrderSummary = () => {
  return (
    <div class="mx-auto  max-w-4xl flex-1 space-y-6 lg:w-full">
      <div class="space-y-4 rounded-lg  border border-gray-200 bg-white p-4 shadow-sm shadow-slate-400 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p class="text-xl font-semibold text-gray-900 dark:text-white">
          Order summary
        </p>

        <div class="space-y-4">
          <div class="space-y-2">
            <dl class="flex items-center justify-between gap-4">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                Original price
              </dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">
                $7,592.00
              </dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                Savings
              </dt>
              <dd class="text-base font-medium text-green-600">-$299.00</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                Store Pickup
              </dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">
                $99
              </dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax
              </dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">
                $799
              </dd>
            </dl>
          </div>

          <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt class="text-base font-bold text-gray-900 dark:text-white">
              Total
            </dt>
            <dd class="text-base font-bold text-gray-900 dark:text-white">
              $8,191.00
            </dd>
          </dl>
        </div>

        {/* <a
          href="#"
          class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Proceed to Checkout
        </a> */}

        {/* <div class="flex items-center justify-center gap-2">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            {" "}
            or{" "}
          </span>
          <a
            href="#"
            title=""
            class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
          >
            Continue Shopping
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </a>
        </div> */}
      </div>
      {/* <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <form class="space-y-4">
          <div>
            <label
              for="voucher"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Do you have a voucher or gift card?{" "}
            </label>
            <input
              type="text"
              id="voucher"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Apply Code
          </button>
        </form>
      </div> */}
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <section class="bg-white py-4 antialiased dark:bg-gray-900 md:py-6">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Cart details
        </h2>

        <div class="md:mt-8 md:flex md:space-x-8 mx-auto">
          <div class="w-full mb-6 md:mt-0 md:w-1/3 ">
            {/* Special Instructions */}
            <div class="space-y-6">
              <SpecialInstructions />
              {/* <OrderSummary /> */}
            </div>
          </div>
          {/* Cart items----------- */}
          <div class="w-full md:w-2/3">
          <h2 className="text-base md:text-xl font-semibold relative bottom-3">Cart Items</h2>
            <div class="space-y-6">
              <ProductDetails />
              <ProductDetails />
            </div>
          </div>
        </div>

        {/* <RelatedProducts /> */}
      </div>
    </section>
  );
};

export default CheckoutPage;

// {/* <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
//   <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
//     <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
//       Shopping Cart
//     </h2>

//     <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
//       <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
//         {/* products listing */}
//         <div class="space-y-6">
//           {/* products listing */}
//           <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
//             <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//               <a href="#" class="shrink-0 md:order-1">
//                 <img
//                   class="h-20 w-20 dark:hidden"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
//                   alt="imac image"
//                 />
//                 <img
//                   class="hidden h-20 w-20 dark:block"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
//                   alt="imac image"
//                 />
//               </a>

//               <label for="counter-input" class="sr-only">
//                 Choose quantity:
//               </label>
//               <div class="flex items-center justify-between md:order-3 md:justify-end">
//                 <div class="flex items-center">
//                   <button
//                     type="button"
//                     id="decrement-button"
//                     data-input-counter-decrement="counter-input"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 2"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M1 1h16"
//                       />
//                     </svg>
//                   </button>
//                   <input
//                     type="text"
//                     id="counter-input"
//                     data-input-counter
//                     class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
//                     placeholder=""
//                     value="2"
//                     required
//                   />
//                   <button
//                     type="button"
//                     id="increment-button"
//                     data-input-counter-increment="counter-input"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 18"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M9 1v16M1 9h16"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <div class="text-end md:order-4 md:w-32">
//                   <p class="text-base font-bold text-gray-900 dark:text-white">
//                     $1,499
//                   </p>
//                 </div>
//               </div>

//               <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                 <a
//                   href="#"
//                   class="text-base font-medium text-gray-900 hover:underline dark:text-white"
//                 >
//                   PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3,
//                   24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout
//                   INT
//                 </a>

//                 <div class="flex items-center gap-4">
//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
//                       />
//                     </svg>
//                     Add to Favorites
//                   </button>

//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M6 18 17.94 6M18 18 6.06 6"
//                       />
//                     </svg>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
//             <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//               <a href="#" class="shrink-0 md:order-1">
//                 <img
//                   class="h-20 w-20 dark:hidden"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
//                   alt="imac image"
//                 />
//                 <img
//                   class="hidden h-20 w-20 dark:block"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
//                   alt="imac image"
//                 />
//               </a>

//               <label for="counter-input" class="sr-only">
//                 Choose quantity:
//               </label>
//               <div class="flex items-center justify-between md:order-3 md:justify-end">
//                 <div class="flex items-center">
//                   <button
//                     type="button"
//                     id="decrement-button-2"
//                     data-input-counter-decrement="counter-input-2"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 2"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M1 1h16"
//                       />
//                     </svg>
//                   </button>
//                   <input
//                     type="text"
//                     id="counter-input-2"
//                     data-input-counter
//                     class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
//                     placeholder=""
//                     value="1"
//                     required
//                   />
//                   <button
//                     type="button"
//                     id="increment-button-2"
//                     data-input-counter-increment="counter-input-2"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 18"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M9 1v16M1 9h16"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <div class="text-end md:order-4 md:w-32">
//                   <p class="text-base font-bold text-gray-900 dark:text-white">
//                     $598
//                   </p>
//                 </div>
//               </div>

//               <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                 <a
//                   href="#"
//                   class="text-base font-medium text-gray-900 hover:underline dark:text-white"
//                 >
//                   Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum
//                   Case with Midnight Sport Band
//                 </a>

//                 <div class="flex items-center gap-4">
//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
//                       />
//                     </svg>
//                     Add to Favorites
//                   </button>

//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M6 18 17.94 6M18 18 6.06 6"
//                       />
//                     </svg>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
//             <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//               <a href="#" class="shrink-0 md:order-1">
//                 <img
//                   class="h-20 w-20 dark:hidden"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
//                   alt="imac image"
//                 />
//                 <img
//                   class="hidden h-20 w-20 dark:block"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
//                   alt="imac image"
//                 />
//               </a>

//               <label for="counter-input" class="sr-only">
//                 Choose quantity:
//               </label>
//               <div class="flex items-center justify-between md:order-3 md:justify-end">
//                 <div class="flex items-center">
//                   <button
//                     type="button"
//                     id="decrement-button-3"
//                     data-input-counter-decrement="counter-input-3"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 2"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M1 1h16"
//                       />
//                     </svg>
//                   </button>
//                   <input
//                     type="text"
//                     id="counter-input-3"
//                     data-input-counter
//                     class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
//                     placeholder=""
//                     value="1"
//                     required
//                   />
//                   <button
//                     type="button"
//                     id="increment-button-3"
//                     data-input-counter-increment="counter-input-3"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 18"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M9 1v16M1 9h16"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <div class="text-end md:order-4 md:w-32">
//                   <p class="text-base font-bold text-gray-900 dark:text-white">
//                     $1,799
//                   </p>
//                 </div>
//               </div>

//               <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                 <a
//                   href="#"
//                   class="text-base font-medium text-gray-900 hover:underline dark:text-white"
//                 >
//                   Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory,
//                   18-core GPU, 512GB SSD, Space Black
//                 </a>

//                 <div class="flex items-center gap-4">
//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
//                       />
//                     </svg>
//                     Add to Favorites
//                   </button>

//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M6 18 17.94 6M18 18 6.06 6"
//                       />
//                     </svg>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
//             <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//               <a href="#" class="shrink-0 md:order-1">
//                 <img
//                   class="h-20 w-20 dark:hidden"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
//                   alt="imac image"
//                 />
//                 <img
//                   class="hidden h-20 w-20 dark:block"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
//                   alt="imac image"
//                 />
//               </a>

//               <label for="counter-input" class="sr-only">
//                 Choose quantity:
//               </label>
//               <div class="flex items-center justify-between md:order-3 md:justify-end">
//                 <div class="flex items-center">
//                   <button
//                     type="button"
//                     id="decrement-button-4"
//                     data-input-counter-decrement="counter-input-4"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 2"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M1 1h16"
//                       />
//                     </svg>
//                   </button>
//                   <input
//                     type="text"
//                     id="counter-input-4"
//                     data-input-counter
//                     class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
//                     placeholder=""
//                     value="1"
//                     required
//                   />
//                   <button
//                     type="button"
//                     id="increment-button-4"
//                     data-input-counter-increment="counter-input-4"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 18"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M9 1v16M1 9h16"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <div class="text-end md:order-4 md:w-32">
//                   <p class="text-base font-bold text-gray-900 dark:text-white">
//                     $699
//                   </p>
//                 </div>
//               </div>

//               <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                 <a
//                   href="#"
//                   class="text-base font-medium text-gray-900 hover:underline dark:text-white"
//                 >
//                   Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold
//                 </a>

//                 <div class="flex items-center gap-4">
//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
//                       />
//                     </svg>
//                     Add to Favorites
//                   </button>

//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M6 18 17.94 6M18 18 6.06 6"
//                       />
//                     </svg>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
//             <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//               <a href="#" class="w-20 shrink-0 md:order-1">
//                 <img
//                   class="h-20 w-20 dark:hidden"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
//                   alt="imac image"
//                 />
//                 <img
//                   class="hidden h-20 w-20 dark:block"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
//                   alt="imac image"
//                 />
//               </a>

//               <label for="counter-input" class="sr-only">
//                 Choose quantity:
//               </label>
//               <div class="flex items-center justify-between md:order-3 md:justify-end">
//                 <div class="flex items-center">
//                   <button
//                     type="button"
//                     id="decrement-button-5"
//                     data-input-counter-decrement="counter-input-5"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 2"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M1 1h16"
//                       />
//                     </svg>
//                   </button>
//                   <input
//                     type="text"
//                     id="counter-input-5"
//                     data-input-counter
//                     class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
//                     placeholder=""
//                     value="3"
//                     required
//                   />
//                   <button
//                     type="button"
//                     id="increment-button-5"
//                     data-input-counter-increment="counter-input-5"
//                     class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//                   >
//                     <svg
//                       class="h-2.5 w-2.5 text-gray-900 dark:text-white"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 18 18"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M9 1v16M1 9h16"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <div class="text-end md:order-4 md:w-32">
//                   <p class="text-base font-bold text-gray-900 dark:text-white">
//                     $2,997
//                   </p>
//                 </div>
//               </div>

//               <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
//                 <a
//                   href="#"
//                   class="text-base font-medium text-gray-900 hover:underline dark:text-white"
//                 >
//                   APPLE iPhone 15 5G phone, 256GB, Gold
//                 </a>

//                 <div class="flex items-center gap-4">
//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
//                       />
//                     </svg>
//                     Add to Favorites
//                   </button>

//                   <button
//                     type="button"
//                     class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
//                   >
//                     <svg
//                       class="me-1.5 h-5 w-5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M6 18 17.94 6M18 18 6.06 6"
//                       />
//                     </svg>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* related pro */}
//         <div class="hidden xl:mt-8 xl:block">
//           <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
//             People also bought
//           </h3>
//           <div class="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
//             <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
//               <a href="#" class="overflow-hidden rounded">
//                 <img
//                   class="mx-auto h-44 w-44 dark:hidden"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
//                   alt="imac image"
//                 />
//                 <img
//                   class="mx-auto hidden h-44 w-44 dark:block"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
//                   alt="imac image"
//                 />
//               </a>
//               <div>
//                 <a
//                   href="#"
//                   class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
//                 >
//                   iMac 27”
//                 </a>
//                 <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
//                   This generation has some improvements, including a longer
//                   continuous battery life.
//                 </p>
//               </div>
//               <div>
//                 <p class="text-lg font-bold text-gray-900 dark:text-white">
//                   <span class="line-through"> $399,99 </span>
//                 </p>
//                 <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
//                   $299
//                 </p>
//               </div>
//               <div class="mt-6 flex items-center gap-2.5">
//                 <button
//                   data-tooltip-target="favourites-tooltip-1"
//                   type="button"
//                   class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
//                 >
//                   <svg
//                     class="h-5 w-5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div
//                   id="favourites-tooltip-1"
//                   role="tooltip"
//                   class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
//                 >
//                   Add to favourites
//                   <div class="tooltip-arrow" data-popper-arrow></div>
//                 </div>
//                 <button
//                   type="button"
//                   class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   <svg
//                     class="-ms-2 me-2 h-5 w-5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
//                     />
//                   </svg>
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//             <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
//               <a href="#" class="overflow-hidden rounded">
//                 <img
//                   class="mx-auto h-44 w-44 dark:hidden"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
//                   alt="imac image"
//                 />
//                 <img
//                   class="mx-auto hidden h-44 w-44 dark:block"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
//                   alt="imac image"
//                 />
//               </a>
//               <div>
//                 <a
//                   href="#"
//                   class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
//                 >
//                   Playstation 5
//                 </a>
//                 <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
//                   This generation has some improvements, including a longer
//                   continuous battery life.
//                 </p>
//               </div>
//               <div>
//                 <p class="text-lg font-bold text-gray-900 dark:text-white">
//                   <span class="line-through"> $799,99 </span>
//                 </p>
//                 <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
//                   $499
//                 </p>
//               </div>
//               <div class="mt-6 flex items-center gap-2.5">
//                 <button
//                   data-tooltip-target="favourites-tooltip-2"
//                   type="button"
//                   class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
//                 >
//                   <svg
//                     class="h-5 w-5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div
//                   id="favourites-tooltip-2"
//                   role="tooltip"
//                   class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
//                 >
//                   Add to favourites
//                   <div class="tooltip-arrow" data-popper-arrow></div>
//                 </div>
//                 <button
//                   type="button"
//                   class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   <svg
//                     class="-ms-2 me-2 h-5 w-5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
//                     />
//                   </svg>
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//             <div class="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
//               <a href="#" class="overflow-hidden rounded">
//                 <img
//                   class="mx-auto h-44 w-44 dark:hidden"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
//                   alt="imac image"
//                 />
//                 <img
//                   class="mx-auto hidden h-44 w-44 dark:block"
//                   src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
//                   alt="imac image"
//                 />
//               </a>
//               <div>
//                 <a
//                   href="#"
//                   class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
//                 >
//                   Apple Watch Series 8
//                 </a>
//                 <p class="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
//                   This generation has some improvements, including a longer
//                   continuous battery life.
//                 </p>
//               </div>
//               <div>
//                 <p class="text-lg font-bold text-gray-900 dark:text-white">
//                   <span class="line-through"> $1799,99 </span>
//                 </p>
//                 <p class="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
//                   $1199
//                 </p>
//               </div>
//               <div class="mt-6 flex items-center gap-2.5">
//                 <button
//                   data-tooltip-target="favourites-tooltip-3"
//                   type="button"
//                   class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
//                 >
//                   <svg
//                     class="h-5 w-5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div
//                   id="favourites-tooltip-3"
//                   role="tooltip"
//                   class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
//                 >
//                   Add to favourites
//                   <div class="tooltip-arrow" data-popper-arrow></div>
//                 </div>

//                 <button
//                   type="button"
//                   class="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   <svg
//                     class="-ms-2 me-2 h-5 w-5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
//                     />
//                   </svg>
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* order summary */}
//       <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
//         <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//           <p class="text-xl font-semibold text-gray-900 dark:text-white">
//             Order summary
//           </p>

//           <div class="space-y-4">
//             <div class="space-y-2">
//               <dl class="flex items-center justify-between gap-4">
//                 <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Original price
//                 </dt>
//                 <dd class="text-base font-medium text-gray-900 dark:text-white">
//                   $7,592.00
//                 </dd>
//               </dl>

//               <dl class="flex items-center justify-between gap-4">
//                 <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Savings
//                 </dt>
//                 <dd class="text-base font-medium text-green-600">-$299.00</dd>
//               </dl>

//               <dl class="flex items-center justify-between gap-4">
//                 <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Store Pickup
//                 </dt>
//                 <dd class="text-base font-medium text-gray-900 dark:text-white">
//                   $99
//                 </dd>
//               </dl>

//               <dl class="flex items-center justify-between gap-4">
//                 <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Tax
//                 </dt>
//                 <dd class="text-base font-medium text-gray-900 dark:text-white">
//                   $799
//                 </dd>
//               </dl>
//             </div>

//             <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
//               <dt class="text-base font-bold text-gray-900 dark:text-white">
//                 Total
//               </dt>
//               <dd class="text-base font-bold text-gray-900 dark:text-white">
//                 $8,191.00
//               </dd>
//             </dl>
//           </div>

//           <a
//             href="#"
//             class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//           >
//             Proceed to Checkout
//           </a>

//           <div class="flex items-center justify-center gap-2">
//             <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
//               {" "}
//               or{" "}
//             </span>
//             <a
//               href="#"
//               title=""
//               class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
//             >
//               Continue Shopping
//               <svg
//                 class="h-5 w-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M19 12H5m14 0-4 4m4-4-4-4"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>

//         <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//           <form class="space-y-4">
//             <div>
//               <label
//                 for="voucher"
//                 class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 {" "}
//                 Do you have a voucher or gift card?{" "}
//               </label>
//               <input
//                 type="text"
//                 id="voucher"
//                 class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                 placeholder=""
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//             >
//               Apply Code
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>; */}

// ---------line no 564-----------
// <dl class="flex items-center justify-between gap-4">
//                   <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                     Savings
//                   </dt>
//                   <dd class="text-base font-medium text-green-600">
//                     -$299.00
//                   </dd>
//                 </dl>

//                 <dl class="flex items-center justify-between gap-4">
//                   <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                     Store Pickup
//                   </dt>
//                   <dd class="text-base font-medium text-gray-900 dark:text-white">
//                     $99
//                   </dd>
//                 </dl>

//                 <dl class="flex items-center justify-between gap-4">
//                   <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                     Tax
//                   </dt>
//                   <dd class="text-base font-medium text-gray-900 dark:text-white">
//                     $799
//                   </dd>
//                 </dl>

// --------------Line no 577-----
// {/* <a
//                 href="#"
//                 class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 Proceed to Checkout
//               </a> */}

//               {/* <div class="flex items-center justify-center gap-2">
//                 <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
//                   {" "}
//                   or{" "}
//                 </span>
//                 <a
//                   href="#"
//                   title=""
//                   class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
//                 >
//                   Continue Shopping
//                   <svg
//                     class="h-5 w-5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M19 12H5m14 0-4 4m4-4-4-4"
//                     />
//                   </svg>
//                 </a>
//               </div> */}

// // ------Line no 580-
// {/* <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//               <form class="space-y-4">
//                 <div>
//                   <label
//                     for="voucher"
//                     class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     {" "}
//                     Do you have a voucher or gift card?{" "}
//                   </label>
//                   <input
//                     type="text"
//                     id="voucher"
//                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
//                     placeholder=""
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Apply Code
//                 </button>
//               </form>
//             </div> */}
