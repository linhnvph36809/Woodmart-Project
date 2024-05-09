import { LuX } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
const Login = () => {
    return (
        <div className="p-5">
            <div className="pb-5 flex justify-between border-b-[1px] border-solid boder-[#0000001b]">
                <h4 className="title-font text-xl title-color">Sign in</h4>
                <p className="flex items-center gap-1 title-font text-base text-[#333] hover:opacity-70 transtion-all duration-100 ease-linear hover:cursor-pointer">
                    <LuX className="text-xl" /> Close
                </p>
            </div>
            <form action="" className="pb-3 border-b">
                <div className="mt-5">
                    <label className="text-font text-[15px] nav-color mb-2 block">
                        Username or email address{" "}
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
                    />
                </div>
                <div className="mt-5">
                    <label className="text-font text-[15px] nav-color mb-2 block">
                        Password <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="text-color-black text-[15px] outline-none pl-5 w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
                    />
                </div>
                <button className="mt-5 w-full h-[42px] flex justify-center items-center wd-text-font-bold text-white text-[13px] rounded-[32px] bg-primary">
                    Log in
                </button>
                <div className="mt-5 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" />
                        <label
                            className="text-font text-[15px] nav-color block"
                            htmlFor=""
                        >
                            {" "}
                            Remember me
                        </label>
                    </div>
                    <p><a href="#" className="text-font text-[15px] block color-primary hover:underline hover:opacity-70">Lost your password?</a></p>
                </div>
            </form>
            <div className="text-center border-b pb-5">
                <LuUser2 className="mx-auto text-[#f1f1f1] text-[54px] my-5" />
                <p className="title-color wd-text-font-bold mb-4">No account yet?</p>
                <h4><a href="" className="text-[13px] wd-text-font-bold border-b-2 border-solid border-[#f59a57] hover:opacity-70 transtion-all duration-100 ease-linear">Create an Account </a></h4>
            </div>
        </div>
    )
}

export default Login; 