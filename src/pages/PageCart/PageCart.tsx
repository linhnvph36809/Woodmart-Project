import { LuX } from "react-icons/lu";

const PageCart = () => {
  return (
    <>
      <div className="content pt-10 pb-20">
        <div className="flex justify-between gap-6">
          <div className="w-8/12">
            <div className="rounded-[10px] p-5 bg-white">
              <p className="text-font text-[15px] text-color-black pb-3">
                Your order qualifies for free shipping!
              </p>
              <div className="bg-[#0000000f] rounded-[10px]">
              <div className="progress-bar w-full h-[7px] bg-primary rounded-[10px]"></div>
              </div>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg my-5 p-4 pb-8 bg-white">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-base border-b-[1px] border-solid title-color title-font uppercase bg-white">
                  <tr>
                    <th scope="col" className="">
                      <span className="sr-only">Action</span>
                    </th>
                    <th scope="col" className="w-[104px]">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-3 py-4">
                      PRODUCT
                    </th>
                    <th scope="col" className="px-6 py-4">
                      PRICE
                    </th>
                    <th scope="col" className="px-6 py-4">
                      QUANTITY
                    </th>
                    <th scope="col" className="px-6 py-4 text-end">
                      SUBTOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="pl-2 py-4">
                      <LuX className="text-base" />
                    </td>
                    <td className="py-4">
                      <img
                        src="./public/images/product-1.jpg"
                        className="w-[80px]"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
                      <a href="" className="text-[#333333] title-font text-sm">
                        Twible
                      </a>
                    </td>
                    <td className="px-6 py-4 text-[#777] text-font text-sm">
                      $2,800.00
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <form action="">
                        <div className="flex h-[42px] rounded-[35px] w-[80px] border-[1px] border-solid border-[rgba(0,0,0,.1)]">
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
                    </td>
                    <td className="px-6 py-4 text-end text-base wd-text-font-bold color-primary">
                      $8,400.00
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="pl-2 py-4">
                      <LuX className="text-base" />
                    </td>
                    <td className="py-4">
                      <img
                        src="./public/images/product-1.jpg"
                        className="w-[80px]"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
                      <a href="" className="text-[#333333] title-font text-sm">
                        Twible
                      </a>
                    </td>
                    <td className="px-6 py-4 text-[#777] text-font text-sm">
                      $2,800.00
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <form action="">
                        <div className="flex h-[42px] rounded-[35px] w-[80px] border-[1px] border-solid border-[rgba(0,0,0,.1)]">
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
                    </td>
                    <td className="px-6 py-4 text-end text-base wd-text-font-bold color-primary">
                      $8,400.00
                    </td>
                  </tr>
                </tbody>
              </table>
              <form action="">
                <div className="flex gap-2 mt-8">
                  <input
                    type="text"
                    className="text-color-black w-[230px] h-[42px] text-font 
                    rounded-[35px] border border-[#0000001a] text-sm
                    pl-4 nav-color text-color-black
                    "
                    placeholder="Coupon code"
                  />
                  <button className="w-[126px] h-[42px] flex justify-center items-center wd-text-font-bold text-white text-[13px] rounded-[32px] bg-primary">
                    Apply coupon
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-between">
              <div className="flex w-[287px] items-start gap-5 pl-4 py-5 bg-white rounded-[10px]">
                <img
                  src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-phone-1.svg"
                  alt=""
                />
                <div>
                  <h4 className="text-lg title-font title-color">
                    Have questions?
                  </h4>
                  <p className="text-font text-color-black text-[15px] pr-10 pt-2">
                    Our experts are here to help!{" "}
                    <u>
                      <em className="text-[#3366ff]">Call us</em>
                    </u>
                  </p>
                </div>
              </div>
              <div className="flex w-[287px] items-start gap-5 pl-4 py-5 bg-white rounded-[10px]">
                <img
                  src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-sequre.svg"
                  alt=""
                />
                <div>
                  <h4 className="text-lg title-font title-color">
                    Secure shopping ?
                  </h4>
                  <p className="text-font text-color-black text-[15px] pr-10 pt-2">
                    All transactions are protected by SSL.
                  </p>
                </div>
              </div>
              <div className="flex w-[287px] items-start gap-5 pl-4 py-5 bg-white rounded-[10px]">
                <img
                  src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-privacy.svg"
                  alt=""
                />
                <div>
                  <h4 className="text-lg title-font title-color">
                    Privacy protection
                  </h4>
                  <p className="text-font text-color-black text-[15px] pr-10 pt-2">
                    Your privacy is always our top priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="bg-white p-6 rounded-[10px]">
              <h3 className="title-font title-color text-[22px]">
                Cart Totals
              </h3>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">Subtotal</h4>
                <p className="text-font text-[15px] text-color-black">
                  $8,400.00
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">Subtotal</h4>
                <div className="text-end">
                  <p className="text-font text-[15px] nav-color">
                    Free shipping
                  </p>
                  <p className="text-font text-[15px] text-color-black py-3">
                    Shipping to <strong>AL</strong>.
                  </p>
                  <h4>
                    <a
                      href="#"
                      className="wd-text-font-bold color-primary text-[15px]"
                    >
                      Change address
                    </a>
                  </h4>
                </div>
              </div>
              <div className="flex justify-between items-center py-4">
                <h4 className="title-color title-font text-[15px]">Total</h4>
                <h3 className="wd-text-font-bold text-[22px] color-primary">
                  $8,400.00
                </h3>
              </div>
              <button
                className="w-full h-[42px] flex justify-center items-center
             wd-text-font-bold text-white text-[13px] rounded-[32px] bg-primary mt-2"
              >
                Proceed to checkout
              </button>
            </div>
            <div className="mt-5 bg-white p-6 rounded-[10px]">
                <div className="mb-6">
                    <h3 className="text-lg title-font title-color mb-2">Payment methods:</h3>
                    <div>
                        <img src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/payment-methods.jpg" alt="" />
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg title-font title-color mb-3">Delivery information:</h3>
                    <p className="text-font text-sm text-color-black">Although we don’t think you’ll ever want one, we’ll gladly provide a refund if it’s requested within 14 days of purchase.</p>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg title-font title-color mb-3">14 Days Money Back Guarantee:</h3>
                    <p className="text-font text-sm text-color-black">Although we don’t think you’ll ever want one, we’ll gladly provide a refund if it’s requested within 14 days of purchase.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCart;
