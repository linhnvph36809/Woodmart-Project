const AccountAddress = () => {
  return (
    <>
      <div>
        <p className="text-font text-base text-color-black mb-5">
          The following addresses will be used on the checkout page by default.
        </p>
        <div className="flex">
          <div className="w-6/12">
            <h3 className="flex gap-2 items-center my-3 title-font title-color text-[22px]">BILLING ADDRESS <a href="" className="font-semibold text-xs text-[#666] hover:text-[#f59a57] transtion-all duration-100 ease-linear">Edit</a></h3>
            <address className="text-color-black text-font text-base leading-[1.8] mb-5 font-normal italic">
              <em>
                Nguyễn Văn Linh
                <br />
                Đường Mỹ Đình
                <br />
                Nam Từ Liêm 100000
                <br />
                Vietnam
                <br />
                0377893303
                <br />
                linhnvph36809@fpt.edu.vn
              </em>
            </address>
          </div>
          <div className="w-6/12">
            <h3 className="flex gap-2 items-center my-3 title-font title-color text-[22px]">SHIPPING ADDRESS<a href="" className="font-semibold text-xs text-[#666] hover:text-[#f59a57] transtion-all duration-100 ease-linear">Edit</a></h3>
            <address className="text-color-black text-font text-base leading-[1.8] mb-5 font-normal italic">
              <em>
                Nguyễn Văn Linh
                <br />
                Đường Mỹ Đình
                <br />
                Nam Từ Liêm 100000
                <br />
                Vietnam
                <br />
                0377893303
                <br />
                linhnvph36809@fpt.edu.vn
              </em>
            </address>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountAddress;
