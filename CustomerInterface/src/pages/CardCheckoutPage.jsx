import React, { useContext } from "react";
import CheckoutPage from "../components/Checkout/CheckoutPage";
import RelatedProducts from "../components/Checkout/RelatedProducts";

import { EmptyCart } from "../components/CartIcon";

import fryingpan from "../assets/images/frying-pan.gif";

import PlaceOrder from "../components/Checkout/PlaceOrder";
import OrderSummary from "../components/Checkout/OrderSummary";

const CardCheckoutPage = () => {

  return (
    <>
      <div className="md:mx-2 mb-20 mt-3 lg:mx-6">
        <CheckoutPage /> { /*Section 1 Carts Details & place orders */}
        <RelatedProducts />  {/* Section- 2 Related Products */}
      </div>
    </>
  );
};

export default CardCheckoutPage;
