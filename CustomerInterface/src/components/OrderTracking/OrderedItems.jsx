import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function OrderedItems({ order }) {
  return (
    <>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          scrollbar={{
            hide: false,
            draggable: true
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
            1440: { slidesPerView: 6, spaceBetween: 20 },
          }}
          modules={[Pagination, Scrollbar]}
          className="mySwiper sm:pt-4 pb-6 sm:px-4 w-[90%]"
        >
          {order.items.map((product, index) => (
            <SwiperSlide
              key={index}
              className="group flex flex-col"
            >
                <div className="h-32 w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col h-full justify-between">
                  <h3 className="text-sm my-1 text-nowrap overflow-hidden font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <div className=" pr-3 flex font-medium justify-between items-center">
                    <p className=" text-red-700">
                      ₹{product.quantity * product.price}/-
                    </p>
                    <p className="text-slate-500 text-xs">
                      {product.quantity}x ₹{product.price}
                    </p>
                  </div>
                </div>
      
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
}




