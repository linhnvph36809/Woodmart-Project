import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import Product from "../../components/Products/Product";

const SlibarProduct = ({ datas, columns }: { datas: any; columns?: any }) => {
  return (
    <div className="relative furniture-collection">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".next-items",
          prevEl: ".pre-items",
        }}
        breakpoints={{
          640: {
            slidesPerView: columns.sm,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: columns.lg,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: columns.xl,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="swiperProduct"
      >
        {datas.map((data: any) => (
          <SwiperSlide key={data.id} className="h-[398px]">
            <Product
              key={data.id}
              data={{
                id: data.id,
                name: data.product_name,
                price: data.price,
                reviews: data.reviews_avg_stars,
                variants: data.variants,
                category: data.category,
                img: data.product_theme,
                description: data.product_description,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="next-items absolute top-1/2 -right-5 z-10 translate-x-[30px] opacity-0 
      transtion-all duration-200 ease-linear"
      >
        <LiaAngleRightSolid className="text-3xl text-color-black hover:text-[#777] hover:cursor-pointer" />
      </div>
      <div
        className="pre-items absolute top-1/2 -left-10 z-10 -translate-x-[30px] opacity-0 
      transtion-all duration-200 ease-linear"
      >
        <LiaAngleLeftSolid className="text-3xl text-color-black hover:text-[#777] hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default SlibarProduct;
