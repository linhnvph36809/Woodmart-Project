import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import InputRange from "./InputRange";
import Product from "../../components/Products/Product";
import { LuChevronRight } from "react-icons/lu";
import { getProductByCategoryId } from "../../api/product.api";
import Spinner from "../../components/Spinner/Spinner";

const PageCategory = () => {
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      if (id) {
        const { data } = await getProductByCategoryId(id);
        setProducts(data || []);
      }
    })();
  }, [id]);

  return (
    <>
      <div className="h-[294px] bg-[url('https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-pt-sofas-opt.jpg')] flex items-center">
        <div className="content">
          <h1 className="flex items-center gap-2 title-font text-[78px] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
            Sofas
          </h1>
        </div>
      </div>
      <div className="content py-8 flex justify-between gap-5">
        <div className="w-3/12 p-5 bg-white rounded-[10px]">
          <div>
            <h5 className="mb-6 title-font nav-link text-base">
              Filter By Price
            </h5>
            <InputRange />

            {/* <form action="">
              <h5 className="mb-6 mt-8 title-font nav-link text-base">
                Filter By Brand
              </h5>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Find a Brand"
                  className="w-full pr-[40px] pl-5 outline-none text-base
                   text-color-black h-[42px] border-[1px] border-solid 
                   border-[#0000001a] rounded-[35px] placeholder:text-sm
                   text-font transtion-all duration-300 ease-linear focus:border-[#00000026]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-3 text-color-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="mt-4 pb-8 border-b-[1px] border-solid border-[#0000001b]">
                <ul>
                  <li className="flex justify-between items-center mb-3">
                    <a
                      href="#"
                      className="flex flex-1 text-base items-center gap-2 text-color-black text-font find-hover"
                    >
                      <img
                        src="./public/images/brand-hay.jpg.webp"
                        alt=""
                        width={60}
                        height={30}
                      />
                      Hay
                    </a>
                    <span
                      className="min-w-[30px] h-[20px] flex justify-center
                         items-center text-xs text-color-black rounded-[35px] 
                         border-[1px] border-solid border-[#0000001b]
                         transtion-all duration-300 ease-linear find-nav-transition
                         "
                    >
                      6
                    </span>
                  </li>
                  <li className="flex justify-between items-center mb-3">
                    <a
                      href="#"
                      className="flex flex-1 text-base items-center gap-2 text-color-black text-font find-hover"
                    >
                      <img
                        src="./public/images/brand-poliform.jpg.webp"
                        alt=""
                        width={60}
                        height={30}
                      />
                      Poliform
                    </a>
                    <span
                      className="min-w-[30px] h-[20px] flex justify-center
                         items-center text-xs text-color-black rounded-[35px] 
                         border-[1px] border-solid border-[#0000001b]
                         transtion-all duration-300 ease-linear find-nav-transition
                         "
                    >
                      6
                    </span>
                  </li>
                  <li className="flex justify-between items-center mb-3">
                    <a
                      href="#"
                      className="flex flex-1 text-base items-center gap-2 text-color-black text-font find-hover"
                    >
                      <img
                        src="./public/images/brand-vitra.jpg.webp"
                        alt=""
                        width={60}
                        height={30}
                      />
                      Vitra
                    </a>
                    <span
                      className="min-w-[30px] h-[20px] flex justify-center
                         items-center text-xs text-color-black rounded-[35px] 
                         border-[1px] border-solid border-[#0000001b]
                         transtion-all duration-300 ease-linear find-nav-transition
                         "
                    >
                      4
                    </span>
                  </li>
                </ul>
              </div>
            </form> */}
            <form action="">
              <h5 className="mb-6 mt-8 title-font nav-link text-base">Color</h5>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Find a Color"
                  className="w-full pr-[40px] pl-5 outline-none text-base
                   text-color-black h-[42px] border-[1px] border-solid 
                   border-[#0000001a] rounded-[35px] placeholder:text-sm
                   text-font transtion-all duration-300 ease-linear focus:border-[#00000026]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-3 text-color-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="mt-4 pb-8 border-b-[1px] border-solid border-[#0000001b]">
                <ul>
                  <li className="flex justify-between items-center mb-3">
                    <a
                      href="#"
                      className="flex flex-1 text-base items-center gap-2 text-color-black text-font find-hover"
                    >
                      <div className="w-[25px] h-[25px] rounded-full border-[1.5px] border-solid border-[#ececec] flex justify-center items-center">
                        <div className="w-[17px] h-[17px] rounded-full bg-[#00000033]"></div>
                      </div>
                      American Silver
                    </a>
                    <span
                      className="min-w-[30px] h-[20px] flex justify-center
                         items-center text-xs text-color-black rounded-[35px] 
                         border-[1px] border-solid border-[#0000001b]
                         transtion-all duration-300 ease-linear find-nav-transition
                         "
                    >
                      6
                    </span>
                  </li>
                  <li className="flex justify-between items-center mb-3">
                    <a
                      href="#"
                      className="flex flex-1 text-base items-center gap-2 text-color-black text-font find-hover"
                    >
                      <div className="w-[25px] h-[25px] rounded-full border-[1.5px] border-solid border-[#ececec] flex justify-center items-center">
                        <div className="w-[17px] h-[17px] rounded-full bg-[#1e4d3b]"></div>
                      </div>
                      Bone
                    </a>
                    <span
                      className="min-w-[30px] h-[20px] flex justify-center
                         items-center text-xs text-color-black rounded-[35px] 
                         border-[1px] border-solid border-[#0000001b]
                         transtion-all duration-300 ease-linear find-nav-transition
                         "
                    >
                      6
                    </span>
                  </li>
                </ul>
              </div>
            </form>
            <div>
              <h5 className="mb-6 mt-8 title-font nav-link text-base">
                Materials
              </h5>
              <div className="mt-4 pb-8 border-b-[1px] border-solid border-[#0000001b]">
                <ul>
                  <li className="flex justify-between items-center gap-2 mb-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 accent-[#df8c4f] text-white bg-white-100 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="flex flex-1 text-base items-center gap-2 text-color-black text-font find-hover"
                    >
                      American Silver
                    </label>
                    <span
                      className="min-w-[30px] h-[20px] flex justify-center
                         items-center text-xs text-color-black rounded-[35px] 
                         border-[1px] border-solid border-[#0000001b]
                         transtion-all duration-300 ease-linear find-nav-transition
                         "
                    >
                      6
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div>
              <h5 className="mb-6 mt-8 title-font nav-link text-base">
                Product Status
              </h5>
              <div className="mt-4">
                <ul>
                  <li className="flex justify-between items-center mb-3">
                    <a
                      href="#"
                      className="flex flex-1 text-base items-center gap-2 text-color-black text-font find-hover"
                    >
                      <div
                        className="w-[15px] h-[15px] border-2 border-solid border-[#0000001b] relative 
                      find-materials-transition transtion-all duration-300"
                      >
                        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      American Silver
                    </a>
                  </li>
                  <li className="flex justify-between items-center mb-3">
                    <a
                      href="#"
                      className="flex flex-1 text-base items-center gap-2 text-color-black text-font find-hover"
                    >
                      <div
                        className="w-[15px] h-[15px] border-2 border-solid border-[#0000001b] relative 
                      find-materials-transition transtion-all duration-300"
                      >
                        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      American Silver
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-9/12">
          <div className="flex justify-between items-center mb-5">
            <div className="text-font text-[15px] text-[#777777]">
              Showing 1–12 of 16 results
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex items-end wd-text-font-bold gap-2">
                Show :
                <ul className="flex gap-2 items-center">
                  <li className="text-[#777] text-font text-[15px]">
                    <a href="#">9</a>
                  </li>
                  <li className="text-[#777] text-font text-[15px]">/</li>
                  <li className="text-[#777] text-font text-[15px]">
                    <a href="#">12</a>
                  </li>
                  <li className="text-[#777] text-font text-[15px]">/</li>
                  <li className="text-[#777] text-font text-[15px]">
                    <a href="#">18</a>
                  </li>
                  <li className="text-[#777] text-font text-[15px]">/</li>
                  <li className="text-[#777] text-font text-[15px]">
                    <a href="#">24</a>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <img
                    src="./public/images/bars-1.png"
                    alt=""
                    className="w-[20px] h-[20px] object-cover"
                  />
                </div>
                <div>
                  <img
                    src="./public/images/bars-2.png"
                    alt=""
                    className="w-[20px] h-[20px] object-cover"
                  />
                </div>
                <div>
                  <img
                    src="./public/images/bars-3.png"
                    alt=""
                    className="w-[20px] h-[20px] object-cover"
                  />
                </div>
              </div>
              <div>
                <form className="max-w-sm mx-auto">
                  <select
                    id="select-sort"
                    className="text-left bg-gray-50 focus:outline-none
                      text-sm text-font text-[#777777] rounded-[35px]
                      focus:ring-blue-500 pl-[14px] block w-[220px] h-[42px]
                      border-[1px] border-solid border-[rgba(0,0,0,.1)]
                      bg-[url('./public/images/chevron-down.png')] bg-no-repeat
                      bg-right
                      "
                  >
                    <option>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          {products.length > 0 ? (
            <div className="grid grid-product-l gap-y-6 justify-between call-api-success">
              {products.map((product: any) => (
                <Product
                  key={product.id}
                  data={{
                    id: product.id,
                    name: product.product_name,
                    price: product.price,
                    reviews: product.reviews_avg_stars,
                    variants: product.variants,
                    category: product.category,
                    img: product.product_theme,
                    description: product.product_description,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="h-[500px] flex items-center justify-center">
              <Spinner size={35} />
            </div>
          )}
          {products.length > 12 && (
            <div>
              <ul className="flex gap-1 justify-center">
                <li>
                  <a
                    href="#"
                    className="min-w-[34px] h-[34px] text-sm text-white
               wd-text-font-bold rounded bg-primary flex justify-center items-center"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="min-w-[34px] h-[34px] text-sm 
               wd-text-font-bold rounded flex justify-center items-center"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="min-w-[34px] h-[34px] text-sm 
               wd-text-font-bold rounded flex justify-center items-center"
                  >
                    <LuChevronRight className="text-lg title-color" />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageCategory;
