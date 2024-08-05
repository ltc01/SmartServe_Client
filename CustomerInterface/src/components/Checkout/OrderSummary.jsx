import React, { useContext } from "react";
import MainContext from "../../context/MainContext";

const OrderSummary = () => {
  const { subtotal, savings, serviceCharge, tax, total } =
    useContext(MainContext);

  // // Calculate the subtotal by summing up the price and quantity of each item
  // const subtotal = cart.reduce((sum, item) => {
  //   const priceNumber = parseFloat(item.price.toString().replace(/[^0-9.-]+/g, ""));
  //   return sum + priceNumber * item.quantity;
  // }, 0);

  // // Define additional charges dynamically
  // const savings = 0.1 * subtotal; // Example: 10% discount on subtotal
  // const serviceCharge = 0.05 * subtotal; // Example: 5% service charge
  // const taxRate = 0.08; // Example: 8% tax rate
  // const tax = (subtotal - savings + serviceCharge) * taxRate; // Tax calculation based on discounted subtotal

  // // Calculate the total
  // const total = subtotal - savings + serviceCharge + tax;

  return (
    <div className="mx-auto text-center text-nowrap max-w-4xl flex-1 space-y-6 lg:w-full">
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
              <dd className="text-base font-medium text-green-600">
                -₹{savings.toFixed(2)}
              </dd>
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

export default OrderSummary;
