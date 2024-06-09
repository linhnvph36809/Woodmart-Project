import { LuX } from "react-icons/lu";

import InputPrimary from "../../components/Inputs/InputPrimary";
import { Link } from "react-router-dom";

const PageCheckOut = () => {
  return (
    <>
      <div className="w-[1000px] mx-auto">
        <div className="flex items-center flex-col">
          <div className="py-5">
            <Link to="/">
            <img src="./public/images/logo.svg" alt="" />
            </Link>
          </div>
          <div className="w-[683px] pb-8">
            <div className="flex items-center gap-3 rounded-[10px] p-4 bg-[#1010100d]">
              <div
                className="text-base w-[36px] h-[36px] rounded-full
               flex justify-center items-center bg-primary text-white title-font"
              >
                <p>1</p>
              </div>
              <h3 className="text-2xl title-font title-color">
                Billing Details
              </h3>
            </div>
            <form action="">
              <div className="grid grid-cols-2 gap-x-6 mt-5">
                <div className="">
                  <InputPrimary label="First name" required/>
                </div>
                <div className="">
                  <InputPrimary label="Last name" required/>
                </div>
                <div className="">
                  <InputPrimary label="Phone" required type="number"/>
                </div>
                <div className="">
                  <InputPrimary label="Email address" required type="email"/>
                </div>
                <div className="">
                  <InputPrimary label="Country / Region" required type="email"/>
                </div>
                <div className="">
                  <InputPrimary label="Town / City" required type="email"/>
                </div>
                <div className="">
                  <InputPrimary label="Street address" required type="email"/>
                </div>
                <div className="">
                  <InputPrimary label="Postcode / ZIP (optional)" type="email"/>
                </div>
                <div className="flex mt-5 gap-2">
                  <input
                    type="checkbox"
                    className="text-color-black text-font rounded-[35px] border border-[#0000001a]"
                  />
                  <p className="text-font text-[15px] nav-color">
                    Ship to a different address?
                  </p>
                </div>
              </div>
              <div>
                <div className="mt-5 mb-10">
                  <label className="text-font text-base nav-color mb-2 block">
                    Your review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={8}
                    className="block p-2.5 w-full text-sm bg-gray-50 text-color-black text-font
                     rounded-[35px] border border-[#0000001a] focus:ring-blue-500 focus:outline-none"
                    defaultValue={""}
                  />
                </div>
                <div className="flex items-center gap-3 rounded-[10px] p-4 bg-[#1010100d] my-10">
                  <div
                    className="text-base w-[36px] h-[36px] rounded-full
               flex justify-center items-center bg-primary text-white title-font"
                  >
                    <p>2</p>
                  </div>
                  <h3 className="text-2xl title-font title-color">
                    Your Order
                  </h3>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="uppercase border-b-2 border-solid border-[rgba(0,0,0,0.075)]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 title-font text-base title-color"
                        >
                          PRODUCT
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 text-end title-font text-base title-color"
                        >
                          SUBTOTAL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 text-font flex items-center gap-3"
                        >
                          <LuX className="text-base" />
                          <img
                            src="./public/images/product-1.jpg"
                            className="w-[65px]"
                            alt="Apple Watch"
                          />
                          <div className="flex flex-col gap-3">
                            <h5>Belt - French Bistre</h5>
                            <form action="">
                              <div className="flex h-[32px] rounded-[35px] w-[80px] border-[1px] border-solid border-[rgba(0,0,0,.1)]">
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
                        </th>

                        <td className="px-2 py-4 text-font text-base text-color-black text-end">
                          $680.00
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 text-font flex items-center gap-3"
                        >
                          <LuX className="text-base" />
                          <img
                            src="./public/images/product-1.jpg"
                            className="w-[65px]"
                            alt="Apple Watch"
                          />
                          <div className="flex flex-col gap-3">
                            <h5>Belt - French Bistre</h5>
                            <form action="">
                              <div className="flex h-[32px] rounded-[35px] w-[80px] border-[1px] border-solid border-[rgba(0,0,0,.1)]">
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
                        </th>

                        <td className="px-2 py-4 text-font text-base text-color-black text-end">
                          $680.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-solid">
                  <h4 className="title-color title-font text-[15px]">
                    Subtotal
                  </h4>
                  <p className="wd-text-font-bold text-[15px] color-primary">
                    $8,400.00
                  </p>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-solid">
                  <h4 className="title-color title-font text-[15px]">
                    Shiping
                  </h4>
                  <div className="text-end">
                    <div className="flex items-center gap-2 justify-end mb-3">
                      <label className="text-font text-[15px] title-color">
                        Flat rate
                      </label>
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-end gap-2 mb-3">
                      <label className="text-font text-[15px] title-color">
                        Free shipping
                      </label>
                      <input type="radio" />
                    </div>
                    <div className="flex items-center justify-end gap-2 mb-3">
                      <label className="text-font text-[15px] title-color">
                        Local pickup
                      </label>
                      <input type="radio" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <h4 className="title-color title-font text-lg">Total</h4>
                  <h3 className="wd-text-font-bold text-[22px] color-primary">
                    $8,400.00
                  </h3>
                </div>
                <div className="rounded-[10px] bg-white">
                  <p className="text-font text-[15px] text-color-black pb-3">
                    Your order qualifies for free shipping!
                  </p>
                  <div className="bg-[#0000000f] rounded-[10px]">
                    <div className="progress-bar w-full h-[7px] bg-primary rounded-[10px]"></div>
                  </div>
                </div>
                <div className="mt-6 text-font text-sm rounded-[10px] p-3 border-[1px] border-solid border-[#f59a5733] bg-[#fef5ee] text-color-black">
                  Your order is expected to leave our warehouse within 1-7 days.
                </div>
                <div className="pb-5 border-b">
                  <div className="flex items-center gap-3 rounded-[10px] p-4 bg-[#1010100d] mt-10">
                    <div
                      className="text-base w-[36px] h-[36px] rounded-full
                    flex justify-center items-center bg-primary text-white title-font"
                    >
                      <p>3</p>
                    </div>
                    <h3 className="text-2xl title-font title-color">
                      Payment Information
                    </h3>
                  </div>
                  <div>
                    <ul className="flex gap-3 py-4">
                      <li>
                        <a href="#">
                          <button
                            className="flex justify-center items-center gap-2 mt-3 bg-white dark:bg-gray-900 border
                            border-[#0000001a] rounded-lg w-[160px] h-[45px] px-3 py-2 text-sm font-medium 
                            text-gray-800 title-font hover:bg-gray-200 focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transtion-all
                            duration-300 ease-linear"
                          >
                            <img
                              className="w-[20px] rounded"
                              src="https://admin.softmaster.vn/_default_upload_bucket/154573132_152687123342645_1913382004205201124_n.png"
                              alt=""
                            />
                            <span>Pay with VNPAY</span>
                          </button>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <button
                            className="flex justify-center items-center gap-2 mt-3 bg-white dark:bg-gray-900 border
                            border-[#0000001a] rounded-lg w-[160px] h-[45px] px-3 py-2 text-sm font-medium 
                            text-gray-800 title-font hover:bg-gray-200 focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transtion-all
                            duration-300 ease-linear"
                          >
                            <img
                              className="w-[20px] rounded"
                              src="https://media.licdn.com/dms/image/C560BAQF8Kkc256sg1g/company-logo_200_200/0/1630655399134/momo_mservice_logo?e=2147483647&v=beta&t=9lmTRindA_du_ZphKENZIoQzeb5XnPFGeK3dFKCy_8I"
                              alt=""
                            />
                            <span>Pay with MOMO</span>
                          </button>
                        </a>
                      </li>
                      <li>
                        <button
                          className="flex justify-center items-center gap-2 mt-3 bg-white dark:bg-gray-900 border
                            border-[#0000001a] rounded-lg w-[160px] h-[45px] px-3 py-2 text-sm font-medium 
                            text-gray-800 title-font hover:bg-gray-200 focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transtion-all
                            duration-300 ease-linear"
                        >
                          <span>Cash on delivery</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <button className="w-full h-[48px] bg-primary text-white wd-text-font-bold rounded-[35px] my-10">
                    Place order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCheckOut;
