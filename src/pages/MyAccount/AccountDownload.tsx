import { LuInfo } from "react-icons/lu";
const AccountDownload = () => {
  return (
    <>
      <div className="flex items-center gap-4 p-5 
      bg-[#e0b252] rounded-[10px] text-white text-font 
      text-[15px]"
      > 
      <LuInfo className="text-xl"/> 
      <p className="flex gap-2">No downloads available yet.<a href="#" className="font-semibold text-sm border-b-2 border-solid border-[#ffffff4d]">Browse products</a></p>
      </div>
    </>
  );
};

export default AccountDownload;
