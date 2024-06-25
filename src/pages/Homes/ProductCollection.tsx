import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import { getProductCollections } from "../../api/product.api";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import Product from "../../components/Products/Product";

const ProductCollection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getProductCollections();
      setProducts(data);
    })();
  }, []);

  return (
    <>
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="swiperProduct"
        >
          {products.map((product: any) => (
            <SwiperSlide key={product.id} className="h-[430px]">
              <Product
                key={product.id}
                data={{
                    id:product.product.id,
                    name: product.product.product_name,
                    price: product.product.price,
                    reviews: product.product.reviews,     
                    variants: product.product.variants,
                    category: product.product.category,
                    img: product.product.product_theme,
                    description: ""
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
    </>
  );
};

export default ProductCollection;
