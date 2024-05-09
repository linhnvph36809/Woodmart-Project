import { BsFileEarmarkText } from "react-icons/bs";
import { IoDownloadOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
const DashBoard = () => {
  return (
    <>
      <div>
        <p className="text-font text-color-black text-base">
          Hello <strong className="font-semibold">linhkimochi</strong> (not{" "}
          <strong className="font-semibold">linhkimochi</strong>?{" "}
          <a href="#" className="title-color">
            Log out
          </a>
          )
        </p>
        <p className="text-font text-color-black text-base my-5">
          From your account dashboard you can view your recent orders, manage
          <a href="" className="title-color">
            {" "}
            your shipping and billing addresses
          </a>
          , and{" "}
          <a href="" className="title-color">
            edit your password
          </a>{" "}
          <a href="" className="title-color">
            and account details.
          </a>
        </p>
        <div className="grid grid-cols-3 gap-5 mt-8">
          <div>
            <a href="#" className="block p-5 text-center shadow rounded-[10px] dashboard-hover transtion-all duration-100 ease-linear hover:bg-[#00000008]">
              <BsFileEarmarkText className="text-[50px] text-[#bbb] flex mx-auto dashboard-icon"  />
              <h3 className="wd-text-font-bold text-[#555] text-[15px] pt-3">
                Orders
              </h3>
            </a>
          </div>
          <div>
            <a href="#" className="block p-5 text-center shadow rounded-[10px] dashboard-hover transtion-all duration-300 ease-in hover:bg-[#00000008]">
              <IoDownloadOutline className="text-[50px] text-[#bbb] flex mx-auto dashboard-icon"  />
              <h3 className="wd-text-font-bold text-[#555] text-[15px] pt-3">
                Downloads
              </h3>
            </a>
          </div>
          <div>
            <a href="#" className="block p-5 text-center shadow rounded-[10px] dashboard-hover transtion-all duration-300 ease-in hover:bg-[#00000008]">
              <IoLocationOutline className="text-[50px] text-[#bbb] flex mx-auto dashboard-icon"  />
              <h3 className="wd-text-font-bold text-[#555] text-[15px] pt-3">
                Addresses
              </h3>
            </a>
          </div>
          <div>
            <a href="#" className="block p-5 text-center shadow rounded-[10px] dashboard-hover transtion-all duration-300 ease-in hover:bg-[#00000008]">
              <IoPersonCircleOutline className="text-[50px] text-[#bbb] flex mx-auto dashboard-icon"  />
              <h3 className="wd-text-font-bold text-[#555] text-[15px] pt-3">
              Account details
              </h3>
            </a>
          </div>
          <div>
            <a href="#" className="block p-5 text-center shadow rounded-[10px] dashboard-hover transtion-all duration-300 ease-in hover:bg-[#00000008]">
              <IoHeartOutline className="text-[50px] text-[#bbb] flex mx-auto dashboard-icon"  />
              <h3 className="wd-text-font-bold text-[#555] text-[15px] pt-3">
              Wishlist
              </h3>
            </a>
          </div>
          <div>
            <a href="#" className="block p-5 text-center shadow rounded-[10px] dashboard-hover transtion-all duration-300 ease-in hover:bg-[#00000008]">
              <IoLogOutOutline className="text-[50px] text-[#bbb] flex mx-auto dashboard-icon"  />
              <h3 className="wd-text-font-bold text-[#555] text-[15px] pt-3">
              Logout
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
