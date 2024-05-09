import { Outlet } from "react-router-dom";
import BannerGolobal from "../components/BannerGlobal/BannerGlobal";
const LayoutAccount = () => {
  return (
    <>
      <BannerGolobal title="My account" />
      <div className="content py-10">
        <div className="flex justify-between">
          <div className="w-3/12 px-6 py-2 border-r-[1px] border-solid border-[#0000001b]">
            <h3 className="title-font text-lg title-color uppercase mb-3 py-2 px-3 border-b-[1px] border-solid border-[#0000001b]">MY ACCOUNT</h3>
            <ul className="">
                <li><a href="" className="px-3 py-[10px] block bg-[#0000000f] rounded-[10px] wd-text-font-bold text-sm title-color">Dashboard</a></li>
                <li><a href="" className="px-3 py-[10px] block hover:bg-[#00000008] rounded-[10px] wd-text-font-bold text-sm title-color">Orders</a></li>
                <li><a href="" className="px-3 py-[10px] block hover:bg-[#00000008] rounded-[10px] wd-text-font-bold text-sm title-color">Downloads</a></li>
                <li><a href="" className="px-3 py-[10px] block hover:bg-[#00000008] rounded-[10px] wd-text-font-bold text-sm title-color">Addresses</a></li>
                <li><a href="" className="px-3 py-[10px] block hover:bg-[#00000008] rounded-[10px] wd-text-font-bold text-sm title-color">Account details</a></li>
                <li><a href="" className="px-3 py-[10px] block hover:bg-[#00000008] rounded-[10px] wd-text-font-bold text-sm title-color">Wishlist</a></li>
                <li><a href="" className="px-3 py-[10px] block hover:bg-[#00000008] rounded-[10px] wd-text-font-bold text-sm title-color">Logout</a></li>


            </ul>
          </div>
          <div className="w-9/12 py-3 px-7">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAccount;
