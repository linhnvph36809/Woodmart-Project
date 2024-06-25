import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Banner from "./Banner";
import Categories from "./Categorys";
// import SlibarProduct from "./SlibarProduct";
import { useGlobalContext } from "../../Layouts";
import PostsFooter from "../../components/Footers/PostsFooter";
import ProductBestsellers from "./ProductBestsellers";
import Posts from "./Posts";
import ProductCollection from "./ProductCollection";

const Home = () => {
  const handleBgTransparent = useGlobalContext();

  return (
    <>
      <Banner />
      <div className="content">
        <div className="mb-3 pt-20">
          <h4 className="text-[32px] title-color title-font">Our categories</h4>
          <p className="text-base text-font text-color-black">
            Lots of new products and product collections
          </p>
        </div>
        <Categories />
        <div className="flex justify-between items-center mt-20 mb-4">
          <h1 className="text-[32px] title-font title-color">
            Weekly bestsellers
          </h1>
          <div>
            <ul className="flex justify-between items-center gap-5">
              <li>
                <a
                  href="#"
                  className="nav-color text-base relative
                    after:content-[''] after:bg-[#f59a57] after:w-full after:h-[2px] after:absolute after:top-full after:left-0
                     title-font hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#333333b3] text-base relative
                    after:content-[''] after:bg-[#f59a57] after:w-0 after:h-[2px] after:absolute after:top-full after:left-0
                     title-font hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
                >
                  Chairs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#333333b3] text-base relative
                    after:content-[''] after:bg-[#f59a57] after:w-0 after:h-[2px] after:absolute after:top-full after:left-0
                     title-font hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
                >
                  Sofas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#333333b3] text-base relative
                    after:content-[''] after:bg-[#f59a57] after:w-0 after:h-[2px] after:absolute after:top-full after:left-0
                     title-font hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
                >
                  Armchairs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#333333b3] text-base relative
                    after:content-[''] after:bg-[#f59a57] after:w-0 after:h-[2px] after:absolute after:top-full after:left-0
                     title-font hover:after:w-full after:transition-all after:duration-300 after:ease-linear"
                >
                  Tables
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ProductBestsellers />
        <div className="mb-5 pt-20">
          <h4 className="text-[32px] title-color title-font">
            Shopping by brands
          </h4>
          <p className="text-base text-font text-color-black">
            Discover lots products from popular brands
          </p>
        </div>
        <div className="grid grid-cols-258 gap-y-6 justify-between">
          <a href="" className="block shoping-hover">
            <div className="relative w-card bg-center bg-no-repeat bg-cover rounded-[10px] bg-[url('./public/images/brand-1.jpg')] min-h-[396px]">
              <div className="absolute top-0 bottom-0 left-0 right-0 transition-shoping rounded-[10px]  transition-all duration-300 ease-linear">
                <div className="absolute top-5 left-5 flex gap-4">
                  <div>
                    <img src="./public/images/shop-1.png" alt="" />
                  </div>
                  <div>
                    <h4 className="title-font text-white text-[22px] block">
                      Elitis
                    </h4>
                    <p className="mt-2 text-font text-[#dad9d8] text-base">
                      Talosa / France
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="block shoping-hover">
            <div className="relative w-card bg-center bg-no-repeat bg-cover rounded-[10px] bg-[url('./public/images/brand-2.jpg')] min-h-[396px]">
              <div className="absolute top-0 bottom-0 left-0 right-0 transition-shoping rounded-[10px]  transition-all duration-300 ease-linear">
                <div className="absolute top-5 left-5 flex gap-4">
                  <div>
                    <img src="./public/images/shop-2.png" alt="" />
                  </div>
                  <div>
                    <h4 className="title-font text-white text-[22px] block">
                      Hay
                    </h4>
                    <p className="mt-2 text-font text-[#dad9d8] text-base">
                      Barcelona / Spain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="block shoping-hover">
            <div className="relative w-card bg-center bg-no-repeat bg-cover rounded-[10px] bg-[url('./public/images/brand-3.jpg')] min-h-[396px]">
              <div className="absolute top-0 bottom-0 left-0 right-0 transition-shoping rounded-[10px]  transition-all duration-300 ease-linear">
                <div className="absolute top-5 left-5 flex gap-4">
                  <div>
                    <img src="./public/images/shop-3.png" alt="" />
                  </div>
                  <div>
                    <h4 className="title-font text-white text-[22px] block">
                      Kettal
                    </h4>
                    <p className="mt-2 text-font text-[#dad9d8] text-base">
                      Barcelona / Spain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="block shoping-hover">
            <div className="relative w-card bg-center bg-no-repeat bg-cover rounded-[10px] bg-[url('./public/images/brand-4.jpg')] min-h-[396px]">
              <div className="absolute top-0 bottom-0 left-0 right-0 transition-shoping rounded-[10px]  transition-all duration-300 ease-linear">
                <div className="absolute top-5 left-5 flex gap-4">
                  <div>
                    <img src="./public/images/shop-4.png" alt="" />
                  </div>
                  <div>
                    <h4 className="title-font text-white text-[22px] block">
                      LIardo
                    </h4>
                    <p className="mt-2 text-font text-[#dad9d8] text-base">
                      Barcelona / Spain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="block shoping-hover">
            <div className="relative w-card bg-center bg-no-repeat bg-cover rounded-[10px] bg-[url('./public/images/brand-5.jpg')] min-h-[396px]">
              <div className="absolute top-0 bottom-0 left-0 right-0 transition-shoping rounded-[10px]  transition-all duration-300 ease-linear">
                <div className="absolute top-5 left-5 flex gap-4">
                  <div>
                    <img src="./public/images/shop-5.png" alt="" />
                  </div>
                  <div>
                    <h4 className="title-font text-white text-[22px] block">
                      Poliform
                    </h4>
                    <p className="mt-2 text-font text-[#dad9d8] text-base">
                      Como / Italy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="mb-8 pt-20 text-center">
          <h4 className="text-[32px] title-color title-font">
            Shopping by brands
          </h4>
          <p className="text-base text-font text-color-black">
            Discover lots products from popular brands
          </p>
        </div>
      </div>
      <div className="w-[1500px] mx-auto">
        <div className="grid gap-y-6 grid-cols-279 justify-between">
          <div>
            <img
              className="rounded-xl mb-5"
              src="./public/images/product-collection-1.jpg.webp"
              alt=""
            />
            <img
              className="rounded-xl"
              src="./public/images/product-collection-2.jpg.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-xl mb-5"
              src="./public/images/product-collection-3.jpg.webp"
              alt=""
            />
            <div className="h-[185px] bg-[#e1dbd4] rounded-xl p-[30px] flex justify-center items-center">
              <div>
                <h4 className="title-font-400 text-4xl title-color">GLADØM</h4>
                <p className="text-sm mt-2 text-font text-color-black">
                  The new common language will be more simple and regular than
                  the existing languages
                </p>
              </div>
            </div>
          </div>
          <div>
            <video
              height={240}
              autoPlay
              loop
              plays-inline
              className="rounded-xl mb-5"
            >
              <source
                src="./public/videos/video-product.mp4"
                type="video/mp4"
              />
            </video>
            <img
              className="rounded-xl"
              src="./public/images/product-collection-4.jpg.webp"
              alt=""
            />
          </div>
          <div>
            <div className="h-[185px] bg-[#cad3d2] rounded-xl p-[30px] flex justify-center items-center mb-5">
              <div>
                <h4 className="title-font-400 text-4xl title-color">HÄLLAN</h4>
                <p className="text-sm mt-2 text-font text-color-black">
                  The new common language will be more simple and regular than
                  the existing languages
                </p>
              </div>
            </div>
            <img
              className="rounded-xl"
              src="./public/images/product-collection-5.jpg.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-xl mb-5"
              src="./public/images/product-collection-6.jpg.webp"
              alt=""
            />
            <img
              className="rounded-xl"
              src="./public/images/product-collection-7.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="flex items-end gap-10 mt-20">
          <div className="w-8/12">
            <div className="mb-5 pt-10">
              <h4 className="text-[32px] title-color title-font">
                Furniture collection of the week
              </h4>
              <p className="text-base text-font text-color-black">
                The most popular products from the collection
              </p>
            </div>
            <div className="">
              <ProductCollection />
            </div>
          </div>
          <div className="w-4/12">
            <img
              src="./public/images/product-collection-8.jpg.webp"
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="mt-20">
          <h4 className="text-[32px] title-color title-font">
            Rules for choosing furniture
          </h4>
        </div>
        <div className="flex items-start gap-6">
          <img src="./public/images/product-collection-10.jpg.webp" alt="" />
          <div>
            <h4 className="title-color title-font text-base mb-5">
              Whether living on your own or with a family, your living room is
              an important space.
            </h4>
            <p className="text-font text-base text-color-black">
              This room is where your family spends time together, and it is the
              room most of your guests will spend the majority of their time in.
              Choosing furniture that creates a pleasant, welcoming appearance
              while holding up against the wear and tear of everyday life is the
              key in getting this space to work for your needs.
            </p>
            <ul className="mt-5">
              <li className="flex items-center gap-2 text-font text-base text-color-black mb-2">
                <img
                  src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg"
                  alt=""
                />
                Choose items in a single color scheme and style
              </li>
              <li className="flex items-center gap-2 text-font text-base text-color-black mb-2">
                <img
                  src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg"
                  alt=""
                />
                Consider the area of the room
              </li>
              <li className="flex items-center gap-2 text-font text-base text-color-black mb-2">
                <img
                  src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg"
                  alt=""
                />
                Do not buy unnecessary pieces of furniture
              </li>
            </ul>
            <div className="relative w-full bg-repeat bg-center rounded-[200px] h-[398px] bg-[url('./public/images/banner-4.jpg')] mt-8">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <div className="text-center">
                  <p className="text-lg text-[#ffffffcc] text-font mb-2">
                    How choose furniture
                  </p>
                  <h4 className="text-[36px] title-font text-white mb-8">
                    SØLREM furniture collection
                  </h4>
                  <div className="flex justify-center">
                    <div
                      className="w-[80px] h-[80px] rounded-full flex
                    justify-center items-center border-[2px] border-solid
                    border-[#c2beb9] hover:cursor-pointer"
                      onClick={() => {}}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 text-white transtion-all duration-300 ease-in-out hover:w-6 hover:h-6 hover:text-[#c2beb9]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-between items-center">
          <h4 className="text-[32px] title-color title-font">
            Latest articles
          </h4>
          <Link
            to="blog"
            className="rounded-[35px] bg-white nav-color w-[146px] py-2 px-5 wd-text-font-bold
          text-[13px] flex items-center justify-between gap-1 h-[42px] hover:bg-[#ececec] transtion-all duration-300 ease-in-out"
          >
            Visit the Blog
            <FaArrowRightLong />
          </Link>
        </div>
        <Posts />
        <PostsFooter />
      </div>
    </>
  );
};

export default Home;
