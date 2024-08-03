import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import StarIcon from "../StarIcon";

const ProductDetails = () => {
  const { cart, setCart } = useContext(MainContext);
  const updateQuantity = (index, quantity) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart); // You need to manage cart state at a higher level or pass a setCart function
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // console.log(cart);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <>
      {cart.map((product, index) => (
        <div class="rounded-lg bg-white border border-gray-200 p-2 shadow-sm shadow-slate-600 dark:border-gray-700 dark:bg-gray-800 md:p-2">
          <div class="hidden md:flex md:items-center md:gap-5 md:space-y-0">
            <ProductImage img={product.imageSrc} name={product.name} />
            <ProductInfo
              index={index}
              name={product.name}
              desc={product.desc}
              rating={product.rating}
              qty={product.quantity}
              updateQuantity={updateQuantity}
            />
            {/* Product Pricing */}
            <div class="text-end  flex md:flex-col px-4 md:px-0 justify-between items-end md:gap-16 md:order-4 md:w-24">
              <p class="text-base font-bold md:pr-4 text-gray-900 dark:text-white">
                ₹{product.price.toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(index)}
                type="button"
                class="inline-flex md:pr-2 items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
              >
                <svg
                  class="me-1.5 h-5 w-5"
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
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                Remove
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                alt={product.name}
                src={product.imageSrc}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-2 flex flex-1 flex-col  ">
              {/* <div> */}
              <div className="flex justify-between font-medium text-gray-900">
                {/* <h3> */}
                <a href={product.imageSrc} className="text-sm">
                  {product.name}
                </a>
                {/* </h3> */}
                <p className="">{product.price}/-</p>
              </div>
              <p className="text-[0.7rem] text-gray-400 pr-7">{product.desc}</p>
              {/* </div> */}
              <div className="flex flex-1 items-end justify-between text-xs">
                {/* <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p> */}
                <p className="text-slate-500">
                  <span className="">
                    Qty:
                    <button
                      onClick={() =>
                        updateQuantity(index, product.quantity - 1)
                      }
                      className="mx-1 px-1 border"
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      onClick={() =>
                        updateQuantity(index, product.quantity + 1)
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
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const ProductImage = ({ img, name }) => (
  // <a href="#" className="shrink-0">
  //   <img className="h-28 w-32 dark:hidden" src={img} alt={name} />
  //   <img className="hidden h-28 w-32 dark:block" src={img} alt={name} />
  // </a>
  <>
    <div className="h-32 w-36 dark:hidden shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
        alt={name}
        src={img}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="hidden h-32 w-36 dark:block shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
        alt={name}
        src={img}
        className="h-full w-full object-cover object-center"
      />
    </div>
  </>
);

const QuantitySelector = ({ qty, updateQuantity, index }) => (
  <>
    <label for="counter-input" class="sr-only">
      Choose quantity:
    </label>

    <div class="flex items-center justify-between md:order-3 md:justify-end">
      <div class="flex items-center">
        <button
          onClick={() => updateQuantity(index, qty - 1)}
          type="button"
          id="decrement-button"
          data-input-counter-decrement="counter-input"
          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            class="h-2.5 w-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="counter-input"
          data-input-counter
          class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
          placeholder=""
          value={qty}
          required
        />
        <button
          onClick={() => updateQuantity(index, qty + 1)}
          type="button"
          id="increment-button"
          data-input-counter-increment="counter-input"
          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            class="h-2.5 w-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      {/* <div class="text-end md:order-4 md:w-32">
        <p class="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
      </div> */}
    </div>
  </>
);

const ProductInfo = ({ name, rating, qty, desc, updateQuantity, index }) => (
  <>
    <div className="w-full md:min-w-0 flex-1 space-y-6 md:order-2 md:max-w-md">
      <div className="">
        {/* Product Name */}
        <a
          href="#"
          class="text-base font-medium text-gray-900 hover:underline dark:text-white"
        >
          {name}
          {/* <br></br> */}
          {/* {desc} */}
        </a>
        {/* Product Description */}
        <p className="text-xs md:text-sm mb-2 text-gray-400">{desc}</p>
        {/* Product rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              color={
                index < Math.floor(rating)
                  ? "text-amber-500"
                  : "text-slate-300/50"
              }
            />
          ))}
          <span className="bg-sky-100/70 text-blue-700 text-[0.7rem] rounded px-2 font-medium ms-2">
            {rating}
          </span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        {/* <button
        type="button"
        class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
      >
        <svg
          class="me-1.5 h-5 w-5"
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
            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
          />
        </svg>
        Add to Favorites
      </button> */}

        <QuantitySelector
          qty={qty}
          updateQuantity={updateQuantity}
          index={index}
        />
      </div>
    </div>
  </>
);

export default ProductDetails;
