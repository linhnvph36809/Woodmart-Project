import { LuX } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";

import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import InputPrimary from "../../components/Input/InputPrimary";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Layouts";

const Login = () => {

  const handleBgTransparent = useGlobalContext() ; 

  return (
    <div className="p-5">
      <div className="pb-5 flex justify-between border-b-[1px] border-solid boder-[#0000001b]">
        <h4 className="title-font text-xl title-color">Sign in</h4>
        <p
          className="flex items-center gap-1 title-font text-base text-[#333] hover:opacity-70
                transtion-all duration-100 ease-linear hover:cursor-pointer"
          onClick={() => handleBgTransparent("")}
        >
          <LuX className="text-xl" /> Close
        </p>
      </div>
      <form action="" className="pb-3 border-b">
        <InputPrimary label="Username or email address" required={true} />
        <InputPrimary label="Password" required={true} />
        <ButtonPrimary name="Log in" width="w-full" type="submit" />
        <div className="mt-5 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <label className="text-font text-[15px] nav-color block" htmlFor="">
              {" "}
              Remember me
            </label>
          </div>
          <p>
            <Link
              to="lost-password"
              onClick={() => handleBgTransparent("")}
              className="text-font text-[15px] block
                    color-primary hover:underline hover:opacity-70"
            >
              Lost your password?
            </Link>
          </p>
        </div>
      </form>
      <div className="text-center border-b pb-5">
        <LuUser2 className="mx-auto text-[#f1f1f1] text-[54px] my-5" />
        <p className="title-color wd-text-font-bold mb-4">No account yet?</p>
        <h4>
          <Link
            to="login"
            onClick={() => handleBgTransparent("")}
            className="text-[13px] wd-text-font-bold border-b-2
                border-solid border-[#f59a57] hover:opacity-70 transtion-all duration-100 ease-linear"
          >
            Create an Account{" "}
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
