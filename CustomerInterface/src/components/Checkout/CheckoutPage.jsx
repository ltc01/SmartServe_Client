// // ---------------------flowbite code-----------------
import React, { useContext } from "react";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import SpecialInstructions from "./SpecialInstructions";
import MainContext from "../../context/MainContext";

// export const OrderSummary = () => {
//   const {cart} = useContext(MainContext)
// // Define additional charges dynamically
// const savings = 0.1 * subtotal; // Example: 10% discount on subtotal
// const serviceCharge = 0.05 * subtotal; // Example: 5% service charge
// const taxRate = 0.08; // Example: 8% tax rate
// const tax = (subtotal - savings + serviceCharge) * taxRate; // Tax calculation based on discounted subtotal

// // Calculate the total
// const total = subtotal - savings + serviceCharge + tax + deliveryCharge;

//   const subtotal = cart.reduce((sum, item) => {
//     const priceNumber = parseFloat(
//       item.price.toString().replace(/[^0-9.-]+/g, "")
//     );
//     return sum + priceNumber * item.quantity;
//   }, 0);
//   return (
//     <div class="mx-auto  max-w-4xl flex-1 space-y-6 lg:w-full">
//       <div class="space-y-4 rounded-lg  border border-gray-200 bg-white p-4 shadow-sm shadow-slate-400 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//         <p class="text-xl font-semibold text-gray-900 dark:text-white">
//           Order summary
//         </p>

//         <div class="space-y-4">
//           <div class="space-y-2">
//             <dl class="flex items-center justify-between gap-4">
//               <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                 Original price
//               </dt>
//               <dd class="text-base font-medium text-gray-900 dark:text-white">
//                 ₹{total}
//               </dd>
//             </dl>

//             <dl class="flex items-center justify-between gap-4">
//               <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                 Savings
//               </dt>
//               <dd class="text-base font-medium text-green-600">-₹299.00</dd>
//             </dl>

//             <dl class="flex items-center justify-between gap-4">
//               <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                 Store Pickup
//               </dt>
//               <dd class="text-base font-medium text-gray-900 dark:text-white">
//                 ₹99
//               </dd>
//             </dl>

//             <dl class="flex items-center justify-between gap-4">
//               <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
//                 Tax
//               </dt>
//               <dd class="text-base font-medium text-gray-900 dark:text-white">
//                 ₹799
//               </dd>
//             </dl>
//           </div>

//           <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
//             <dt class="text-base font-bold text-gray-900 dark:text-white">
//               Total
//             </dt>
//             <dd class="text-base font-bold text-gray-900 dark:text-white">
//               ₹8,191.00
//             </dd>
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// };


export const OrderSummary = () => {
  const { cart} = useContext(MainContext);

  // Calculate the subtotal by summing up the price and quantity of each item
  const subtotal = cart.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.toString().replace(/[^0-9.-]+/g, ""));
    return sum + priceNumber * item.quantity;
  }, 0);

  // Define additional charges dynamically
  const savings = 0.1 * subtotal; // Example: 10% discount on subtotal
  const serviceCharge = 0.05 * subtotal; // Example: 5% service charge
  const taxRate = 0.08; // Example: 8% tax rate
  const tax = (subtotal - savings + serviceCharge) * taxRate; // Tax calculation based on discounted subtotal

  // Calculate the total
  const total = subtotal - savings + serviceCharge + tax;

  return (
    <div className="mx-auto max-w-4xl flex-1 space-y-6 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm shadow-slate-400 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          Order Summary 
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Subtotal
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                ₹{subtotal.toFixed(2)}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Savings 10%
              </dt>
              <dd className="text-base font-medium text-green-600">-₹{savings.toFixed(2)}</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Service Charge 5%
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                ₹{serviceCharge.toFixed(2)}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Tax 8%
              </dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">
                ₹{tax.toFixed(2)}
              </dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">
              Total
            </dt>
            <dd className="text-base font-bold text-gray-900 dark:text-white">
              ₹{total.toFixed(2)}
            </dd>
          </dl>
        </div>
      </div>
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
          <div class="w-full h-[25rem] overflow-y-scroll md:w-2/3">
          {/* <h2 className="text-base md:text-xl font-semibold relative bottom-3">Cart Items</h2> */}
            <div class="space-y-6">
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
