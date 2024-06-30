import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { LuShuffle, LuX } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuRuler } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import { HiOutlineStar } from "react-icons/hi";
import ZoomImages from "./ZoomImage";

import {
  getProductByCategoryId,
  getProductDetail,
  getReviewProduct,
} from "../../api/product.api";

import InputQuantity from "../../components/Inputs/InputQuantity";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import SlibarProduct from "../Homes/SlibarProduct";
import ProductColor from "../../components/Products/ProductColor";
import { postCart } from "../../api/cart.api";
import { useGlobalContext } from "../../Layouts";
import Loadding from "../../components/Loadding/Loadding";
import { RiStarFill } from "react-icons/ri";

const PageDetail = () => {
  const { id } = useParams();
  const cookies = useGlobalContext();

  const [product, setProduct] = useState<any>({});
  const [productByCategory, setProductByCategory] = useState<any>([]);
  const [variantProduct, setVariantProduct] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [reviews, setReviews] = useState<any>([]);

  let userStars = {
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
  };

  const navigate = useNavigate();

  const stars = [1, 2, 3, 4, 5];

  const handlerCheckQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const handlerCountStar = () => {
    reviews.forEach((review: any) => {
      switch (+review.stars) {
        case 1:
          userStars = {
            ...userStars,
            oneStar: ++userStars.oneStar,
          };
          break;
        case 2:
          userStars = {
            ...userStars,
            twoStar: ++userStars.twoStar,
          };
          break;
        case 3:
          userStars = {
            ...userStars,
            threeStar: ++userStars.threeStar,
          };
          break;
        case 4:
          userStars = {
            ...userStars,
            fourStar: ++userStars.fourStar,
          };
          break;
        case 5:
          userStars = {
            ...userStars,
            fiveStar: ++userStars.fiveStar,
          };
          break;
        default:
          break;
      }
    });
    console.log("start",userStars);

  };

  handlerCountStar();


  useEffect(() => {
    (async function () {
      if (id) {
        const product = getProductDetail(id);
        const productByCategorys = getProductByCategoryId(id);
        const reviews = getReviewProduct(id);

        setLoading(true);
        Promise.all([product, productByCategorys, reviews])
          .then((values) => {
            setProduct(values[0].data);
            setProductByCategory(values[1].data.slice(0, 11));
            setReviews(values[2]);
            setLoading(false);
          })
          .catch(() => {});
      }
    })();
  }, [id]);

  console.log(reviews);

  const handlerAddCart = useCallback(
    async (type: boolean, cart: any) => {
      if (cookies?.user?.token) {
        setLoading(true);
        const data = await postCart(cart, cookies?.user.token);
        if (data?.status < 200 && data?.status > 300) {
          alert("Khong co squyen truy cap");
        } else {
          await cookies.hanlerTotalPrice();
          setLoading(false);
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
      <div className="bg-white pb-10">
        <div className="content">
          <div className="pt-3 flex justify-between">
            <ul className="flex gap-2">
              <li>
                <a href="#" className="text-color-black text-[15px] text-font">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-color-black text-[15px] text-font">
                  /
                </a>
              </li>
              <li>
                <a href="#" className="text-color-black text-[15px] text-font">
                  Armchairs
                </a>
              </li>
              <li>
                <a href="#" className="text-color-black text-[15px] text-font">
                  /
                </a>
              </li>
              <li>
                <a href="#" className="nav-color text-[15px] title-font"></a>
              </li>
            </ul>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 title-color hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 title-color hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 title-color hover:cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-start gap-8 mt-3">
            <div className="flex-1">
              {Array.isArray(product?.product?.variants) &&
              product?.product?.variants.length > 0 ? (
                <ZoomImages datas={product.product.variants} />
              ) : (
                <img
                  src={product.product?.product_theme}
                  alt=""
                  className="w-full h-full"
                />
              )}
            </div>
            <div className="w-[553.338px]">
              <div className="flex justify-between">
                <h1 className="text-[28px] title-font-800">
                  {product.product?.product_name}
                </h1>
                <a href="#" className="block p-2 shadow rounded-[6.6px]">
                  <img
                    src="./public/images/brand-minotti.jpg.webp"
                    alt=""
                    className="w-[80px]"
                  />
                </a>
              </div>
              <div className="nav-color wd-text-font-bold text-base mt-3">
                SKU:{" "}
                <span className="text-[15px] text-font text-color-black">
                  {product.product?.id}
                </span>
              </div>
              <div className="p-5 my-5 flex gap-4 bg-[#10101008] rounded-[10px]">
                <img
                  src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/promotions.svg"
                  alt=""
                  className="py-3"
                />
                <div className="flex flex-col justify-between">
                  <h4 className="title-font text-lg title-color">
                    Soft Edge collection
                  </h4>
                  <p className="text-[15px] text-color-black text-font">
                    Hurry and get discounts up to 20%{" "}
                    <a href="" className="text-black underline">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-base text-color-black text-font">
                {product.product?.product_description}
              </p>
              <h1 className="text-[34px] title-font-800 color-primary py-4">
                <span>$</span>
                {variantProduct.price || product.product?.price}
              </h1>
              {product.product?.variants?.length ? (
                <div className="flex items-center gap-3 mb-5 title-font">
                  Color:{" "}
                  <ProductColor
                    datas={product.product.variants}
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
              <form action="">
                <div className="flex justify-between items-center gap-2">
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
                    className="w-full"
                  >
                    <ButtonPrimary
                      name="Add to cart"
                      type="button"
                      className={`w-full bg-primary m-0 hover:bg-[#df8c4f]
                      ${
                        +variantProduct?.qty_in_stock < quantity &&
                        "opacity-50 pointer-events-none"
                      }
                        ${
                          product?.product?.variants?.length
                            ? variantProduct?.id ||
                              "opacity-50 pointer-events-none"
                            : ""
                        }
                      `}
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
                    className="w-full"
                  >
                    <ButtonPrimary
                      name="Buy now"
                      type="button"
                      className={`w-full bg-[#101010e6] m-0 hover:bg-[#333333]
                        ${
                          +variantProduct?.qty_in_stock < quantity &&
                          "opacity-50 pointer-events-none"
                        }
                        ${
                          product?.variant?.length
                            ? variantProduct?.id ||
                              "opacity-50 pointer-events-none"
                            : ""
                        }`}
                    />
                  </div>
                </div>
              </form>
              <div>
                <ul className="flex gap-5 my-10">
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 items-center nav-color wd-text-font-bold text-[15px]"
                    >
                      <LuShuffle />
                      Compare
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 items-center nav-color wd-text-font-bold text-[15px]"
                    >
                      <LuHeart />
                      Add to wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex gap-2 items-center nav-color wd-text-font-bold text-[15px]"
                    >
                      <LuRuler />
                      Size Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="pb-5 border-b-[1px] border-solid border-[#e4e4e4]">
                  <div className="flex justify-between items-center">
                    <p className="text-sm title-font title-color">
                      {" "}
                      Shipping and returns{" "}
                    </p>
                    <LuChevronDown className="text-color-black" />
                  </div>
                  <div>
                    <p className="text-font text-color-black text-sm pt-4">
                      Authorities in our business will tell in no uncertain
                      terms that Lorem Ipsum is that huge, huge no no to
                      forswear forever. Not so fast, I’d say, there are some
                      redeeming factors in favor of greeking text, as its use is
                      merely the symptom of a worse problem to take into
                      consideration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="content">
          <div className="bg-white rounded-[10px] flex gap-6 px-4 pt-2 pb-8">
            <div className="w-6/12">
              <h1 className="text-xl title-color title-font pt-3">
                Product details
              </h1>
              <p className="py-5 text-font text-sm text-color-black">
                {" "}
                Made possible by exploring innovative molded plywood techniques,
                Iskos-Berlin’s Soft Edge Chair blends strong curves with extreme
                lightness to create a three-dimensionality not usually possible
                with 2-D plywood.
              </p>
              <ul>
                {/* <li className="flex justify-between py-4 border-b-[1px] border-solid border-[#0000001b]">
                  <h4 className="wd-text-font-bold text-sm title-color">
                    Brand
                  </h4>
                  <span className="text-font text-color-black text-[13px]">
                    Hay
                  </span>
                </li> */}
                {/* <li className="flex justify-between py-4 border-b-[1px] border-solid border-[#0000001b]">
                  <h4 className="wd-text-font-bold text-sm title-color">
                    Collection
                  </h4>
                  <span className="text-font text-color-black text-[13px]">
                    Emmanuel Gallina
                  </span>
                </li> */}
                <li className="flex justify-between py-4 border-b-[1px] border-solid border-[#0000001b]">
                  <h4 className="wd-text-font-bold text-sm title-color">
                    Color
                  </h4>
                  <div className="flex gap-2">
                    {product?.product?.variants &&
                    product?.product?.variants.length > 0 ? (
                      product.product.variants.map((variant: any) => (
                        <span
                          key={variant.id}
                          className="text-font text-color-black text-[13px]"
                        >
                          {variant.color.color_name}
                        </span>
                      ))
                    ) : (
                      <span className="text-font text-color-black text-[13px]">
                        Trống
                      </span>
                    )}
                  </div>
                </li>
                <li className="flex justify-between py-4 border-b-[1px] border-solid border-[#0000001b]">
                  <h4 className="wd-text-font-bold text-sm title-color">
                    Materials
                  </h4>
                  <span className="text-font text-color-black text-[13px]">
                    {Array.isArray(product?.product?.variants) &&
                    product?.product?.variants?.length > 0
                      ? product.product.variants[0].material.material_value
                      : "Trống"}
                  </span>
                </li>
                {/* <li className="flex justify-between py-4 border-b-[1px] border-solid border-[#0000001b]">
                  <h4 className="wd-text-font-bold text-sm title-color">
                    General dimensions
                  </h4>
                  <span className="text-font text-color-black text-[13px]">
                    Fabric , Wood
                  </span>
                </li> */}
              </ul>
            </div>
            <div className="w-6/12">
              <h1 className="text-xl title-color title-font pt-3">
                Description
              </h1>
              <img
                src="./public/images/about-brand-1.jpg.webp"
                alt=""
                className="rounded-[10px] my-5"
              />
              <p className="text-font text-sm text-color-black pt-3">
                {product.product?.product_description}
              </p>
              <ul className="mt-5 pl-2">
                <li className="flex items-center gap-2 text-font text-sm text-color-black mb-2">
                  <img
                    src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg"
                    alt=""
                  />
                  Choose items in a single color scheme and style
                </li>
                <li className="flex items-center gap-2 text-font text-sm text-color-black mb-2">
                  <img
                    src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg"
                    alt=""
                  />
                  Consider the area of the room
                </li>
                <li className="flex items-center gap-2 text-font text-sm text-color-black mb-2">
                  <img
                    src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg"
                    alt=""
                  />
                  Do not buy unnecessary pieces of furniture
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="bg-white rounded-[10px] my-16 p-4">
            <h1 className="text-xl title-color title-font pt-3">About brand</h1>
            <div className="flex mt-5 gap-8">
              <div className="w-[650px]">
                <img
                  src="../public/images/brand-about-flos.jpg.webp"
                  alt=""
                  className="rounded-[10px] h-[430px] object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[26px] title-color title-font">
                    MINOTTI
                  </h3>
                  <div className="flex items-center gap-4 pr-16">
                    <div className="flex items-center gap-1 text-[15px] title-font">
                      Share:
                      <img
                        className="w-[30px]"
                        src="../public/images/facebook.png"
                        alt=""
                      />
                      <img
                        className="w-[30px]"
                        src="../public/images/x.png"
                        alt=""
                      />
                      <img
                        className="w-[30px]"
                        src="../public/images/pinterest.png"
                        alt=""
                      />
                      <img
                        className="w-[30px]"
                        src="../public/images/in.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[12px] text-white wd-text-font-bold w-[110px] h-[42px] flex justify-center items-center bg-primary rounded-[35px] px-4 "
                      >
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-color-black text-font text-sm pt-1">
                  Horsens / Denmark
                </div>
                <p className="py-5 text-font text-sm text-color-black">
                  {" "}
                  The company reinterprets tradition by calling upon
                  international designers to work with them and developing new
                  technologies and materials to guarantee innovative and
                  surprising results. Passion is the engine that drives the
                  brand.
                </p>
                <div className="flex justify-between pr-16 pl-8 my-4">
                  <div className="text-center">
                    <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-[#f59a571a]">
                      <img
                        src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-slide-icon-chair-1.svg"
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                    <h4 className="text-base title-font title-color pt-3">
                      Chairs
                    </h4>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-[#f59a571a]">
                      <img
                        src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-tables-primary.svg"
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                    <h4 className="text-base title-font title-color pt-3">
                      Tables
                    </h4>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-[#f59a571a]">
                      <img
                        src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-armchairs-primary.svg"
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                    <h4 className="text-base title-font title-color pt-3">
                      Armchairs
                    </h4>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-[#f59a571a]">
                      <img
                        src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-storage-primary.svg"
                        alt=""
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                    <h4 className="text-base title-font title-color pt-3">
                      Storages
                    </h4>
                  </div>
                </div>
                <p className="py-5 text-font text-sm text-color-black">
                  {" "}
                  Nordic design inspires HAY's taste for clean lines, simple
                  geometric shapes, and quality materials like wood, metal, and
                  textiles. Anyway, you still use Lorem Ipsum and rightly so, as
                  it will always have a place in the web workers toolbox.
                </p>
              </div>
            </div>
          </div> */}
          <div className="bg-white rounded-[10px] my-16 p-4 pb-5">
            <h1 className="text-xl title-color title-font">Customer Reviews</h1>
            <div className="flex justify-between gap-10">
              <div className="w-6/12">
                <div className="text-center mb-5">
                  <h1 className="title-font text-[60px]">
                    {Math.floor(+product.average_rating)}
                  </h1>
                  <div className="flex justify-center mb-2">
                    {stars.map((value, i) => (
                      <RiStarFill
                        key={i}
                        className={`text-[#bbb] text-xl
                            transtion-all duration-300 ease-linear
                            cursor-pointer focus:text-black-500 ${
                              Math.floor(+product.average_rating) >= value
                                ? "text-[#eabe12]"
                                : ""
                            }`}
                      />
                    ))}
                  </div>
                  <span className="text-font text-base text-color-black">
                    {product?.product?.reviews.length} reviews
                  </span>
                </div>
                <div className="flex justify-between items-center gap-3 mb-2">
                  <div className="flex items-center">
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                  </div>
                  <div className="bg-[#0000000f] w-[540px] h-[12px] rounded-[10px] ">
                    <div className="h-[12px] bg-primary rounded-[10px] w-1/2"></div>
                  </div>
                  <div className="text-font text-base text-color-black">{userStars.fiveStar}</div>
                </div>
                <div className="flex justify-between items-center gap-3 mb-2">
                  <div className="flex items-center">
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <HiOutlineStar className="text-xl text-[#bbb]" />
                  </div>
                  <div className="bg-[#0000000f] w-[540px] h-[12px] rounded-[10px] ">
                    <div className="h-[12px] bg-primary rounded-[10px] w-1/2"></div>
                  </div>
                  <div className="text-font text-base text-color-black">{userStars.fourStar}</div>
                </div>
                <div className="flex justify-between items-center gap-3 mb-2">
                  <div className="flex items-center">
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                  </div>
                  <div className="bg-[#0000000f] w-[540px] h-[12px] rounded-[10px] ">
                    <div className="h-[12px] bg-primary rounded-[10px] w-1/2"></div>
                  </div>
                  <div className="text-font text-base text-color-black">{userStars.threeStar}</div>
                </div>
                <div className="flex justify-between items-center gap-3 mb-2">
                  <div className="flex items-center">
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                  </div>
                  <div className="bg-[#0000000f] w-[540px] h-[12px] rounded-[10px] ">
                    <div className="h-[12px] bg-primary rounded-[10px] w-1/2"></div>
                  </div>
                  <div className="text-font text-base text-color-black">{userStars.twoStar}</div>
                </div>
                <div className="flex justify-between items-center gap-3 mb-2">
                  <div className="flex items-center">
                    <RiStarFill className="text-xl text-[#EABE12]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                    <RiStarFill className="text-xl text-[#bbb]" />
                  </div>
                  <div className="bg-[#0000000f] w-[540px] h-[12px] rounded-[10px] ">
                    <div className="h-[12px] bg-primary rounded-[10px] w-1/2"></div>
                  </div>
                  <div className="text-font text-base text-color-black">{userStars.oneStar}</div>
                </div>
              </div>
              <div className="w-6/12">
                <div>
                  {reviews.map((review: any) => (
                    <div className="pb-3 mb-5 border-b">
                      <div className="flex items-center gap-1">
                        <h3
                          className="header-font text-[15px] mb-2 px-3 rounded-[30px] bg-[#b3b0b0]
                    text-white"
                        >
                          @{review.user.email}{" "}
                        </h3>
                        <span className="text-font text-xs nav-color">
                          {review.created_at}
                        </span>
                      </div>
                      <p className="text-font nav-color text-base">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h5 className="text-sm title-color title-font mb-5">
                {product?.product?.reviews?.length} REVIEWS FOR CAN
              </h5>
            </div>
            <p className="text-font text-[15px] text-color-black">
              There are no reviews matching the given conditions.
            </p>
          </div>
          {productByCategory && productByCategory.length > 0 && (
            <div>
              <h3 className="title-color title-font text-[22px] mb-3">
                Related Products
              </h3>
              <div>
                <SlibarProduct
                  columns={{ sm: 2, lg: 4, xl: 5 }}
                  datas={productByCategory}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {<Loadding isActive={loading} />}
    </>
  );
};

export default PageDetail;
