import { useCallback, useState } from "react";
import FilterColor from "./FilterColor";
import FilterMaterials from "./FilterMaterials";
import InputRange from "./InputRange";
import { useParams } from "react-router-dom";
import { filterByProducts } from "../../api/product.api";

const SideFilter = ({setProducts} : {setProducts: any}) => {
    let { id } = useParams();

  const [filterProducts, setFilterpProducts] = useState({
    priceFrom: "",
    priceTo: "",
    colorId: "",
    materialsIds: [],
  });

  const handlerFindProducts = useCallback(async (value: any) => {
    const materialsIds = value.materialsIds.map((materialsId:string|number) => "&material_id[]="+materialsId).join('')
    const apiUrl = `?category_id=${id}&color_id=${value.colorId}&from=${value.priceFrom}&to=${value.priceTo}${materialsIds}`;
    console.log(apiUrl);
    const {data: datas} = await filterByProducts(apiUrl) ; 
    setProducts(datas)
    setFilterpProducts(value);
  },[filterProducts])

  console.log(filterProducts);
  


  return (
    <>
      <div className="w-3/12 p-5 bg-white rounded-[10px] max-h-[1000px]">
        <div>
          <h5 className="mb-6 title-font nav-link text-base">
            Filter By Price
          </h5>
          <InputRange
            handlerFindProducts={handlerFindProducts}
            filterProducts={filterProducts}
          />

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
          <FilterColor
            handlerFindProducts={handlerFindProducts}
            filterProducts={filterProducts}
          />
          <FilterMaterials
            handlerFindProducts={handlerFindProducts}
            filterProducts={filterProducts}
          />
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
    </>
  );
};

export default SideFilter;
