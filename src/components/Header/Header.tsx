import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className="bg-[#1010100d] py-2">
          <div className="flex justify-between content items-center">
            <div className="flex gap-5 items-center">
              <ul className="flex gap-5 items-center">
                <li className="pl-2">
                  <a
                    href="#"
                    className="text-[13px] text-font nav-color hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                  >
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-font nav-color hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                  >
                    Showrooms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[13px] text-font nav-color hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                  >
                    About Us
                  </a>
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
                <img src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-logo-black.svg" alt="" />
              </div>
            </Link>
            <form action="">
              <div className="relative">
                <p className="absolute left-3 top-1/2 -translate-y-1/2">
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
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
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
                href=""
                className="w-[42px] h-[42px] p-2 bg-[#1010100d] rounded-full flex items-center justify-center hover:opacity-85"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#101010b3]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a
                href=""
                className="w-[42px] h-[42px] p-2 bg-[#1010100d] rounded-full flex items-center justify-center hover:opacity-85"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#101010b3]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a
                href=""
                className="flex bg-[#1010100d] gap-2 header-font h-[42px] p-2 items-center hover:opacity-85 justify-center rounded-[42px] text-sm w-[150px] text-[#101010b3]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                Login / Register
              </a>
            </div>
            <div>
              <a
                href=""
                className="flex relative bg-[#1010100d] gap-2 bg-color-black text-white header-font h-[42px] p-3 items-center hover:opacity-85 justify-center rounded-[42px] text-sm min-w-[90px] text-[#101010b3]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#101010b3] text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                $0.00
                <p className="absolute -top-1 -right-1 bg-white color-primary min-w-[18px] h-[18px] rounded-full text-[11px] flex items-center justify-center p-1 border-[0.1px] border-solid border-[#0000002b]">
                  16
                </p>
              </a>
            </div>
          </div>
          <div className="py-3 flex items-center justify-between">
            <ul className="flex gap-7">
              <li className="">
                <Link
                  to="product-category"
                  className="flex items-center gap-2 header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  <img
                    src="./public/images/Chair.svg"
                    alt=""
                    className="w-[18px]"
                  />
                  Chairs
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/tables.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Tables
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/sofa.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Sofas
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/armchairs.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Armchairs
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/beds.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Beds
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/storage.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Storage
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/textiles.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Textiles
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/lighting.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Lighting
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/toys.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Toys
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="./public/images/decor.svg"
                  alt=""
                  className="w-[18px]"
                />
                <a
                  href="#"
                  className="header-font text-[14px] block hover:text-[#f59a57] hover:transition-all hover:duration-300 hover:ease-linear"
                >
                  Decor
                </a>
              </li>
            </ul>
            <div className="text-[12px] nav-color title-font bg-[#e0eaf0] rounded-[35px] min-h-[28px] flex items-center px-3 hover:bg-[#d7e5ed] hover:cursor-pointer">
              Free shipping for all orders of $1.300
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
