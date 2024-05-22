import { HiStar } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import SwiperCarousel from "../Swiper/SwiperCarousel"
import ButtonPrimary from "../Buttons/ButtonPrimary"
import { useGlobalContext } from "../../Layouts";
const ProductPopup = () => {
  const handleBgTransparent = useGlobalContext() ; 

    return (
        <>
            <div className={`fixed z-[500] top-1/2 left-1/2 -translate-y-1/2
            -translate-x-1/2 w-[920px] h-[535px] bg-white rounded-[10px] flex
            justify-between gap-[30px] py-8`}>
                <div className="w-6/12 pl-8">
                    <div className="h-full product-hover relative overflow-hidden">
                        <SwiperCarousel className="rounded-[10px] h-full" sizeIcon="text-3xl" />
                        <a href="#" className="flex justify-center items-center text-white
                absolute -bottom-[50px] w-full bg-primary z-[2] rounded-b-[10px] h-[42px] wd-text-font-bold
                text-[13px] transtion-all duration-100 ease-linear btn-popup-product
                ">View detailts</a>
                    </div>
                </div>
                <div className="w-6/12 overflow-auto scroll-cart-items pr-8 relative">
                    <h1 className="text-[26px] title-font text-[#333333] mb-3">
                        <a href="#">Curve</a>
                    </h1>
                    <a href="#">
                        <img src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-brand-poliform.jpg" alt="" className="w-[65px]" />
                    </a>
                    <div className="flex gap-2 items-center my-3">
                        <div className="flex items-center">
                            <HiStar className="text-lg text-[#EABE12]" />
                            <HiStar className="text-lg text-[#EABE12]" />
                            <HiStar className="text-lg text-[#EABE12]" />
                            <HiStar className="text-lg text-[#EABE12]" />
                            <HiStar className="text-lg text-[#EABE12]" />
                        </div>
                        <p className="text-color-black text-[15px] text-font"> (2 customer reviews)</p>
                    </div>
                    <h3 className="color-primary title-font text-2xl wd-text-font-bold">$320.00</h3>
                    <p className="text-color-black text-[15px] text-font my-4">Soft curves and tapering slender lines are inspired by modern design. The result
                        is a classic yet contemporary chair, ideally combined with the table by the same name.</p>
                    <div className="flex items-center gap-4 my-4 wd-text-font-bold title-color text-[15px]">
                        Color:
                        <ul className="flex gap-2">
                            <li
                                className="w-[35px] h-[35px] rounded-full border-[1px]
                                border-solid border-[#00000013] flex justify-center items-center 
                                hover:border-[1px] hover:border-solid hover:border-[#000] transtion-all duration-200 ease-linear"
                            >
                                <div className="w-[27px] h-[27px] rounded-full bg-black"></div>
                            </li>
                            <li
                                className="w-[35px] h-[35px] rounded-full border-[1px]
                                border-solid border-[#00000013] flex justify-center items-center 
                                hover:border-[1px] hover:border-solid hover:border-[#000] transtion-all duration-200 ease-linear"
                            >
                                <div className="w-[27px] h-[27px] rounded-full bg-black"></div>
                            </li>
                            <li
                                className="w-[35px] h-[35px] rounded-full border-[1px]
                                border-solid border-[#00000013] flex justify-center items-center 
                                hover:border-[1px] hover:border-solid hover:border-[#000] transtion-all duration-200 ease-linear"
                            >
                                <div className="w-[27px] h-[27px] rounded-full bg-black"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2 pb-4 border-b">
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
                        <ButtonPrimary name="Add to cart" className="w-[112px] bg-primary hover:bg-[#df8c4f]" type="submit" />
                        <ButtonPrimary name="Buy now" className="bg-[#333333] w-[112px] hover:opacity-90" />
                    </div>
                    <ul className="mt-5">
                        <li className="nav-color wd-text-font-bold text-[15px] pb-3">SKU:<span className="text-font text-color-black pl-1">CH-832</span></li>
                        <li className="nav-color wd-text-font-bold text-[15px] pb-3">Category:<span className="text-font text-color-black pl-1"> Chairs</span></li>
                        <li className="nav-color wd-text-font-bold text-[15px] pb-3">Share:<span className="text-font text-color-black pl-1">CH-832</span></li>

                    </ul>
                </div>
                <button className="absolute -top-10 -right-2 z-[10]" onClick={() => handleBgTransparent()}>
                    <RiCloseFill className="text-[30px] text-white transtion-all duration-200 ease-linear hover:opacity-80" />
                </button>
                <div className="absolute bottom-0 w-6/12 right-0 h-[50px] background-linear rounded-b-[10px]">        
                </div>
            </div>
        </>
    )
}

export default ProductPopup