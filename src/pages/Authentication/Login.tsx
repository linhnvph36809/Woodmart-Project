import BannerGolobal from "../../components/BannerGlobal/BannerGlobal";
const Login = () => {
  return (
    <>
      <BannerGolobal title="My account" />
      <div className="content py-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex gap-10">
            <div className="w-6/12">
              <div>
                <h3 className="title-font title-color text-[22px] uppercase">
                  Login
                </h3>
                <form action="">
                  <div className="mt-5">
                    <label className="text-font text-[15px] nav-color mb-2 block">
                      Username or email address{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="text-color-black w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
                    />
                  </div>
                  <div className="mt-5">
                    <label className="text-font text-[15px] nav-color mb-2 block">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      className="text-color-black w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
                    />
                  </div>
                  <button
                    className="w-full h-[42px] flex justify-center items-center wd-text-font-bold text-white
                   text-[13px] rounded-[32px] bg-primary mt-5"
                  >
                    Login
                  </button>
                  <div className="my-4 flex justify-between">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        className="text-color-black text-font rounded-[35px] border border-[#0000001a]"
                      />
                      <p className="text-font text-[15px] nav-color">
                        Remember me
                      </p>
                    </div>
                    <a
                      href=""
                      className="text-font color-primary text-[15px] hover:underline hover:opacity-60"
                    >
                      Lost your password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-6/12 text-center px-10 border-l-[1px] border-solid border-[#0000001b]">
              <h3 className="title-font title-color text-[22px] uppercase">
                REGISTER
              </h3>
              <p className="text-font text-color-black text-[15px] my-5">
                Registering for this site allows you to access your order status
                and history. Just fill in the fields below, and we'll get a new
                account set up for you in no time. We will only ask you for
                information necessary to make the purchase process faster and
                easier.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="py-3 px-5 bg-white rounded-[35px] title-font nav-color text-sm hover:opacity-75"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
