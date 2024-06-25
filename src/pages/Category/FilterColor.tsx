import { memo, useEffect, useState } from "react";
import { getAllColor } from "../../api/variants.api";
import { LuX } from "react-icons/lu";

const FilterColor = memo(({handlerFindProducts,filterProducts}:{handlerFindProducts:(value:any) => void,filterProducts:any}) => {
    const [colors,setColors] = useState([]) 

    useEffect(() => {
        (async function(){
        const data = await getAllColor() ; 
        setColors(data)     
        })()
    },[])
    
    
  return (
    <form action="">
      <h5 className="mb-6 mt-8 title-font nav-link text-base">Color</h5>
      {/* <div className="relative w-full">
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
      </div> */}
      <div className="mt-4 pb-8 border-b-[1px] border-solid border-[#0000001b]">
        <ul className="max-h-[223px] overflow-auto scroll-cart-items">
            {
                colors.map((color:any) => 
          <li key={color.id} className="flex justify-between items-center mb-3 hover:cursor-pointer gap-1">
            <p
              className={`flex flex-1 text-base items-center gap-2 text-color-black ${color.id == filterProducts.colorId ? "title-font" : "text-font"}`}
              onClick={() => handlerFindProducts({...filterProducts,colorId: color.id})}
            >
              <div className={`w-[25px] h-[25px] rounded-full border-[1.5px] border-solid ${color.id == filterProducts.colorId ? "border-[#000]" : "border-[#ececec]"}  flex justify-center items-center`}>
                <div style={{backgroundColor:color.color_value }} className={`w-[17px] h-[17px] rounded-full`}></div>
              </div>
              {color.color_name}
            </p>
            {filterProducts.colorId == color.id && <LuX className="text-sm nav-color hover:opacity-60" onClick={() => handlerFindProducts({...filterProducts,colorId: ""})}/>}
          </li>
            )}
        </ul>
      </div>
    </form>
  );
});

export default FilterColor;
