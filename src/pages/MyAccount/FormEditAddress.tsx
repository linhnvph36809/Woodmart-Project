const FormEditAddress = ({title}:{title:string}) => {
  return (
    <>
      <div>
        <h3 className="text-[22px] title-font title-color mb-5">
          {title}
        </h3>
        <form action="">
          <div className="flex gap-10">
            <div className="w-6/12">
              <label className="text-font text-[15px] nav-color mb-2 block">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
              />
            </div>
            <div className="w-6/12">
              <label className="text-font text-[15px] nav-color mb-2 block">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
              />
            </div>
          </div>
          <div className="mt-5">
            <label className="text-font text-[15px] nav-color mb-2 block">
              Company name (optional) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
            />
          </div>
          <div className="mt-5">
            <label className="text-font text-[15px] nav-color mb-2 block">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <select
              name=""
              id=""
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
            >
              <option value="">2</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="text-font text-[15px] nav-color mb-2 block">
              Street address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
            />
          </div>
          <div className="mt-5">
            <label className="text-font text-[15px] nav-color mb-2 block">
              Street address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
            />
            <input
              type="text"
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a] mt-4"
            />
          </div>
          <div className="mt-5">
            <label className="text-font text-[15px] nav-color mb-2 block">
              Postcode / ZIP (optional)
            </label>
            <input
              type="text"
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
            />
          </div>
          <div className="mt-5">
            <label className="text-font text-[15px] nav-color mb-2 block">
              Town / City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
            />
          </div>
          <div className="mt-5">
            <label className="text-font text-[15px] nav-color mb-2 block">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
            />
          </div>
          <div className="mt-5">
            <label className="text-font text-[15px] nav-color mb-2 block">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
            />
          </div>
          <button className="mt-5 w-[126px] h-[42px] flex justify-center items-center wd-text-font-bold text-white text-[13px] rounded-[32px] bg-primary">
            Save Address
          </button>
        </form>
      </div>
    </>
  );
};

export default FormEditAddress;
