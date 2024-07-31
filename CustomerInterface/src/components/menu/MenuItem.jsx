import React from 'react'
import StarIcon from '../StarIcon';
import { AiFillCheckCircle } from "react-icons/ai";

const MenuItem = ({ updatedMenuList, addToCart, isItemInCart }) => {

    return (
      <div 
      className="flex flex-wrap justify-center items-center gap-8 mx-auto">
        {updatedMenuList.map((item, index) => (
          <div
            key={index}
            className="shadow relative group w-[70%]  md:w-1/3 lg:w-[18%] rounded-md overflow-hidden shadow-slate-400"
          >
            {isItemInCart(item) && <AiFillCheckCircle 
            className='absolute text-teal-600 text-4xl right-2 top-2 bg-white rounded-full' /> }
            <div className="w-full bg-black">
              <img
                src={item.imageSrc}
                alt={`Image of ${item.name}`}
                className="h-[200px] w-full object-cover object-top "
              />
            </div>
            <div className="h-[40%] px-3 my-1">
              <h3 className=" text-black font-medium text-nowrap">{item.name}</h3>
              
              <div className="pb-2 pr-3 flex items-center justify-between">
                <div className="flex items-center">
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
                <p className="text- font-semibold text-rose-600">₹
                <span className="text-lg ">{item.price}.00</span>
              </p>
              </div>
              <div className="absolute border border-black overflow-hidden rounded-md hidden group-hover:flex justify-center items-center top-0 right-0 left-0 bottom-0 bg-black/30 ">
                <button
                  onClick={() => addToCart(item)}
                  className={`${ isItemInCart ? 'bg-teal-600' : 'bg-black'} hover:bg-rose-700 rounded text-white p-2 px-3 `}
                >
                  {isItemInCart(item) ? "Added to Cart" : "Add to Cart"}
                </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default MenuItem