import { LuX } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCookies } from 'react-cookie';

import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import InputPrimary from "../../components/Inputs/InputPrimary";
import { login } from "../../api/authentication.api";

const Login = ({ onClose }: { onClose: () => void }) => { 

  const [_,setCookie] = useCookies(['user']);
  
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const datas = await login(data) ; 
    if(datas.status_code == 200){
      setCookie('user', {token: datas.access_token, user_id: datas.data.id}, { path: '/',
      maxAge: 3600})
      alert("Login successful")
      onClose() ;
    }else{
      alert(datas.message)
    }
  };
  
  return (
    <div className="p-5">
      <div className="pb-5 flex justify-between border-b-[1px] border-solid boder-[#0000001b]">
        <h4 className="title-font text-xl title-color">Sign in</h4>
        <p
          className="flex items-center gap-1 title-font text-base text-[#333] hover:opacity-70
                transtion-all duration-100 ease-linear hover:cursor-pointer"
          onClick={() => onClose()}
        >
          <LuX className="text-xl" /> Close
        </p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="pb-3 border-b"
      >
        <div>
          <InputPrimary
            label="Email address"
            required={true}
            register={{ ...register("email", { required: true }) }}
            type="email"
          />
            {errors.email && <p className="text-sm text-font text-red-500 pt-1">This field is required</p>}
        </div>
        <div>
          <InputPrimary
            label="Password"
            required={true}
            type="password"
            register={{ ...register("password", { required: true }) }}
          />
            {errors.password && <p className="text-sm text-font text-red-500 pt-1">This field is required</p>}
        </div>
        <ButtonPrimary name="Log in" type="submit" />
        <div className="mt-5 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" id="remember" />
            <label
              className="text-font text-[15px] nav-color block"
              htmlFor="remember"
            >
              {" "}
              Remember me
            </label>
          </div>
          <p>
            <Link
              to="lost-password"
              onClick={() => onClose()}
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
            onClick={() => onClose()}
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
