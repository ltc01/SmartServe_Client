import React, { useContext } from "react";
import CheckoutPage, {
  OrderSummary,
} from "../components/Checkout/CheckoutPage";
import RelatedProducts from "../components/Checkout/RelatedProducts";
import MainContext from "../context/MainContext";
import { EmptyCart } from "../components/CartIcon";
import { Link } from "react-router-dom";

const CardCheckoutPage = () => {
  const { cart, navigate } = useContext(MainContext);
  return (
    <div className="md:mx-2 mb-20 mt-3 lg:mx-6">
      {cart.length > 0 ? (
        <>
          {/* Section 1 AI Suggestions  */}
          <CheckoutPage />

          {/* section -2 Order Summary  */}
          <div className="flex flex-col items-center md:items-end justify-center mx-auto md:px-24 md:flex-row md:justify-center md:space-x-14  ">
            {/* Order Summary  */}
            <div className="text-center max-w-80  w-[80%] md:w-1/2 lg:max-w-96 rounded-lg my-6 md:mb-0">
              <OrderSummary />
            </div>

            {/* Place Order */}
            <div className="w-[80%] min-w-40 max-w-80 mb-6 md:mb-0 md:w-1/2 lg:max-w-96">
              <div className="border shadow shadow-slate-400 rounded-lg p-4 md:p-7">
                <h2 className="text-lg text-center sm:text-xl font-semibold mb-2 sm:mb-4"
                
                >
                  Place Order
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="table-number"
                      className="block text-gray-700 font-medium"
                    >
                      Table Number
                    </label>
                    <input
                      type="text"
                      id="table-number"
                      name="table-number"
                      className="mt-1 block w-full lg:max-w-sm p-2 sm:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your table number..."
                      required
                    />
                  </div>
                  <button
                    onClick={()=> navigate('/product')}
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
          </div>
        </>
      ) : (
        <>
          <div className="text-slate-500 h-[20rem] flex flex-col items-center justify-center ">
            <EmptyCart />
          <p className="text-slate-500 text-xl animate-pulse text-center">Your cart is empty!!</p>
          <div className="mt-3 flex justify-center text-center text-gray-500">
                    <Link to={'/menus'}>
                     
                      <button
                        type="button"
                        className="font-[700] text-lg text-teal-900 hover:underline"
                      >
                        {/* Explore Delicious Dishes 🥘 */} .....take me to the Menus 🍽
                        {/* <span aria-hidden="true"> &rarr;</span> */}
                      </button>
                    </Link>
                  </div>
          </div>
        </>
      )}
      {/* Section- 3 Related Products */}
      <RelatedProducts />
    </div>
  );
};

export default CardCheckoutPage;
