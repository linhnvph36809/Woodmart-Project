import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import Product from "../../components/Products/Product";

const SlibarProduct = () => {
    return (
        <div className='relative'>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
                nextEl: ".next",
                prevEl: ".pre",
              }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            modules={[Navigation]}
            className="swiperProduct"
        >
            <SwiperSlide>
                <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
                <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
                <Product></Product>
            </SwiperSlide>
            <SwiperSlide>
                <Product></Product>
            </SwiperSlide>
        </Swiper>
                    <div className="next absolute top-1/2 -right-10 z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-black hover:text-[#777]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
                <div className="pre absolute top-1/2 -left-10 z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-black hover:text-[#777]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </div>
                </div>

    )
}

export default SlibarProduct