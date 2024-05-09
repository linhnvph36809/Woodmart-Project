const ForgetPassword = () => {
  return (
    <>
      <div className="content py-20">
        <div className="w-[470px] mx-auto">
          <p className="py-5 text-font text-color-black text-base border-b border-[#0000001b]">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </p>
          <form action="">
            <div className="mt-5">
              <label className="text-font text-base nav-color mb-2 block">
              Username or email
              </label>
              <input
                type="text"
                className="text-color-black w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
              />
            </div>
            <button
                    className="w-full h-[42px] flex justify-center items-center wd-text-font-bold text-white
                   text-[13px] rounded-[32px] bg-primary mt-5"
                  >
                    Reset password
                  </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
