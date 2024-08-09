import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import MainContext from "../context/MainContext";
import { EmptyCart, Grocery } from "./CartIcon";
import { Link } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: '$32.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   // More products...
// ]

export default function Cart({removeFromCart}) {
  // const [open, setOpen] = useState(true)
  // {console.log(setOpen)}
  const navigate = useNavigate()
  const { open, setOpen, setCart, subtotal } = useContext(MainContext);
  const products = JSON.parse(localStorage.getItem("cartItems")) || [];

  const updateQuantity = (index, quantity) => {
    const updatedCart = products.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart); // You need to manage cart state at a higher level or pass a setCart function
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  // const total = products.reduce((sum, item) => {
  //   const priceNumber = parseFloat(
  //     item.price.toString().replace(/[^0-9.-]+/g, "")
  //   );
  //   return sum + priceNumber * item.quantity;
  // }, 0);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-1">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Cart details
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-600"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className={`-my-6 ${products.length > 0 && 'divide-y'} divide-gray-200`}
                      >
                        {products.length === 0 ? (
                          <>
                          <p className="text-slate-500" >Your cart is empty!!</p>
                          <li className="text-slate-500 h-[20rem] flex items-center justify-center ">
                          <EmptyCart />
                          </li>
                          <div className="mt-3 flex justify-center text-center text-gray-500">
                {/* <Link to={"/menus"}> */}
                  <button
                    type="button"
                    onClick={()=>{
                      setOpen(false)
                      navigate('/menus')
                    }}
                    className="font-[700] text-lg text-teal-900 hover:underline"
                  >
                  .....take me to the
                    Menus 🍽
                    {/* <span aria-hidden="true"> &rarr;</span> */}
                  </button>
                {/* </Link> */}
              </div>
                          </>
                        ) : (
                          <>
                            {products.map((product, index) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className="ml-4">{product.price}/-</p>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-400 pr-7">
                                      {product.desc} 
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    {/* <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p> */}
                                    <p className="text-slate-500">
                                      <span className="">
                                        Qty:
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              index,
                                              product.quantity - 1
                                            )
                                          }
                                          className="mx-1 px-1 border"
                                        >
                                          -
                                        </button>
                                        {product.quantity}
                                        <button
                                          onClick={() =>
                                            updateQuantity(
                                              index,
                                              product.quantity + 1
                                            )
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
                                        onClick={()=>removeFromCart(index)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                { subtotal > 0 && <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p className="text-red-700">₹{subtotal}.00</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                  Taxes and additional charges may apply at checkout.</p>
                  <div className="mt-4 md:mt-6">
                    <div
                    onClick={()=> {
                      setOpen(false)
                      navigate('/checkout')
                    }}
                      className="flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-6 py-2 md:py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700"
                    >
                      Checkout
                    </div>
                  </div>
                  <div className="mt-3 flex justify-center text-center text-sm text-gray-500">
                    {/* <Link to={'/menus'}> */}
                      {/* or{" "} */}
                      <button
                      onClick={()=> {
                        setOpen(false)
                        navigate('/menus')
                      }}
                        type="button"
                        // onClick={() => setOpen(false)}
                        className="font-medium text-teal-600 hover:underline"
                      >
                        or Browse More Dishes🥘
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    {/* </Link> */}
                  </div>
                </div>}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
