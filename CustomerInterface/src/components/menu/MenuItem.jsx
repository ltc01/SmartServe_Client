import React from 'react'
import StarIcon from '../StarIcon';

const MenuItem = ({ updatedMenuList, addToCart, isItemInCart }) => {

    return (
      <>
        {updatedMenuList.map((item, index) => (
          <div
            key={index}
            className="bg-black/20 md:w-1/4 lg:w-1/6 m-2 mx-auto text-center rounded-t-3xl"
          >
            <img
              src={item.img}
              alt={`Image of ${item.name}`}
              className="h-44 w-full object-cover object-top"
            />
            <h3 className="text-xl font-bold text-nowrap">{item.name}</h3>
            <p className="text-lg">
              <span className="font-semibold">Price: ₹</span>
              {item.price}
            </p>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        color={
                          index < Math.floor(item.rating)
                            ? "text-amber-500"
                            : "text-white"
                        }
                      />
                    ))}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                {item.rating}
              </span>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="font-bold hover:bg-green-700 hover:text-white bg-green-100 text-green-800 my-5 mx-auto px-5 py-2 rounded-full"
            >
              {isItemInCart(item) ? "Remove from Cart" : "Add to cart"}
            </button>
          </div>
        ))}
      </>
    );
  };

export default MenuItem