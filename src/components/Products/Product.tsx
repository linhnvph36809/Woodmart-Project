import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { GoHeart } from "react-icons/go";
import { HiStar } from "react-icons/hi";
import { PiShoppingCartBold } from "react-icons/pi";
import { LuShuffle } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";

export default function Product() {
  return (
    <div
      className="product-hover relative overflow-hidden z-[10px]
    bg-white rounded-[10px]"
    >
      <div className="absolute top-3 right-3 z-[5]">
        <GoHeart className="text-xl text-color-black" />
      </div>
      <div
        className="absolute top-2 left-3 z-[5] rounded-xl bg-[#438E44] text-white min-w-[50px]
      text-xs uppercase text-center wd-text-font-bold py-1"
      >
        New
      </div>
      <a href="#">
        <Swiper
          navigation={{
            nextEl: ".next",
            prevEl: ".pre",
          }}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="./public/images/product-1.jpg"
              alt=""
              className="rounded-t-[10px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./public/images/product-1-min-1.jpg"
              alt=""
              className="rounded-t-[10px] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./public/images/product-1-min-2.jpg"
              alt=""
              className="rounded-t-[10px] w-full"
            />
          </SwiperSlide>
          <div className="next absolute top-1/2 right-0 z-10 translate-x-[60px] transition-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-black hover:text-[#777]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="pre absolute top-1/2 left-2 z-10 -translate-x-[60px] transition-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-black hover:text-[#777]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </Swiper>
      </a>
      <div className="px-4 pt-2 p-4 transition-product relative z-[10] bg-white h-[100px]">
        <div className="flex justify-between items-center">
          <a href="#">
            <h5 className="text-[15px] nav-color title-font tracking-tight">
              Giro
            </h5>
          </a>
          <div className="flex items-center text-sm wd-text-font-bold nav-color">
            4.5
            <HiStar className="text-[22px] text-[#EABE12]" />
          </div>
        </div>
        <a href="#" className="my-2 text-sm text-[#a5a5a5] wd-text-font block">
          Chairs
        </a>
        <div className="flex justify-between">
          <h3 className="wd-text-font-bold text-base color-primary">$320.00</h3>
          <ul className="flex gap-2">
            <li
              className="w-[20px] h-[20px] rounded-full border-[1px]
          border-solid border-[#00000013] flex justify-center items-center 
          hover:border-[1px] hover:border-solid hover:border-[#000] transtion-all duration-200 ease-linear"
            >
              <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
            </li>
            <li
              className="w-[20px] h-[20px] rounded-full border-[1px]
          border-solid border-[#00000013] flex justify-center items-center 
          hover:border-[1px] hover:border-solid hover:border-[#000] transtion-all duration-200 ease-linear"
            >
              <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
            </li>
            <li
              className="w-[20px] h-[20px] rounded-full border-[1px]
          border-solid border-[#00000013] flex justify-center items-center 
          hover:border-[1px] hover:border-solid hover:border-[#000] transtion-all duration-200 ease-linear"
            >
              <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
            </li>
          </ul>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <div className="w-8/12 block">
            <a
              href=""
              className="flex justify-center bg-primary rounded-[35px] h-[36px] items-center
             overflow-hidden btn-cart-hover relative transtion-all duration-300 ease-linear"
            >
              <span
                className="text-white text-xs
              block wd-text-font-bold translate-y-0 transition-btn-cart
       "
              >
                Add to cart
              </span>
              <span className="absolute block w-full bottom-0 top-0 translate-y-[29px] z-[10] btn-add-cart">
                <PiShoppingCartBold className="w-[22px] font-bold h-[22px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white -scale-x-100" />
              </span>
            </a>
          </div>
          <div className="flex justify-between w-3/12">
            <a href="">
              <LuShuffle className="text-[22px] title-color hover:opacity-70 transtion-all duration-100 ease-linear" />
            </a>
            <a href="">
              <LuSearch className="text-[22px] title-color hover:opacity-70 transtion-all duration-100 ease-linear" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
