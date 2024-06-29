import { memo, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GoHeart } from "react-icons/go";
import { HiStar } from "react-icons/hi";
import { PiShoppingCartBold } from "react-icons/pi";
import { LuShuffle, LuX } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";

import SwiperCarousel from "../Swiper/SwiperCarousel";
import { BackGroundTransparent, useGlobalContext } from "../../Layouts";
import ProductColor from "./ProductColor";
import ProductPopup from "./ProductPopup";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import { postCart } from "../../api/cart.api";
import { postWishlist } from "../../api/wishlist.api";

export default memo(function Products({ data }: { data: any }) {

  const cookies = useGlobalContext();

  const image = useRef<any>("");

  const [selectProduct, setSelectProduct] = useState<boolean>(false);

  const [variantProduct, setVariantProduct] = useState<any>({});

  const [productPopup, setProductPopup] = useState<any>({ active: false });

  const [loading, setLoading] = useState<any>(null);

  const handlerAddCart = useCallback(
    async (cart: any) => {
      setLoading(false);
      if (cookies?.user?.token) {
        const data = await postCart(cart, cookies?.user.token);
        if (data?.status < 200 && data?.status > 300) {
          alert("Khong co squyen truy cap");
        } else {
          cookies.hanlerTotalPrice();
        }
        setSelectProduct(false);
        setLoading(true);
      } else {
        alert("Vui lòng đăng nhập để mua hàng");
        setLoading(null);
      }
    },
    [cookies?.user]
  );

  const handlerSetProductPopup = useCallback(
    (product: any = { active: false }) => {
      setProductPopup(product);
    },
    []
  );
  

  const handlerWishlist = useCallback(async (productId: string | number) => {
    if (cookies?.user?.token) {
      await postWishlist(
        { user_id: cookies.user.user_id, product_id: productId },
        cookies.user.token
      );
      alert("Thêm thành công");
    } else {
      alert("Vui lòng đăng nhập để mua hàng");
    }
  }, []);

  if (variantProduct.changeImage) {
    image.current = variantProduct.img;
  }

  return (
    <>
      <div
        className={`${
          selectProduct || "product-hover"
        } relative overflow-hidden z-[10px]
          bg-white rounded-[10px] flex flex-col justify-between h-full`}
      >
        <div className="absolute top-3 right-3 z-[5]">
          <GoHeart
            className="text-xl text-color-black hover:cursor-pointer hover:opacity-70"
            onClick={() => handlerWishlist(data.id)}
          />
        </div>
        <div
          className="absolute top-2 left-3 z-[5] rounded-xl bg-[#438E44] text-white min-w-[50px]
              text-xs uppercase text-center wd-text-font-bold py-1"
        >
          New
        </div>
        <div className="relative block overflow-hidden flex-1">
          <Link to={`/product-detail/${data.id}`}>
            {image.current ? (
              <img
                src={image.current}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : data.variants.length > 0 ? (
              <SwiperCarousel
                className="rounded-t-[10px]"
                sizeIcon="text-xl"
                datas={data.variants}
              />
            ) : (
              <img
                src={data.img}
                alt="ảnh lỗi"
                className="h-full object-cover"
              />
            )}
          </Link>
          {selectProduct && (
            <>
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
                      datas={data.variants}
                      size={25}
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
                  <button
                    className={`text-xs wd-text-font-bold hover-bg-primary w-full py-3 
                    ${variantProduct?.qty_in_stock && +variantProduct?.qty_in_stock < 1 && "bg-[#faccab] pointer-events-none"}`}
                    onClick={() =>
                      variantProduct?.id
                        ? handlerAddCart({
                            user_id: cookies?.user?.user_id,
                            quantity: 1,
                            product_variant_id: variantProduct.id || data.id,
                          })
                        : alert(
                            "Please select some product options before adding this product to your cart."
                          )
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              {loading == false && (
                <div className="absolute flex justify-center items-center w-full top-0 right-0 left-0 bottom-0 bg-[#ffffffe6] z-[40]">
                  <Spinner />
                </div>
              )}
            </>
          )}
        </div>

        <div className="px-4 pt-2 p-4 transition-product relative z-[10] bg-white h-[100px]">
          <div className="flex justify-between items-center">
            <a href="#">
              <h5 className="text-[15px] nav-color title-font tracking-tight">
                {data.name}
              </h5>
            </a>
            <div className="flex items-center text-[15px] wd-text-font-bold nav-color">
              {Array.isArray(data.reviews)
                ? +data?.reviews[0]?.average_rating
                : data?.reviews_avg_stars && +data.reviews_avg_stars}
              {data?.reviews_avg_stars ||
                (Array.isArray(data.reviews) && data.reviews.length > 0 && (
                  <HiStar className="text-[22px] text-[#EABE12]" />
                ))}
            </div>
          </div>
          <a
            href="#"
            className="my-2 text-sm text-[#a5a5a5] wd-text-font block"
          >
            {data.category?.category_name}
          </a>
          <div className="flex justify-between items-center">
            <h3 className="wd-text-font-bold text-base color-primary">
              ${variantProduct.price || data.price}
            </h3>
            <ProductColor
              datas={data.variants}
              handlerSelected={setVariantProduct}
              colorSelected={variantProduct}
              changeImage
            />
          </div>
          <div className="flex justify-between mt-3 items-center transtion-all duration-300 ease-in-out transtion-side-btn">
            <div className="w-8/12 block">
              <div
                className={`flex justify-center bg-primary rounded-[35px] h-[36px] items-center hover:cursor-pointer
                overflow-hidden btn-cart-hover relative transtion-all duration-300 ease-linear
                ${variantProduct?.qty_in_stock && +variantProduct?.qty_in_stock < 1 && "opacity-50 pointer-events-none"}`}
                onClick={() =>
                  data.variants.length > 0
                    ? setSelectProduct((state) => !state)
                    : handlerAddCart({
                        user_id: cookies?.user?.user_id,
                        quantity: 1,
                        product_variant_id: variantProduct.id || data.id,
                      })
                }
              >
                <span
                  className="text-white text-xs
                  block wd-text-font-bold translate-y-0 transition-btn-cart"
                >
                  {data.variants.length > 0 ? "Select options" : "Add to cart"}
                </span>
                {loading == null || loading == true ? (
                  <span
                    className="absolute flex justify-center items-center w-full bottom-0
                 top-0 translate-y-[29px] z-[10] btn-add-cart call-api-success"
                  >
                    <PiShoppingCartBold className="w-[22px] font-bold h-[22px] absolute
                     top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white -scale-x-100" />
                  </span>
                ) : (
                  <span className="absolute flex justify-center items-center w-full
                   bottom-0 top-0 translate-y-[29px] z-[10] btn-add-cart">
                    <Spinner color="#fff" size={15} />
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-between w-3/12">
              <a href="">
                <LuShuffle className="text-[22px] title-color hover:opacity-70 transtion-all duration-100 ease-linear" />
              </a>
              <p
                className="transtion-all duration-100 ease-linear hover:opacity-70 hover:cursor-pointer"
                onClick={() =>
                  handlerSetProductPopup({
                    active: true,
                    product: data,
                  })
                }
              >
                <LuSearch className="text-[22px] title-color hover:opacity-70 transtion-all duration-100 ease-linear" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackGroundTransparent
        bgTransparent={productPopup.active}
        onhandleBg={handlerSetProductPopup}
      />
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
