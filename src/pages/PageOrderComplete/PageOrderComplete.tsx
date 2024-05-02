import { LuMoveRight } from "react-icons/lu";
import Footer from "../../components/Footer/Footer";
const PageOrderComplete = () => {
  return (
    <>
      <div className="w-[800px] mx-auto text-center">
        <div className="py-5 flex justify-center">
          <img src="../public/images/logo.svg" alt="" />
        </div>
      </div>
      <div
        className="flex items-center w-full h-[236px] bg-[url(https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-pt-def-opt.jpg)]
        bg-cover
        "
      >
        <div className="ml-[332px]">
          <ul className="flex items-center gap-5">
            <li>
              <a href="#" className="title-font text-[#e5e8e1] text-[22px]">
                SHOPPING CART
              </a>
            </li>
            <li>
              <a href="#">
                <LuMoveRight className="text-[22px] text-[#e5e8e1]" />
              </a>
            </li>
            <li>
              <a href="#" className="title-font text-[#e5e8e1] text-[22px]">
                CHECKOUT
              </a>
            </li>
            <li>
              <a href="#">
                <LuMoveRight className="text-[22px] text-[#e5e8e1]" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="title-font text-white text-[22px] after:content-[''] after:h-[2px] relative after:absolute after:bottom-0  after:left-0 after:right-0 after:bg-[#f59a57]"
              >
                ORDER COMPLETE
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[800px] mx-auto pb-10">
        <div className="text-center border-dashed rounded-[10px] border-[#7a9c59] text-[#7a9c59] border-2 p-6 text-[22px] my-10 wd-text-font-bold">
          Thank you. Your order has been received.
        </div>
        <div>
          <ul className="flex justify-between">
            <li className="p-5 text-center text-font text-[15px] text-color-black border-r-[1px] border-solid">
              Order number:
              <h5 className="wd-text-font-bold title-color mt-3">2020</h5>
            </li>
            <li className="p-5 text-center text-font text-[15px] text-color-black border-r-[1px] border-solid">
              Date:
              <h5 className="wd-text-font-bold title-color mt-3">
                May 1, 2024
              </h5>
            </li>
            <li className="p-5 text-center text-font text-[15px] text-color-black border-r-[1px] border-solid">
              Email:
              <h5 className="wd-text-font-bold title-color mt-3">
                linhnvph36809@fpt.edu.vn
              </h5>
            </li>
            <li className="p-5 text-center text-font text-[15px] text-color-black border-r-[1px] border-solid">
              Total:
              <h5 className="wd-text-font-bold title-color mt-3">$898.00</h5>
            </li>
            <li className="p-5 text-center text-font text-[15px] text-color-black">
              Payment method:
              <h5 className="wd-text-font-bold title-color mt-3">
                Cash on delivery
              </h5>
            </li>
          </ul>
        </div>
        <p className="text-font text-color-black text-[15px] py-8">
          Pay with cash upon delivery.
        </p>
        <div>
          <h3 className="title-font text-[22px] title-color uppercase mb-5">
            ORDER DETAILS
          </h3>
          <div>
          <div className="flex justify-between items-center py-4 border-b border-solid">
              <h4 className="title-color title-font text-base">PRODUCT</h4>
              <p className="title-color title-font text-base">
              TOTAL
              </p>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-solid">
              <h4 className="title-color title-font text-[15px]">Giro LR <span className="text-color-black">× 2</span></h4>
              <p className="wd-text-font-bold text-[15px] color-primary">
              $898.00
              </p>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-solid">
              <h4 className="title-color title-font text-[15px]">Subtotal:</h4>
              <p className="wd-text-font-bold text-[15px] color-primary">
              $898.00
              </p>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-solid">
              <h4 className="title-color title-font text-[15px]">Shipping:</h4>
              <p className="text-font text-[15px] text-color-black">
              Local pickup
              </p>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-solid">
              <h4 className="title-color title-font text-[15px]">Payment method:</h4>
              <p className="text-font text-[15px] text-color-black">
              Cash on delivery
              </p>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-solid">
              <h4 className="title-color title-font text-[15px]">TOTAL:</h4>  
              <h4 className="text-[22px] wd-text-font-bold color-primary">$898.00</h4>
            </div>
          </div>
        </div>
        <div>
        <h3 className="title-font text-[22px] title-color uppercase mt-10 mb-5">
        BILLING ADDRESS
        </h3>
        <address className="text-color-black text-font text-base leading-[1.8] mb-5 font-normal italic">
        <em>Nguyễn Văn Linh
        <br />
        Đường Mỹ Đình
        <br />
        Nam Từ Liêm 100000
        <br />
        Vietnam
        <br />
        0377893303
        <br />
        linhnvph36809@fpt.edu.vn</em>
        </address>
        </div>
      </div>
    </>
  );
};

export default PageOrderComplete;
