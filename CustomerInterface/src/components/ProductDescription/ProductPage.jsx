import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import StarIcon from "../StarIcon";
import RelatedProducts from "../Checkout/RelatedProducts";

const ProductPage = () => {
  const { menuItems, setCart } = useContext(MainContext);
  // console.log(menuItems)
  const name = menuItems[0].name;
  const imageSrc = menuItems[0].imageSrc;
  const price = menuItems[0].price;
  const rating = menuItems[0].rating;
  const quantity = menuItems[0].quantity;
  const desc = menuItems[0].desc;
  const originalPrice = parseFloat(price.toString().replace(/[^0-9.-]+/g, ""));
  const discount = 0.1; // 10% discount
  const discountedPrice = originalPrice - originalPrice * discount;
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
  return (
      <div class="p-4 my-10 lg:max-w-7xl max-w-xl max-lg:mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Image of Product */}
          <div class="min-h-[500px] lg:col-span-3 bg-gradient-to-tr  from-[#F8C794] via-[#FFE0B5] to-[#FFF2D7] rounded-lg w-full lg:sticky top-0 text-center p-6">
            <img
              src={imageSrc}
              alt="Product"
              class="w-3/5 rounded object-cover mx-auto py-6"
            />

            <hr class="border-white border my-6" />

            <div class="flex flex-wrap gap-x-4 gap-y-6 justify-center mx-auto">
              <div class="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                <img
                  src="https://readymadeui.com/images/coffee6.webp"
                  alt="Product1"
                  class="w-full h-full cursor-pointer"
                />
              </div>
              <div class="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                <img
                  src="https://readymadeui.com/images/coffee3.webp"
                  alt="Product1"
                  class="w-full h-full cursor-pointer"
                />
              </div>
              <div class="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                <img
                  src="https://readymadeui.com/images/coffee4.webp"
                  alt="Product1"
                  class="w-full h-full cursor-pointer"
                />
              </div>
              <div class="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                <img
                  src="https://readymadeui.com/images/coffee5.webp"
                  alt="Product1"
                  class="w-full h-full cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Content  */}
          <div class="lg:col-span-2 md:px-1">
            <h2 class="md:text-2xl text-lg font-bold text-gray-800">{name}</h2>
            {/* Pricing */}
            <div class="flex items-center flex-wrap gap-4 mt-1 md:mt-3">
              <p class="text-lg md:text-xl font-bold">₹{discountedPrice}</p>
              <p class="text-green-700 font-medium text-xs md:text-sm">
                <strike>₹{price}</strike>{" "}
                <span class="text-sm ml-1">10% discount</span>
              </p>
            </div>

            {/* Ratings */}
            <div class="flex space-x-1 mt-3">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  size="w-5 h-5"
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

            {/* Product Description */}
            {/* <div class="mt-6">
              <h3 class="text-xl font-bold text-gray-800">About the coffee</h3>
              <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>
                  A cup of coffee is a beverage essential because of its
                  timeless appeal
                </li>
                <li>
                  Easy to prepare. It can be brewed using various methods, from
                  drip machines to manual pour-overs.
                </li>
                <li>
                  Available in various sizes, from a standard espresso shot to a
                  large Americano, catering to different preferences.
                </li>
                <li>
                  You can customize your coffee by adding cream, sugar, or
                  flavorings to suit your taste preferences.
                </li>
              </ul>
            </div> */}

            {/* Add to cart Button */}
            <button
            onClick={()=>addToCart(item)}
              type="button"
              class="w-full mt-6 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md"
            >
              Add to cart
            </button>

            {/* Reviews Section */}
            <div class="mt-8">
              <h3 class="text-xl font-bold text-gray-800">All Reviews(10)</h3>

              {/* Progressbar of Reviews */}
              <div class="pr-3 space-y-1 md:space-y-2 mt-4">
                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">5.0</p>
                  <svg
                    class="w-5 fill-orange-400 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-2/3 h-full rounded bg-orange-400"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">4.0</p>
                  <svg
                    class="w-5 fill-orange-400 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-1/3 h-full rounded bg-orange-400"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">3.0</p>
                  <svg
                    class="w-5 fill-orange-400 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-1/6 h-full rounded bg-orange-400"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">2.0</p>
                  <svg
                    class="w-5 fill-orange-400 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-1/12 h-full rounded bg-orange-400"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                </div>

                <div class="flex items-center">
                  <p class="text-sm text-gray-800 font-bold">1.0</p>
                  <svg
                    class="w-5 fill-orange-400 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div class="bg-gray-300 rounded w-full h-2 ml-3">
                    <div class="w-[6%] h-full rounded bg-orange-400"></div>
                  </div>
                  <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                </div>
              </div>

              {/* Descriptive Review from a customer */}
              <div class="flex items-start mt-6">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  class="w-8 h-18 rounded-full border-2 border-white"
                />
                <div class="ml-3">
                  <h4 class="text-sm font-bold">John Doe</h4>
                  <div class="flex space-x-1 items-center">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        size="w-2 h-2"
                        key={index}
                        color={
                          index < Math.floor(rating)
                            ? "text-amber-500"
                            : "text-slate-300/50"
                        }
                      />
                    ))}

                    <p class="text-xs !ml-2 font-semibold">2 mins ago</p>
                  </div>
                  <p class="text-xs mt-1">
                    The service was amazing. I never had to wait that long for
                    my food. The staff was friendly and attentive, and the
                    delivery was impressively prompt.
                  </p>
                </div>
              </div>

              {/* <button
                type="button"
                class="w-full mt-8 px-4 py-2.5 bg-transparent border border-orange-400 text-gray-800 font-semibold rounded-lg"
              >
                Read all reviews
              </button> */}
            </div>
          </div>

        </div>
        <ItemDescription />
        <RelatedProducts />
      </div>

  );
};

export default ProductPage;

const ItemDescription = () =>{
    return (
        <div class="my-14 px-2 md:px-10 max-w-4xl">
                    <ul class="flex border-b">
                        <li
                            class="text-gray-800 font-semibold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                            Description</li>
                        <li class="text-gray-500 font-semibold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">Reviews</li>
                    </ul>

                    <div class="mt-8">
                        <h3 class="text-xl font-bold text-gray-800">Product Description</h3>
                        <p class="text-sm text-gray-500 mt-4">Elevate your casual style with our premium men's t-shirt. Crafted for comfort and designed with a modern fit, this versatile shirt is an essential addition to your wardrobe. The soft and breathable fabric ensures all-day comfort, making it perfect for everyday wear. Its classic crew neck and short sleeves offer a timeless look.</p>
                    </div>

                    <ul class="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-500">
                        <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
                        <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                        <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
                        <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
                    </ul>
                </div>
    )
}