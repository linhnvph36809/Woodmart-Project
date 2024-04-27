import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Product() {
  return (
    <div className="product-hover relative overflow-hidden z-[10px] h-full bg-white rounded-[10px] dark:bg-gray-800">
      <div className="absolute top-3 right-3 z-[5]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 nav-color hover:text-[#777]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div className="absolute top-2 left-3 z-[5] rounded-xl bg-[#438E44] text-white min-w-[50px] text-xs uppercase text-center wd-text-font-bold py-1">
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
      <div className="px-4 pt-2 p-4 transition-product translate-y-0 relative z-[10] bg-white">
        <div className="flex justify-between items-center">
          <a href="#">
            <h5 className="text-base nav-color title-font tracking-tight">
              Curve
            </h5>
          </a>
          <div className="flex items-center gap-1 wd-text-font-bold nav-color">
            4.5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[#EABE12]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
        <a
          href="#"
          className="my-2 text-base text-[#a5a5a5] wd-text-font block"
        >
          Chairs
        </a>
        <div className="flex justify-between">
          <h3 className="wd-text-font-bold text-base color-primary">$320.00</h3>
          <ul className="flex gap-2">
            <li className="w-[20px] h-[20px] rounded-full border-[1px] border-solid border-[#00000013] flex justify-center items-center ">
              <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
            </li>
            <li className="w-[20px] h-[20px] rounded-full border-[1px] border-solid border-[#00000013] flex justify-center items-center ">
              <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
            </li>
            <li className="w-[20px] h-[20px] rounded-full border-[1px] border-solid border-[#00000013] flex justify-center items-center ">
              <div className="w-[12px] h-[12px] rounded-full bg-black"></div>
            </li>
          </ul>
        </div>
        <div className="flex justify-between mt-3 items-center">
          <div className="w-8/12 block">
            <a
              href=""
              className="flex justify-center bg-primary rounded-[35px] h-[36px] items-center overflow-hidden btn-cart-hover relative"
            >
              <span
                className="text-white text-xs
               block wd-text-font-bold translate-y-0 transition-btn-cart
               "
              >
                Add to cart
              </span>
              <span className="absolute block w-full bottom-0 top-0 translate-y-[29px] z-[10] btn-add-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex justify-between w-3/12">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 nav-color hover:opacity-70"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 nav-color hover:opacity-70"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
