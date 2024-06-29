import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Product from "../../components/Products/Product";
import { LuChevronRight } from "react-icons/lu";
import { getProductByCategoryId } from "../../api/product.api";
import SideFilter from "./SideFilter";
import Loadding from "../../components/Loadding/Loadding";

const PageCategory = () => {
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loadding, setLoadding] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      if (id) {
        setLoadding(true);
        const { data } = await getProductByCategoryId(id);
        setProducts(data || []);
        setLoadding(false);
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
        <SideFilter setProducts={setProducts} />
        <div className="w-9/12">
          <div className="flex justify-between items-center">
            {/* <div className="text-font text-[15px] text-[#777777]">
              Showing 1–12 of 16 results
            </div> */}
            {/* <div className="flex gap-6 items-center">
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
            </div> */}
          </div>
          {products.length > 0 ? (
            <div className="grid grid-product-l grid-rows-[repeat(4,398px)]  gap-y-6 justify-between call-api-success">
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
            <p className="text-center title-font title-color text-lg">No results</p>
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
      <Loadding isActive={loadding}/>
    </>
  );
};

export default PageCategory;
