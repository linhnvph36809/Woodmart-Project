import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SlibarImage() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[]}
        className="slibarImage"
      >
        <SwiperSlide>
          <img src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-showroom-milano-1.jpg" alt="" className='rounded-[10px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-showroom-milano-2.jpg" alt="" className='rounded-[10px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-showroom-milano-3.jpg" alt="" className='rounded-[10px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-showroom-milano-4.jpg" alt="" className='rounded-[10px]' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
