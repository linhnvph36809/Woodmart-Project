const PageDetail = () => {
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
                <a href="#" className="nav-color text-[15px] title-font">
                  Daiki Studio
                </a>
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
          <div className="flex justify-between gap-8 mt-3">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-5">
                <div className="relative">
                  <img
                    src="./public/images/product-1-min-1.jpg"
                    alt=""
                    className="rounded-[10px]"
                  />
                  <div className="absolute top-4 right-4 z-[5] rounded-xl bg-[#438E44] text-white min-w-[50px] text-xs uppercase text-center wd-text-font-bold py-1">
                    New
                  </div>
                </div>
                <div>
                  <img
                    src="./public/images/product-1.jpg"
                    alt=""
                    className="rounded-[10px]"
                  />
                </div>
                <div>
                  <img
                    src="./public/images/product-1-min-2.jpg"
                    alt=""
                    className="rounded-[10px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-[553.338px]">
              <div className="flex justify-between">
                <h1 className="text-[28px] title-font-800">Daiki Studio</h1>
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
                  AR-210
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
                The compact and well-proportioned silhouette of both the seats
                and the small sofa, opens up to a new way of using the dining
                space: as a living room within the living room, a hybrid
                situation.
              </p>
              <h1 className="text-[34px] title-font-800 color-primary py-4">
                <span>$</span>1,200.00
              </h1>
              <div className="flex justify-between gap-2">
                <div>
                  <form action="">
                    <div className="flex h-[42px] rounded-[35px] border-[1px] border-solid border-[rgba(0,0,0,.1)]">
                      <div className="flex justify-center items-center w-[25px] border-r-[1px] border-solid border-[rgba(0,0,0,.1)] hover:cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 nav-color font-semibold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="w-[30px] text-center focus:outline-none text-sm text-font text-color-black"
                        value={1}
                      />

                      <div className="flex justify-center items-center w-[25px] border-l-[1px] border-solid border-[rgba(0,0,0,.1)] hover:cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 nav-color font-semibold"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  className="flex-1 flex justify-center items-center
                 bg-primary rounded-[35px] text-[13px] text-white
                  wd-text-font-bold hover:bg-[#df8c4f]"
                >
                  Add to cart
                </button>
                <button
                  className="flex-1 flex justify-center items-center 
                bg-[#101010e6] rounded-[35px] text-[13px] text-white 
                wd-text-font-bold hover:opacity-90"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
            <div>
                123
            </div>
      </div>
    </>
  );
};

export default PageDetail;
