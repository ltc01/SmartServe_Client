import React, { useState } from 'react';
import { Dialog,DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CheckoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Checkout Header */}
      <header className="bg-teal-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Checkout</h1>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-3xl mx-auto">
          {/* Cart Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="divide-y divide-gray-200">
              <li className="flex justify-between py-2">Margherita Pizza <span>$10.00</span></li>
              <li className="flex justify-between py-2">French Fries <span>$5.00</span></li>
              <li className="flex justify-between py-2 font-semibold">Total <span>$15.00</span></li>
            </ul>
            <button
              onClick={openModal}
              className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700 transition"
            >
              Review Order
            </button>
          </div>
          
          {/* Table Number */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Table Information</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="table-number" className="block text-gray-700 font-medium">Table Number</label>
                <input
                  type="text"
                  id="table-number"
                  name="table-number"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your table number"
                  required
                />
              </div>
            </form>
          </div>
          
          {/* Special Instructions */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Special Instructions</h2>
            <textarea
              id="instructions"
              name="instructions"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              rows="3"
              placeholder="Any special instructions for your order?"
            ></textarea>
          </div>
          
          {/* Estimated Delivery Time */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Estimated Delivery Time</h2>
            <p className="text-gray-700">Your order will be ready in approximately 30 minutes.</p>
          </div>
          
          {/* Complete Order Button */}
          <div className="text-center">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-teal-700 transition"
            >
              Complete Order
            </button>
          </div>
        </div>
      </main>

      {/* Modal for Order Review */}
      <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white max-w-lg mx-auto p-6 rounded-lg shadow-lg relative">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold mb-4">Order Review</h2>
          <p className="mb-4">Your order is being processed. Thank you for dining with us!</p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Close
          </button>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default CheckoutPage;
