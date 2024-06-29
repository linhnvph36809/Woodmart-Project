import { Link } from "react-router-dom";

import navLinksAccount from "../../constants/NavLinkAccounts";
import { IoLogOutOutline } from "react-icons/io5";
import { useGlobalContext } from "../../Layouts";
const DashBoard = () => {

  const {handlerLogout} = useGlobalContext()
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
          {navLinksAccount.map((navLink, i) =>
            navLink.path !== "" &&
            <div key={i}>
              <Link to={navLink.path} className="block p-5 text-center
              shadow rounded-[10px] dashboard-hover transtion-all duration-100 ease-linear hover:bg-[#00000008]">
                {navLink.icon}
                <h3 className="wd-text-font-bold text-[#555] text-[15px] pt-3">
                  {navLink.name}
                </h3>
              </Link>
            </div>
          )}
          <div>
            <div className="block p-5 text-center hover:cursor-pointer
              shadow rounded-[10px] dashboard-hover transtion-all
              duration-100 ease-linear hover:bg-[#00000008]" onClick={handlerLogout}>
              <IoLogOutOutline className="text-[50px] text-[#bbb] flex mx-auto dashboard-icon" />
              <h3 className="wd-text-font-bold text-[#555] text-[15px] pt-3">
                Logout
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
