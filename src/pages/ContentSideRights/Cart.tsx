import { LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { useGlobalContext } from "../../Layouts/index.ts";
const CartSideRight = () => {

  const handleBgTransparent = useGlobalContext() ; 
  
  return (
    <div className="p-4 flex flex-col h-full justify-between">
      <div className="pb-5 flex justify-between border-b-[1px] border-solid boder-[#0000001b]">
        <h4 className="title-font text-xl title-color">Shopping cart</h4>
        <p className="flex items-center gap-1 title-font text-base text-[#333] hover:opacity-70
        transtion-all duration-100 ease-linear hover:cursor-pointer" onClick={() => handleBgTransparent("")}>
          <LuX className="text-xl" /> Close
        </p>
      </div>
      <div className="h-[450px] px-3 relative">
        <ul className="h-full absolute left-0 right-0 scroll-cart-items overflow-auto">
          <li>
            <a href="" className="flex justify-between py-4 border-b">
              <div className="flex items-start gap-3">
                <img
                  src="./public/images/product-1.jpg"
                  alt=""
                  className="w-[65px]"
                />
                <div>
                  <h4 className="title-font title-color text-[15px]">
                    Giro LR
                  </h4>
                  <span className="flex gap-1 items-center text-xs text-[#bbb]">
                    1 ×{" "}
                    <h4 className="wd-text-font-bold text-sm color-primary">
                      $449.00
                    </h4>{" "}
                  </span>
                </div>
              </div>
              <a
                href=""
                className="flex justify-center items-center nav-color w-[20px] h-[20px] rounded-full transtion-all duration-100 ease-linear hover:shadow hover:shadow-[#0000001a]"
              >
                ×
              </a>
            </a>
          </li>
          <li>
            <a href="" className="flex justify-between py-4 border-b">
              <div className="flex items-start gap-3">
                <img
                  src="./public/images/product-1.jpg"
                  alt=""
                  className="w-[65px]"
                />
                <div>
                  <h4 className="title-font title-color text-[15px]">
                    Giro LR
                  </h4>
                  <span className="flex gap-1 items-center text-xs text-[#bbb]">
                    1 ×{" "}
                    <h4 className="wd-text-font-bold text-sm color-primary">
                      $449.00
                    </h4>{" "}
                  </span>
                </div>
              </div>
              <a
                href=""
                className="flex justify-center items-center nav-color w-[20px] h-[20px] rounded-full transtion-all duration-100 ease-linear hover:shadow hover:shadow-[#0000001a]"
              >
                ×
              </a>
            </a>
          </li>
          <li>
            <a href="" className="flex justify-between py-4 border-b">
              <div className="flex items-start gap-3">
                <img
                  src="./public/images/product-1.jpg"
                  alt=""
                  className="w-[65px]"
                />
                <div>
                  <h4 className="title-font title-color text-[15px]">
                    Giro LR
                  </h4>
                  <span className="flex gap-1 items-center text-xs text-[#bbb]">
                    1 ×{" "}
                    <h4 className="wd-text-font-bold text-sm color-primary">
                      $449.00
                    </h4>{" "}
                  </span>
                </div>
              </div>
              <a
                href=""
                className="flex justify-center items-center nav-color w-[20px] h-[20px] rounded-full transtion-all duration-100 ease-linear hover:shadow hover:shadow-[#0000001a]"
              >
                ×
              </a>
            </a>
          </li>
          <li>
            <a href="" className="flex justify-between py-4 border-b">
              <div className="flex items-start gap-3">
                <img
                  src="./public/images/product-1.jpg"
                  alt=""
                  className="w-[65px]"
                />
                <div>
                  <h4 className="title-font title-color text-[15px]">
                    Giro LR
                  </h4>
                  <span className="flex gap-1 items-center text-xs text-[#bbb]">
                    1 ×{" "}
                    <h4 className="wd-text-font-bold text-sm color-primary">
                      $449.00
                    </h4>{" "}
                  </span>
                </div>
              </div>
              <a
                href=""
                className="flex justify-center items-center nav-color w-[20px] h-[20px] rounded-full transtion-all duration-100 ease-linear hover:shadow hover:shadow-[#0000001a]"
              >
                ×
              </a>
            </a>
          </li>
          <li>
            <a href="" className="flex justify-between py-4 border-b">
              <div className="flex items-start gap-3">
                <img
                  src="./public/images/product-1.jpg"
                  alt=""
                  className="w-[65px]"
                />
                <div>
                  <h4 className="title-font title-color text-[15px]">
                    Giro LR
                  </h4>
                  <span className="flex gap-1 items-center text-xs text-[#bbb]">
                    1 ×{" "}
                    <h4 className="wd-text-font-bold text-sm color-primary">
                      $449.00
                    </h4>{" "}
                  </span>
                </div>
              </div>
              <a
                href=""
                className="flex justify-center items-center nav-color w-[20px] h-[20px] rounded-full transtion-all duration-100 ease-linear hover:shadow hover:shadow-[#0000001a]"
              >
                ×
              </a>
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <p className="py-4 border-y flex justify-between items-center wd-text-font-bold title-color text-xl">
          Subtotal:
          <h3 className="color-primary text-xl wd-text-font-bold">$7,657.00</h3>
        </p>
        <div>
          <div className="rounded-[10px] py-5 bg-white">
            <p className="text-font text-[15px] text-color-black pb-3">
              Your order qualifies for free shipping!
            </p>
            <div className="bg-[#0000000f] rounded-[10px]">
              <div className="progress-bar w-full h-[7px] bg-primary rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div>
          <Link to="cart" className="w-full h-[42px] flex justify-center 
          items-center wd-text-font-bold title-color text-[13px] rounded-[32px] bg-[#efefef]"
          onClick={() => handleBgTransparent("")}>  
            View cart
          </Link>
          <ButtonPrimary name="Checkout" className="w-full bg-primary mt-3 hover:bg-[#df8c4f]"/>
        </div>
      </div>
    </div>
  );
};

export default CartSideRight;
