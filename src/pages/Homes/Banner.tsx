import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import {contents} from "./content";
import { IContent } from "../../interfaces/Icontent";

export default function Banner() {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        speed={900}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".pre",
        }}
        onSlideChange={(swiperCore) => {
          const { realIndex } = swiperCore;
          setIndex(realIndex);
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiperBanner"
      >
        {contents?.map((content: IContent, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                className={`w-full h-[600px] transtion-all duration-300 ease-linear object-cover`}
                src={content.banner}
                alt=""
              />
              <div
                className={`absolute ${
                  index == i && "animation-content-top"
                } top-[100px] left-[150px] flex gap-5 
                items-center`}
              >
                <div className="w-[74px] h-[74px] rounded-full bg-[#1010101a] flex justify-center items-center">
                  <img
                    className="w-[34px] h-[34px]"
                    src={content.imageCategory}
                    alt=""
                  />
                </div>
                <h4 className="text-[#242424cc] text-lg title-font w-[200px]">
                  Discover more products in the{" "}
                  <u className="border-b-[3px] border-solid border-[#f59a57] mr-1 no-underline">
                    {content.category}
                  </u>
                  category
                </h4>
              </div>
              <div
                className={`absolute top-1/2 left-[150px] ${
                  index == i && "animation-content-bottom"
                }`}
              >
                <h1 className="text-[#242424cc] title-font-800 text-[46px] leading-[1]">
                  {content.title}
                </h1>
                <h1 className="text-[#242424cc] title-font-800 text-[46px] flex items-center gap-2">
                  by <img src={content.imageCreator} alt="" />
                  {content.creator}
                </h1>
                <div className="mt-8 flex items-center gap-4">
                  <a
                    className="min-w-[125px] min-h-[48px] rounded-[35px] title-font nav-color text-sm flex items-center justify-center bg-white hover:bg-[#e0e0e0] hover:transition-all hover:duration-300 hover:ease-linear"
                    href="#"
                  >
                    Shop Now
                  </a>
                  <h3 className="wd-text-font-bold text-[#242424cc] text-[33px]">
                    {content.price}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div
          className="next absolute top-1/2 right-5 z-10 w-[50px] h-[50px]
         rounded-full bg-white flex justify-center items-center hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black hover:text-[#777]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div
          className="pre absolute top-1/2 left-5 z-10 w-[50px] h-[50px]
         rounded-full bg-white flex justify-center items-center hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black hover:text-[#777]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </Swiper>
    </>
  );
}
