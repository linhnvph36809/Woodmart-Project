import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import BannerGolobal from "../../components/BannerGlobal/BannerGlobal";
import navLinksAccount from "../../constants/NavLinkAccounts";
import { useGlobalContext } from "..";

const LayoutAccount = () => {
  const cookies = useGlobalContext();

  const navigate = useNavigate();
  const [page, setPage] = useState<string>("");
  const location = useLocation();



  useEffect(() => {
    if (!cookies?.user) {
      navigate('/')
    }
    const url = location.pathname.split("/")[2] || "";
    setPage(url);
  }, [location]);



  return (
    <>
      <BannerGolobal title="My account" />
      <div className="content py-10">
        <div className="flex justify-between">
          <div className="w-3/12 px-6 py-2 border-r-[1px] border-solid border-[#0000001b]">
            <h3 className="title-font text-lg title-color uppercase mb-3 py-2 px-3
            border-b-[1px] border-solid border-[#0000001b]">
              MY ACCOUNT
            </h3>
            <ul className="">
              {
                navLinksAccount.map((navLink, i) =>
                  <li key={i}>
                    <Link
                      to={navLink.path}
                      className={`px-3 py-[10px] block ${page == navLink.path && "bg-[#0000000f]"}
                      hover:bg-[#00000008] rounded-[10px] wd-text-font-bold text-sm title-color`}
                    >
                      {navLink.name}
                    </Link>
                  </li>
                )
              }
              <li>
                <div
                  className={`px-3 py-[10px] block hover:bg-[#00000008]
                  rounded-[10px] wd-text-font-bold text-sm title-color 
                  hover:cursor-pointer`}
                >
                  Logout
                </div>
              </li>
            </ul>
          </div>
          <div className="w-9/12 py-3 px-7">
            <Outlet context={setPage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAccount;
