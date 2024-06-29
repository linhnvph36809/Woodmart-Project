import { SubmitHandler, useForm } from "react-hook-form";
import InputPrimary from "../../components/Inputs/InputPrimary";
import { lostPassword, upadtePassword } from "../../api/authentication.api";
import { useCookies } from "react-cookie";
import Spinner from "../../components/Spinner/Spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckCode = () => {
    const [cookies] = useCookies(["code"]);
    const [loadding, setLoading] = useState(false);
    const [updatePassword, seUpdatePassword] = useState(false);
    const navigate = useNavigate();

    type Input = {
        code?: string | number;
        password?: string | number;
        confirm_password: string | number;
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Input>();

    const newPassword = watch("password", "");

    const onSubmit: SubmitHandler<Input> = async (data) => {
        const { code,email } = cookies?.code || { code: null };
        if (updatePassword == false && code && data.code && code == +data.code) {
            alert("Trungkhop");
            seUpdatePassword(true);
        } else if (updatePassword) {
            try {
                await upadtePassword({
                    email: email,
                    password: data.password,
                    confirm_password: data.confirm_password,
                });
                navigate("/login");
            } catch (error) {
                alert("Update not succses");
            }
        } else {
            alert("Code not found");
            seUpdatePassword(false);
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
                        {updatePassword ? (
                            <div className="call-api-success">
                                <div className="">
                                    <InputPrimary
                                        label="New Password"
                                        type="password"
                                        register={{
                                            ...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "This field is required",
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        "This field must be greater than 6 characters",
                                                },
                                            }),
                                        }}
                                    />
                                    {errors.password && (
                                        <p className="text-sm text-font text-red-500 pt-1">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                                <div className="">
                                    <InputPrimary
                                        label="Confirm Password"
                                        type="password"
                                        register={{
                                            ...register("confirm_password", {
                                                required: {
                                                    value: true,
                                                    message: "This field is required",
                                                },
                                                validate: (value) =>
                                                    value == newPassword || "Passwords do not match",
                                            }),
                                        }}
                                    />
                                    {errors.confirm_password && (
                                        <p className="text-sm text-font text-red-500 pt-1">
                                            {errors.confirm_password.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="mt-5">
                                <InputPrimary
                                    label="Code"
                                    required
                                    register={{ ...register("code", { required: true }) }}
                                />
                                {errors.code && (
                                    <p className="text-sm text-font text-red-500 pt-1">
                                        This field is required
                                    </p>
                                )}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full h-[42px] flex justify-center items-center wd-text-font-bold text-white
                   text-[13px] rounded-[32px] bg-primary mt-5"
                        >
                            Send Code
                        </button>
                    </form>
                </div>
            </div>
            {loadding && (
                <div className="fixed inset-0 flex justify-center items-center">
                    <Spinner size={30} />
                </div>
            )}
        </>
    );
};

export default CheckCode;
