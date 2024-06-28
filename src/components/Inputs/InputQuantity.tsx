import { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";

const InputQuantity = ({id,handlerChangeQuantity = null ,defaultValue = 1,totalQuantity}: {id?:string|number,handlerChangeQuantity?:any,defaultValue?:number,totalQuantity:number}) => {
  
  const [quantity, setQuantity] = useState<number>(defaultValue);
  
  return (
    <>
      <div>
          <div className="flex h-[42px] rounded-[35px] border-[1px] border-solid border-[rgba(0,0,0,.1)]">
            <div
              className={`flex justify-center items-center w-[25px]
              border-r-[1px] btn-quantity
              border-solid border-[rgba(0,0,0,.1)] rounded-l-[35px]
              hover:cursor-pointer transtion-all duration-300 ease-linear
              ${quantity == 1 && "opacity-20 pointer-events-none"}
              `}
              onClick={() =>
                setQuantity((state: number) => 
                  {const result = state <= 1 ? 1 : --state
                    handlerChangeQuantity(result, id)
                    return result ; 
                  })
              }
            >
              <RiSubtractFill className="w-3 h-3 nav-color font-semibold transtion-all duration-300 ease-linear icon-quantity" />
            </div>
            <input
              type="text"
              className="w-[30px] text-center focus:outline-none text-sm text-font text-color-black"
              value={quantity}
            />
            <div
              className={`flex justify-center items-center w-[25px]
            border-l-[1px] btn-quantity border-solid border-[rgba(0,0,0,.1)]
            rounded-r-[35px] hover:cursor-pointer ${quantity >= totalQuantity  && "opacity-20 pointer-events-none"}
            ${quantity >= 20  && "opacity-20 pointer-events-none"}`}
              onClick={() =>
                setQuantity((state: number) => {
                  const result = state >= 20 ? 20 : ++state ;
                  handlerChangeQuantity(result, id)
                  return result ; 
                })
              }
            >
              <RiAddFill className="w-3 h-3 nav-color font-semibold transtion-all duration-300 ease-linear icon-quantity" />
            </div>
          </div>
      </div>
    </>
  );
};

export default InputQuantity;
