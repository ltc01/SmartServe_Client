import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import StarIcon from "../StarIcon";

const RelatedProducts = () => {
  const { menuItems, cart } = useContext(MainContext);

  return (
    <div className="md:mt-8 mx-6 mt-4 block">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        You might also Like
      </h3>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* {Array(4)
          .fill()
          .map((_, index) => (
            <ProductCard key={index} />
          ))} */}
        {menuItems
          .filter(
            (menuItem) =>
              !cart.some((cartItem) => cartItem.name === menuItem.name)
          )
          .slice(0, 4)
          .map((item, index) => (
            <ProductCard key={index} item={item} index={index} />
          ))}
      </div>
    </div>
  );
};
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const ProductCard = ({ item, index }) => {
  const { cart, setCart} = useContext(MainContext)
  const originalPrice = parseFloat(item.price.toString().replace(/[^0-9.-]+/g, ""));
  const discount = 0.10; // 10% discount
  const discountedPrice = originalPrice - (originalPrice * discount);
  // Function to add items to cart
  const addToCart = (item) => { 
    setCart((prevCart) => {
      const itemExists = prevCart.some((cartItem) => cartItem.name === item.name);
  
      // If the item is already in the cart, don't add it again
      if (itemExists) {
        return prevCart;
      }
  
      // Item is not in the cart, add it
      const updatedCart = [...prevCart, item];
  
      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  
      return updatedCart;
    });
    
};
const isItemInCart = (item) => {
    
  return cart?.some(
    (cartItem) => cartItem.name === item.name 
    // && cartItem.price === item.price
  );
};
return (
  <div
    key={index}
    className="space-y-3 flex flex-col h-full overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
  >
    {/* Product Image */}
    <div
      className="h-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
      <img
        className="h-full w-full object-cover object-center mx-auto dark:hidden"
        src={item.imageSrc}
        alt={item.imageAlt}
      />
      <img
        className="h-full w-full object-cover object-center mx-auto hidden dark:block"
        src={item.imageSrc}
        alt={item.imageAlt}
      />
    </div>
    
    {/* Product content */}
    <div className="flex-1">
      <p
        className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
      >
        {truncateText(item.name, 3)}
      </p>
     {/* Truncated description */}
     <p className="my-1 text-base tracking-wide leading-5 font-normal text-gray-400 dark:text-gray-400">
          {truncateText(item.desc, 6)}
        </p>
      {/* Product rating */}
      <div className="flex items-center mt-2 mb-3">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              color={
                index < Math.floor(item.rating)
                  ? "text-amber-500"
                  : "text-slate-300/50"
              }
            />
          ))}
          <span className="bg-sky-100/70 text-blue-700 text-[0.7rem] rounded px-2 font-medium ms-2">
            {item.rating}
          </span>
        </div>
    </div>
    
    {/* product pricing */}
    <div className="flex justify-between p-1">
      <p className=" text-gray-900 dark:text-white">
        <span className="line-through">₹{item.price}</span><span className="text-green-600 ml-2 text-sm">8% off</span>
      </p>
      <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
        ₹{discountedPrice}/-
      </p>
    </div>
    
    {/* Add to cart Button */}
    <div class="mt-auto  flex items-center gap-2.5">
      <button
        data-tooltip-target="favourites-tooltip-1"
        type="button"
        class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
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
            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
          ></path>
        </svg>
      </button>
      <div
        id="favourites-tooltip-1"
        role="tooltip"
        class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
      >
        Add to favourites
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        type="button"
        onClick={() => addToCart(item)}
        class="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        <svg
          class="-ms-2 me-2 h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
          />
        </svg>
        {isItemInCart(item) ? 'Added to cart' : "Add to cart"}
      </button>
    </div>
  </div>
)
};

export default RelatedProducts;
