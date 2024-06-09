import { HiStar } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import SwiperCarousel from "../Swiper/SwiperCarousel";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputQuantity from "../Inputs/InputQuantity";
import ProductColor from "./ProductColor";
import { useState } from "react";

const ProductPopup = ({
  data = {},
  onHandlerClose,
}: {
  data: any;
  onHandlerClose: () => void;
}) => {
  const [variantProduct, setVariantProduct] = useState<any>({});

  const {
    product_name,
    price,
    product_description,
    reviews,
    variants,
    category,
  } = data;
  console.log();

  return (
    <>
      <div
        className={`fixed z-[500] top-1/2 left-1/2 -translate-y-1/2
            -translate-x-1/2 w-[920px] h-[535px] bg-white rounded-[10px] flex
            justify-between gap-[30px] py-8`}
      >
        <div className="w-6/12 pl-8">
          <div className="h-full product-hover relative overflow-hidden">
            {variantProduct?.img ? (
              <img
                src={variantProduct.img}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <SwiperCarousel
                className="rounded-[10px] h-full"
                sizeIcon="text-3xl"
                datas={variants}
              />
            )}
            <a
              href="#"
              className="flex justify-center items-center text-white
                        absolute -bottom-[50px] w-full bg-primary z-[2] rounded-b-[10px] h-[42px] wd-text-font-bold
                        text-[13px] transtion-all duration-100 ease-linear btn-popup-product
                        "
            >
              View detailts
            </a>
          </div>
        </div>
        <div className="w-6/12 overflow-auto scroll-cart-items pr-8 relative">
          <h1 className="text-[26px] title-font text-[#333333] mb-3">
            <a href="#">{product_name}</a>
          </h1>
          <a href="#">
            <img
              src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-brand-poliform.jpg"
              alt=""
              className="w-[65px]"
            />
          </a>
          <div className="flex gap-1 items-center my-3">
            <div className="flex items-center text-[15px] title-font">
              Đánh giá:{" "}
              <span className="ml-2">{+reviews[0].average_rating}</span>
              <HiStar className="text-xl text-[#EABE12]" />
            </div>
            <p className="text-color-black text-[15px] text-font">
              {" "}
              (2 customer reviews)
            </p>
          </div>
          <h3 className="color-primary title-font text-2xl wd-text-font-bold">
            ${variantProduct?.price || price}
          </h3>
          <p className="text-color-black text-[15px] text-font my-4">
            {product_description}
          </p>
          <div className="flex items-center gap-4 my-4 wd-text-font-bold title-color text-[15px]">
            Color:
            <ProductColor
              datas={variants}
              size={27}
              gap={3}
              handlerSelected={setVariantProduct}
              colorSelected={variantProduct}
            />
          </div>
          <div className="flex items-center gap-2 pb-4 border-b">
            <InputQuantity />
            <ButtonPrimary
              name="Add to cart"
              className="w-[112px] bg-primary hover:bg-[#df8c4f]"
              type="submit"
            />
            <ButtonPrimary
              name="Buy now"
              className="bg-[#333333] w-[112px] hover:opacity-90"
            />
          </div>
          <ul className="mt-5">
            <li className="nav-color wd-text-font-bold text-[15px] pb-3">
              SKU:
              <span className="text-font text-color-black pl-1">
                {" "}
                {category.id}
              </span>
            </li>
            <li className="nav-color wd-text-font-bold text-[15px] pb-3">
              Category:
              <span className="text-font text-color-black pl-1">
                {category.category_name}
              </span>
            </li>
            <li className="nav-color wd-text-font-bold text-[15px] pb-3">
              Share:
              <span className="text-font text-color-black pl-1">
                {" "}
                {category.id}
              </span>
            </li>
          </ul>
        </div>
        <button
          className="absolute -top-10 -right-2 z-[10]"
          onClick={() => onHandlerClose()}
        >
          <RiCloseFill className="text-[30px] text-white transtion-all duration-200 ease-linear hover:opacity-80" />
        </button>
        <div className="absolute bottom-0 w-6/12 right-0 h-[50px] background-linear rounded-b-[10px]"></div>
      </div>
    </>
  );
};

export default ProductPopup;
