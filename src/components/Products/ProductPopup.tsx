import { RiCloseFill } from "react-icons/ri";
import SwiperCarousel from "../Swiper/SwiperCarousel";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputQuantity from "../Inputs/InputQuantity";
import ProductColor from "./ProductColor";
import { useCallback, useState } from "react";
import { useGlobalContext } from "../../Layouts";
import { postCart } from "../../api/cart.api";
import { Link, useNavigate } from "react-router-dom";
import { LuX } from "react-icons/lu";

const ProductPopup = ({
  data = {},
  onHandlerClose,
}: {
  data: any;
  onHandlerClose: () => void;
}) => {
  const cookies = useGlobalContext();

  const [variantProduct, setVariantProduct] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();

  const handlerCheckQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const handlerAddCart = useCallback(
    async (type: boolean, cart: any) => {
      if (cookies?.user?.token) {
        // setLoading(true);
        const data = await postCart(cart, cookies?.user.token);
        if (data?.status < 200 && data?.status > 300) {
          alert("Khong co squyen truy cap");
        } else {
          await cookies.hanlerTotalPrice();
          // setLoading(false);
          onHandlerClose();
          type && navigate("/checkout");
        }
      } else {
        alert("Vui lòng đăng nhập để mua hàng");
      }
    },
    [cookies?.user]
  );

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
            <Link
              to={`/product-detail/${data.id}`}
              className="flex justify-center items-center text-white
              absolute -bottom-[50px] w-full bg-primary z-[2] rounded-b-[10px] h-[42px] wd-text-font-bold
              text-[13px] transtion-all duration-100 ease-linear btn-popup-product"
            >
              View detailts
            </Link>
          </div>
        </div>
        <div className="w-6/12 overflow-auto scroll-cart-items pr-8 relative">
          <h1 className="text-[26px] title-font text-[#333333] mb-3">
            <a href="#">{data.name}</a>
          </h1>
          <div className="flex gap-1 items-center my-3">
            {/* <div className="flex items-center text-[15px] title-font">
              Đánh giá:{" "}
              <span className="ml-2">
                {Array.isArray(data?.reviews)
                  ? data?.reviews[0]?.average_rating
                  : data?.reviews_avg_stars}
              </span>
              <HiStar className="text-xl text-[#EABE12]" />
            </div> */}
            {/* <p className="text-color-black text-[15px] text-font">
              {" "}
              (2 customer reviews)
            </p> */}
          </div>
          <h3 className="color-primary title-font text-2xl wd-text-font-bold">
            ${variantProduct?.price || data.price}
          </h3>
          <p className="text-color-black text-[15px] text-font my-4">
            {data.description}
          </p>
          {data.variants.length ? (
            <div className="flex items-center gap-3 my-4 wd-text-font-bold title-color text-[15px]">
              Color:
              <ProductColor
                datas={data.variants}
                size={25}
                gap={3}
                handlerSelected={setVariantProduct}
                colorSelected={variantProduct}
              />
              {variantProduct?.id && (
                <span
                  className="flex items-center justify-center gap-1 
                    text-xs text-[#777] text-font hover:cursor-pointer call-api-success"
                  onClick={() => setVariantProduct({})}
                >
                  <LuX className="text-sm text-[#b1b1b1]" />
                  Clear
                </span>
              )}
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center gap-2 pb-4 border-b">
            <InputQuantity
              totalQuantity={variantProduct?.qty_in_stock}
              handlerChangeQuantity={handlerCheckQuantity}
            />
            <div
              onClick={() =>
                handlerAddCart(false, {
                  user_id: cookies?.user?.user_id,
                  quantity: quantity,
                  product_variant_id: variantProduct.id,
                })
              }
            >
              <ButtonPrimary
                name="Add to cart"
                className={`w-[112px] bg-primary hover:bg-[#df8c4f] ${
                  +variantProduct?.qty_in_stock < quantity &&
                  "opacity-50 pointer-events-none"
                }
                    ${
                      data?.variants?.length
                        ? variantProduct?.id || "opacity-50 pointer-events-none"
                        : ""
                    }`}
                type="button"
              />
            </div>
            <div
              onClick={() =>
                handlerAddCart(true, {
                  user_id: cookies?.user?.user_id,
                  quantity: quantity,
                  product_variant_id: variantProduct.id,
                })
              }
            >
              <ButtonPrimary
                name="Buy now"
                className={`bg-[#333333] w-[112px] hover:opacity-90 ${
                  +variantProduct?.qty_in_stock < quantity &&
                  "opacity-50 pointer-events-none"
                }
                  ${
                    data?.variants?.length
                      ? variantProduct?.id || "opacity-50 pointer-events-none"
                      : ""
                  }`}
              />
            </div>
          </div>
          <ul className="mt-5">
            <li className="nav-color wd-text-font-bold text-[15px] pb-3">
              SKU:
              <span className="text-font text-color-black pl-1">
                {" "}
                {data.category.id}
              </span>
            </li>
            <li className="nav-color wd-text-font-bold text-[15px] pb-3">
              Category:
              <span className="text-font text-color-black pl-1">
                {data.category.category_name}
              </span>
            </li>
            <li className="nav-color wd-text-font-bold text-[15px] pb-3">
              Share:
              <span className="text-font text-color-black pl-1">
                {" "}
                {data.category.id}
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
