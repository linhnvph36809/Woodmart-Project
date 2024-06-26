import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { GoHeart } from "react-icons/go";
import { LuShuffle } from "react-icons/lu";
import { LiaUser } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import Category from "./Category.tsx";
import SideRight from "./SideRight.tsx";
import { useGlobalContext } from "../../Layouts/index.ts";
import { getUserById } from "../../api/authentication.api.ts";


const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [showSideRight,setShowSideRight] = useState("") ; 
  const [user,setUser] = useState<any>({isLogin: false}) ; 

  const {user:check,totalPrice} = useGlobalContext() ; 

  
  
  const handlerShowSideRight = (value:string = "") => {
    setShowSideRight(value)
  }

  const handlerGetUser = useCallback(async () => {
    if(check?.user_id && check?.token){
      const data = await getUserById(check?.user_id,check?.token) ;
        setUser((state:any) => ({...state,data:data?.data,isLogin:true}));   
    }
  },[check?.user_id]) 

  

  const ref = useRef<boolean | undefined>();

  useEffect(() => {
    handlerGetUser() ; 
  },[check?.user_id])


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop == 0) {
        ref.current = false;
      } else if (currentScrollTop < lastScrollTop) {
        setFixedHeader(true);
        ref.current = true;
      } else {
        setFixedHeader(false);
      }

      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);


  return (
    <div>
      <header
        className={`bg-white ${
          lastScrollTop > 156
            ? `fixed ${
                fixedHeader
                  ? "-top-[40px] transtion-all duration-500 ease-in-out"
                  : `-top-full ${
                      ref.current && "transtion-all duration-1000 ease-linear"
                    }`
              }`
            : "absolute top-0"
        }
       right-0 left-0 z-[200]`}
      >
        <div className="bg-[#1010100d] py-2">
          <div className="flex justify-between content items-center">
            <div className="flex gap-5 items-center">
              <ul className="flex gap-5 items-center">
                <li className="pl-2">
                  <Link
                    to="gift-cards"
                    className="text-[13px] text-font nav-color hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                  >
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link
                    to="showrooms"
                    className="text-[13px] text-font nav-color hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                  >
                    Showrooms
                  </Link>
                </li>
                <li>
                  <Link
                    to="blog"
                    className="text-[13px] text-font nav-color hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="about-us"
                    className="text-[13px] text-font nav-color hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-5 items-center">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <a
                    className="text-[13px] text-font flex items-center nav-color"
                    href="#"
                  >
                    (686) 492-1042{" "}
                  </a>{" "}
                </li>
                <span className="w-[0.8px] bg-[#0000001b] block h-[18px]"></span>
                <li className="flex">
                  <a href="#" className="text-[13px] text-font nav-color">
                    Contact with an expert
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="flex h-[64px] items-center justify-between ">
            <Link to="">
              <div>
                <img
                  src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-logo-black.svg"
                  alt=""
                />
              </div>
            </Link>
            <form action="">
              <div className="relative">
                <p className="absolute left-3 top-1/2 -translate-y-1/2">
                  <LuSearch className="text-[17px] text-color-black" />
                </p>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-[736px] h-[40px] border-[0.8px]
                            border-solid border-[rgba(0,0,0,.1)] rounded-[35px] text-color-black text-sm text-font
                            outline-0 pl-9"
                />
              </div>
            </form>
            <div>
              <a
                href="#!"
                className="w-[42px] h-[42px] p-2 bg-[#1010100d] rounded-full flex items-center justify-center hover:opacity-85"
              >
                <LuShuffle className="text-xl text-[#101010b3]" />
              </a>
            </div>
            <div>
              <a
                href="#!"
                className="w-[42px] h-[42px] p-2 bg-[#1010100d] rounded-full flex items-center justify-center hover:opacity-85"
              >
                <GoHeart className="text-xl text-[#101010b3]" />
              </a>
            </div>
            <div>
              <Link
                to={user?.isLogin ? "/my-account" : "/"}
                onClick={() => user?.isLogin ? () => {} : handlerShowSideRight("login")}
                className="flex bg-[#1010100d] gap-1 header-font
                h-[42px] p-2 items-center hover:opacity-85 justify-center
                rounded-[42px] text-sm w-[150px] text-[#101010b3]"
              >
                <LiaUser className="text-2xl text-[#101010b3]" />
                {user?.isLogin ? user?.data?.email :" Login / Register"}
              </Link>
            </div>
            <div>
              <a
                href="#!"
                onClick={() => handlerShowSideRight("cart")}
                className="flex relative bg-[#1010100d] gap-2 bg-color-black
                text-white header-font h-[42px] p-3 items-center hover:opacity-85
                justify-center rounded-[42px] text-sm min-w-[90px] text-[#101010b3]"
              >
                <PiShoppingCartBold className="text-xl" />
                ${totalPrice ? totalPrice :  0} 
                <p
                  className="absolute -top-1 -right-1 bg-white color-primary min-w-[18px] h-[18px]
                rounded-full text-[11px] flex items-center justify-center p-1 border-[0.1px] border-solid border-[#0000002b]"
                >
                  16
                </p>
              </a>
            </div>
          </div>
          <div className="py-3 flex items-center justify-between">
            <Category />
            <div className="text-[12px] nav-color title-font bg-[#e0eaf0] rounded-[35px] min-h-[28px] flex items-center px-3 hover:bg-[#d7e5ed] hover:cursor-pointer">
              Free shipping for all orders of $1.300
            </div>
          </div>
        </div>
      </header>
      <SideRight showSideRight={showSideRight} handlerShowSideRight={handlerShowSideRight}/>
    </div>
  );
};

export default Header;
