import { SubmitHandler, useForm } from "react-hook-form";
import InputPrimary from "../../components/Inputs/InputPrimary";
import { lostPassword } from "../../api/authentication.api";
import { useCookies } from "react-cookie";
import Spinner from "../../components/Spinner/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {

  const [_, setCookie] = useCookies(["code"]);
  const [loadding,setLoading] = useState(false) ; 
  const navigate = useNavigate()

  type Input = {
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();


  const onSubmit: SubmitHandler<Input> = async (data) => {
    setLoading(true);
    const res = await lostPassword(data); 
    setLoading(false);
    if(res.success){
      setCookie(
        "code",
        {code: +res.code, email: data.email},
        { path: "/", maxAge: 300 }
      );
      navigate('/check-code')
    }else{
      alert("Email not valid") ; 
    }
    
  };


  return (
    <>
      <div className="content py-20">
        <div className="w-[470px] mx-auto">
          <p className="py-5 text-font text-color-black text-base border-b border-[#0000001b]">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </p>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
                      <InputPrimary
                        label="Email address"
                        required
                        register={{ ...register("email", { required: true }) }}
                      />
                      {errors.email && (
                        <p className="text-sm text-font text-red-500 pt-1">
                          This field is required
                        </p>
                      )}
                    </div>
            <button
                  type="submit"
                    className="w-full h-[42px] flex justify-center items-center wd-text-font-bold text-white
                   text-[13px] rounded-[32px] bg-primary mt-5"
                  >
                    Send Email
                  </button>
          </form>
        </div>
      </div>
      {loadding && <div className="fixed inset-0 flex justify-center items-center"><Spinner size={30} /></div>}
      
    </>
  );
};

export default ForgetPassword;
