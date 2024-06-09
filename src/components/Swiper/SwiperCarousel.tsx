import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";

const SwiperCarousel = ({className,sizeIcon="text-xl",datas}:{className?:string,sizeIcon?:string,datas?:any}) => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".next-items",
          prevEl: ".pre-items",
        }}
        modules={[Navigation]}  
        loop={true}
        className={`swiper-product h-full ${className}`}
      >
        {datas && datas.map((data:any) => 
        <SwiperSlide key={data.id}>
          <img
            src={data.img}
            alt=""
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        )}
        <div className="next-items absolute top-1/2 right-0 z-10 translate-x-[60px] transition-btn">
          <LiaAngleRightSolid className={`${sizeIcon} text-black hover:text-[#777] hover:cursor-pointer`}/>
        </div>
        <div className="pre-items absolute top-1/2 left-2 z-10 -translate-x-[60px] transition-btn">
          <LiaAngleLeftSolid className={`${sizeIcon} text-black hover:text-[#777] hover:cursor-pointer`}/>
        </div>
      </Swiper>
    </> 
  );
};

export default SwiperCarousel;
