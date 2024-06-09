import { memo, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GoHeart } from "react-icons/go";
import { HiStar } from "react-icons/hi";
import { PiShoppingCartBold } from "react-icons/pi";
import { LuShuffle, LuX } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";

import SwiperCarousel from "../Swiper/SwiperCarousel";
import { BackGroundTransparent } from "../../Layouts";
import ProductColor from "./ProductColor";
import ProductPopup from "./ProductPopup";

export default memo(function Products({ data }: { data: any }) {
  const image = useRef<any>("");

  const [selectProduct, setSelectProduct] = useState<boolean>(false);

  const [variantProduct, setVariantProduct] = useState<any>({});

  const [productPopup, setProductPopup] = useState<any>({ active: false });

  const handlerSetProductPopup = useCallback(
    (product: any = { active: false }) => {
      setProductPopup(product);
    },
    []
  );

  if (variantProduct.changeImage) {
    image.current = variantProduct.img;
  }

  const { product_name, price, reviews, variants, category } = data.product;
  
  return (
    <>
      <div
        className={`${selectProduct || "product-hover"
          } relative overflow-hidden z-[10px]
                bg-white rounded-[10px] flex flex-col justify-between`}
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
        <div className="relative block overflow-hidden flex-1">
          <a href="#!">
            {image.current ? (
              <img
                src={image.current}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <SwiperCarousel
                className="rounded-t-[10px]"
                sizeIcon="text-xl"
                datas={variants}
              />
            )}
          </a>
          {selectProduct && (
            <div
              className={`absolute w-full top-0 right-0 left-0 bottom-0 bg-[#ffffffe6] z-[20]`}
            >
              <p
                className="flex items-center justify-end gap-1 title-font text-base text-[#333] hover:opacity-70
                transtion-all duration-100 ease-linear hover:cursor-pointer p-2"
                onClick={() => setSelectProduct(false)}
              >
                <LuX className="text-xl text-[#b1b1b1]" /> Close
              </p>
              <div className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2">
                <p className="title-color text-base title-font-800 pb-3">
                  Color:{" "}
                </p>
                <div className="flex justify-center">
                  <ProductColor
                    datas={variants}
                    size={27}
                    gap={3}
                    handlerSelected={setVariantProduct}
                    colorSelected={variantProduct}
                  />
                </div>
                {variantProduct.id && (
                  <p
                    className="flex items-center justify-center gap-1 text-xs text-[#777] pt-3 text-font
                hover:cursor-pointer hover:opacity-80 hide-and-show"
                    onClick={() => setVariantProduct({})}
                  >
                    <LuX className="text-sm text-[#b1b1b1]" /> Clear
                  </p>
                )}
              </div>
              <div className="absolute bottom-0 left-0 text-center right-0 bg-primary text-white">
                <button className="text-xs wd-text-font-bold hover-bg-primary w-full py-3">
                  Add to cart
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="px-4 pt-2 p-4 transition-product relative z-[10] bg-white h-[100px]">
          <div className="flex justify-between items-center">
            <a href="#">
              <h5 className="text-[15px] nav-color title-font tracking-tight">
                {product_name}
              </h5>
            </a>
            <div className="flex items-center text-[15px] wd-text-font-bold nav-color">
              {+reviews[0].average_rating}
              <HiStar className="text-[22px] text-[#EABE12]" />
            </div>
          </div>
          <a
            href="#"
            className="my-2 text-sm text-[#a5a5a5] wd-text-font block"
          >
            {category?.category_name}
          </a>
          <div className="flex justify-between items-center">
            <h3 className="wd-text-font-bold text-base color-primary">
              ${variantProduct.price || price}
            </h3>
            <ProductColor
              datas={variants}
              handlerSelected={setVariantProduct}
              colorSelected={variantProduct}
              changeImage
            />
          </div>
          <div className="flex justify-between mt-3 items-center transtion-all duration-300 ease-in-out transtion-side-btn">
            <div className="w-8/12 block">
              <a
                href="#!"
                className="flex justify-center bg-primary rounded-[35px] h-[36px] items-center
                overflow-hidden btn-cart-hover relative transtion-all duration-300 ease-linear"
                onClick={() =>
                  variants.length > 0
                    ? setSelectProduct((state) => !state)
                    : "none"
                }
              >
                <span
                  className="text-white text-xs
                  block wd-text-font-bold translate-y-0 transition-btn-cart"
                >
                  {variants.length > 0 ? "Select options" : "Add to cart"}
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
              <a
                href="#!"
                onClick={() =>
                  handlerSetProductPopup({
                    active: true,
                    product: data.product,
                  })
                }
              >
                <LuSearch className="text-[22px] title-color hover:opacity-70 transtion-all duration-100 ease-linear" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {createPortal(
        <BackGroundTransparent
          bgTransparent={productPopup.active}
          onhandleBg={handlerSetProductPopup}
        />,
        document.body
      )}
      {productPopup.active &&
        createPortal(
          <ProductPopup
            data={productPopup.product}
            onHandlerClose={handlerSetProductPopup}
          />,
          document.body
        )}
    </>
  );
});
