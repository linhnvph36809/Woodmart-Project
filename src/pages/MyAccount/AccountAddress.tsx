import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../Layouts";
import { getAddressByUserId } from "../../api/user.api";
import { LuInfo } from "react-icons/lu";

const AccountAddress = () => {
  const cookies = useGlobalContext();
  const [address, setAddress] = useState<any>();

  const handlerGetAddress = async () => {
    if (cookies.user) {
      const datas = await getAddressByUserId(
        cookies.user.user_id,
        cookies.user.token 
      );
      setAddress(datas);
    }
  };

  useEffect(() => {
    handlerGetAddress();
  }, []);



  return (
    <>
      <div>
        <p className="text-font text-base text-color-black mb-5">
          The following addresses will be used on the checkout page by default.
        </p>
        <div className="">
          {address ? (
            <div className="w-6/12">
              <h3 className="flex gap-2 items-center my-3 title-font title-color text-[22px]">
                BILLING ADDRESS{" "}
                <Link
                  to={`/my-account/edit-address/billing`}
                  className="font-semibold text-xs text-[#666] hover:text-[#f59a57] transtion-all duration-100 ease-linear"
                >
                  Edit
                </Link>
              </h3>
              <address className="text-color-black text-font text-base leading-[1.8] mb-5 font-normal italic">
                <em>
                {address.street_address}
                  <br />
                  {address.city}
                  {address.post_code}
                  <br />
                  {address.country}
                </em>
              </address>
            </div>
          ) : (
            <div
              className="flex items-center gap-4 p-5 
            bg-[#e0b252] rounded-[10px] text-white text-font 
            text-[15px]"
            >
              <LuInfo className="text-xl" />
              <p className="flex gap-2">
                No downloads available yet.
                <Link
                  to={`/my-account/add-address/billing`}
                  className="font-semibold text-sm border-b-2 border-solid border-[#ffffff4d]"
                >
                  Add address
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AccountAddress;
