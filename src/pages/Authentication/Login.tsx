import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import BannerGolobal from "../../components/BannerGlobal/BannerGlobal";
import InputPrimary from "../../components/Inputs/InputPrimary";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { login, postRegister } from "../../api/authentication.api";

const Login = () => {

  const [_, setCookie] = useCookies(["user"]);
  const [selected, setSelected] = useState<string>("login");
  const navigate = useNavigate() ; 

  type Input = {
    email: string;
    password: string;
    full_name?: string
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async (data) => {
    const datas = await login(data);
    if (datas.status_code == 200) {
      setCookie(
        "user",
        { token: datas.access_token, user_id: datas.data.id },
        { path: "/", maxAge: 3600 }
      );
      alert("Login successful");
      navigate('/')

    } else {
      alert(datas.message);
    }
  };

  const onSubmit2: SubmitHandler<Input> = async (data) => {
    const datas = await postRegister(data) ;
    console.log(datas);
    
    if (datas.status < 300 && datas.status > 100) {
      setCookie(
        "user",
        { token: datas.access_token, user_id: datas.data.id },
        { path: "/", maxAge: 3600 }
      );
      alert("Register successful");
      navigate('/')
    } else {
      alert(datas.message);
    }
  }


  

  return (
    <>
      <BannerGolobal title="My account" />
      <div className="content py-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex gap-10">
            {selected == "login" && (
              <div className="w-6/12">
                <div>
                  <h3 className="title-font title-color text-[22px] uppercase">
                    Login
                  </h3>
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-5">
                      <InputPrimary
                        label="Username or email address"
                        required
                        register={{ ...register("email", { required: true }) }}
                      />
                      {errors.email && (
                        <p className="text-sm text-font text-red-500 pt-1">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div className="mt-5">
                      <InputPrimary
                        label="Password"
                        required
                        type="password"
                        register={{
                          ...register("password", { required: true }),
                        }}
                      />
                      {errors.password && (
                        <p className="text-sm text-font text-red-500 pt-1">
                          This field is required
                        </p>
                      )}
                    </div>
                    <ButtonPrimary name="Login" type={"submit"} />
                    <div className="py-4 flex justify-between">
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
                    <div className="flex justify-between items-center gap-2 pt-4">
                      <span className="flex-1 h-[1px] bg-[#0000001a]"></span>
                      <p className="text-[15px] text-font nav-color">Other</p>
                      <span className="flex-1 h-[1px] bg-[#0000001a]"></span>
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        className="flex justify-center items-center mt-3 bg-white dark:bg-gray-900 border
                      border-[#0000001a] rounded-lg w-[230px] px-3 py-[10px] text-[15px] font-medium 
                      text-gray-800 title-font hover:bg-gray-200 focus:outline-none 
                      focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transtion-all
                      duration-300 ease-linear"
                      >
                        <svg
                          className="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="800px"
                          height="800px"
                          viewBox="-0.5 0 48 48"
                          version="1.1"
                        >
                          {" "}
                          <title>Google-color</title>{" "}
                          <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                          <g
                            id="Icons"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            {" "}
                            <g
                              id="Color-"
                              transform="translate(-401.000000, -860.000000)"
                            >
                              {" "}
                              <g
                                id="Google"
                                transform="translate(401.000000, 860.000000)"
                              >
                                {" "}
                                <path
                                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                  id="Fill-1"
                                  fill="#FBBC05"
                                >
                                  {" "}
                                </path>{" "}
                                <path
                                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                  id="Fill-2"
                                  fill="#EB4335"
                                >
                                  {" "}
                                </path>{" "}
                                <path
                                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                  id="Fill-3"
                                  fill="#34A853"
                                >
                                  {" "}
                                </path>{" "}
                                <path
                                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                  id="Fill-4"
                                  fill="#4285F4"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </svg>
                        <span>Login with Google</span>
                      </button>
                      <button
                        className="flex justify-center items-center mt-3 bg-white dark:bg-gray-900 border
                      border-[#0000001a] rounded-lg w-[230px] px-3 py-[10px] text-[15px] font-medium 
                      text-gray-800 title-font hover:bg-gray-200 focus:outline-none 
                      focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transtion-all
                      duration-300 ease-linear"
                      >
                        <svg
                          className="h-6 w-6 mr-2"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                        >
                          <path
                            fill="#1877F2"
                            d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                          />
                          <path
                            fill="#ffffff"
                            d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                          />
                        </svg>

                        <span>Login with Facebook</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {selected == "register" && (
              <div className="w-6/12">
                <div>
                  <h3 className="title-font title-color text-[22px] uppercase">
                    REGISTER
                  </h3>
                  <form action="" onSubmit={handleSubmit(onSubmit2)}>
                    <div className="mt-5">
                      <InputPrimary
                        label="Username or email address"
                        required
                        register={{ ...register("email", { required: true }) }}
                      />
                      {errors.email && <p className="text-sm text-font text-red-500 pt-1">This field is required</p>}
                    </div>
                    <div className="mt-5">
                      <InputPrimary 
                      label="Full Name" 
                      required type="text" 
                      register={{ ...register("full_name", { required: true }) }}
                      />
                      {errors.full_name && <p className="text-sm text-font text-red-500 pt-1">This field is required</p>}

                    </div>
                    <div className="mt-5">
                      <InputPrimary 
                      label="Password" 
                      required type="password" 
                      register={{ ...register("password", { required: true }) }}
                      />
                      {errors.password && <p className="text-sm text-font text-red-500 pt-1">This field is required</p>}
                    </div>
                    <div className="mt-8">
                      <ButtonPrimary name="Register" />
                    </div>
                  </form>
                </div>
              </div>
            )}
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
                {selected == "login" && (
                  <span
                    onClick={() => setSelected("register")}
                    className="py-3 px-5 bg-white rounded-[35px] title-font
                   nav-color text-sm hover:opacity-75 hover:cursor-pointer"
                  >
                    Register
                  </span>
                )}
                {selected == "register" && (
                  <span
                    onClick={() => setSelected("login")}
                    className="py-3 px-5 bg-white rounded-[35px] title-font
                   nav-color text-sm hover:opacity-75 hover:cursor-pointer"
                  >
                    Login
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
