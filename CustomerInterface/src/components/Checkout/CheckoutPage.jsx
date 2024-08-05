import React from "react";
import ProductDetails from "./ProductDetails";
import SpecialInstructions from "./SpecialInstructions";
import OrderSummary from "./OrderSummary";
import PlaceOrder from "./PlaceOrder";

const CheckoutPage = () => {
  return (
    <section class="bg-white pt-4 antialiased dark:bg-gray-900 md:py-6">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Cart details
        </h2>

        {/*Section 1 AI Suggestions & Cart Items */}
        <div class="mt-4 md:mt-8 md:flex-row-reverse flex flex-col-reverse md:gap-4 mx-auto">
          {/* AI Instructions */}
          <div class="w-full mb-6 md:mt-0 md:w-1/3 ">
            <div class="space-y-6">
              <SpecialInstructions />
            </div>
          </div>

          {/* Cart items----------- */}
          <div class="w-full max-h-[25rem] overflow-y-scroll md:w-2/3">
            {/* <h2 className="text-base md:text-xl font-semibold relative bottom-3">Cart Items</h2> */}
            <div class="space-y-6 p-1">
              <ProductDetails />
            </div>
          </div>
        </div>

        {/* section -2 Order Summary & place Order  */}
        <div className="flex flex-col items-center md:items-end justify-center mx-auto md:px-24 md:flex-row md:justify-center md:space-x-14  ">
          {/* Order Summary  */}
          <div className=" max-w-80  w-[90%] md:w-1/2 lg:max-w-96 rounded-lg mb-6 md:mt-10 md:mb-0">
            <OrderSummary />
          </div>

          {/* Place Order */}
          <PlaceOrder />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
