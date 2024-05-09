import BannerGolobal from "../../components/BannerGlobal/BannerGlobal";
import SlibarImage from "./SlibarImage";
const PageShowroom = () => {
  return (
    <>
      <BannerGolobal title="Showrooms" />
      <div className="content py-10">
        <div className="flex justify-between mt-12">
          <div className="w-[786px] pt-3">
            <h1 className="text-[46px] title-font nav-color title-color">
              Milano showroom
            </h1>
            <p className="text-font text-base text-color-black py-3">
              Furniture is an invariable attribute of any room. It is they who
              give it the right atmosphere, making the space cozy and
              comfortable. More and more often, customers want to place an order
              in an online store, when you can sit down at the computer in your
              free time, arrange the furniture in the photo and calmly buy the
              furniture you like.
            </p>
            <div className="flex gap-6 mt-5">
              <div>
                <img src="./public/images/shop-1.png" alt="" />
              </div>
              <div>
                <img src="./public/images/shop-2.png" alt="" />
              </div>
              <div>
                <img src="./public/images/shop-3.png" alt="" />
              </div>
              <div>
                <img src="./public/images/shop-4.png" alt="" />
              </div>
              <div>
                <img src="./public/images/shop-5.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-[436px]">
            <div>
              <p className="title-color header-font text-[15px]">
                Milano Piazzale
              </p>
              <p className="title-color header-font text-[15px]">Ferrara</p>
              <p className="title-color header-font text-[15px]">
                Via Mincio, 4, 20139
              </p>
            </div>
            <div className="my-5">
              <p className="title-color header-font text-[15px]">
                Monday – Friday{" "}
                <span className="text-font">09:00 – 17:00 </span>
              </p>
            </div>
            <div>
              <p className="title-color header-font text-[15px]">
                xtemos@gmail.com
              </p>
              <p className="title-color header-font text-[15px]">
                (686) 492-1044
              </p>
            </div>
            <div className="mt-5">
              <a
                href="#"
                className="text-[12px] text-white wd-text-font-bold w-[110px] h-[42px] flex justify-center items-center bg-primary rounded-[35px] px-4 "
              >
                Make a route
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1659px] mx-auto">
          <SlibarImage/>
      </div>
      <div className="content pt-12">
      <div className="flex justify-between mt-12">
          <div className="w-[786px] pt-3">
            <h1 className="text-[46px] title-font nav-color title-color">
              Milano showroom
            </h1>
            <p className="text-font text-base text-color-black py-3">
              Furniture is an invariable attribute of any room. It is they who
              give it the right atmosphere, making the space cozy and
              comfortable. More and more often, customers want to place an order
              in an online store, when you can sit down at the computer in your
              free time, arrange the furniture in the photo and calmly buy the
              furniture you like.
            </p>
            <div className="flex gap-6 mt-5">
              <div>
                <img src="./public/images/shop-1.png" alt="" />
              </div>
              <div>
                <img src="./public/images/shop-2.png" alt="" />
              </div>
              <div>
                <img src="./public/images/shop-3.png" alt="" />
              </div>
              <div>
                <img src="./public/images/shop-4.png" alt="" />
              </div>
              <div>
                <img src="./public/images/shop-5.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-[436px]">
            <div>
              <p className="title-color header-font text-[15px]">
                Milano Piazzale
              </p>
              <p className="title-color header-font text-[15px]">Ferrara</p>
              <p className="title-color header-font text-[15px]">
                Via Mincio, 4, 20139
              </p>
            </div>
            <div className="my-5">
              <p className="title-color header-font text-[15px]">
                Monday – Friday{" "}
                <span className="text-font">09:00 – 17:00 </span>
              </p>
            </div>
            <div>
              <p className="title-color header-font text-[15px]">
                xtemos@gmail.com
              </p>
              <p className="title-color header-font text-[15px]">
                (686) 492-1044
              </p>
            </div>
            <div className="mt-5">
              <a
                href="#"
                className="text-[12px] text-white wd-text-font-bold w-[110px] h-[42px] flex justify-center items-center bg-primary rounded-[35px] px-4 "
              >
                Make a route
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1659px] mx-auto mt-10">
          <SlibarImage/>
      </div>
    </>
  );
};

export default PageShowroom;
