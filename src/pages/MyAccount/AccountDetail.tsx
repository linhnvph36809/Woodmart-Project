import { SubmitHandler, useForm } from "react-hook-form";
import { useGlobalContext } from "../../Layouts";
import InputPrimary from "../../components/Inputs/InputPrimary";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { useState } from "react";
import { LuX } from "react-icons/lu";
import { patchUser } from "../../api/user.api";
import { useNavigate } from "react-router-dom";

const AccountDetail = ({ title }: { title: string }) => {

    const cookies = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const [updatePassword, setUpdatePassword] = useState(false);
    const navigate = useNavigate()

    type Input = {
        full_name: string;
        phone_number: string | number;
        current_password?: string;
        new_password?: string;
        confirm_password?: string
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Input>();
    const onSubmit: SubmitHandler<Input> = async (data) => {
        if (cookies.user) {
            setLoading(true)
            const datas = await patchUser(cookies.user.user_id, data, cookies.user.token);
            console.log(datas);
            
            setLoading(false) ;
            if(!datas){
                alert("Current password is incorrect ")
            }else{
                alert("Successful change")
                navigate('/')
            }
            
        }
    }

    const newPassword = watch('new_password', '');

    return (
        <>
            <div>
                <h3 className="text-[22px] title-font title-color mb-5">
                    {title}
                </h3>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="">
                            <InputPrimary
                                label="Full Name"
                                required
                                type="text"
                                register={{ ...register("full_name", { required: true }) }}
                            />
                            {errors.full_name && (
                                <p className="text-sm text-font text-red-500 pt-1">
                                    This field is required
                                </p>
                            )}
                        </div>
                        <div className="">
                            <InputPrimary
                                label="Phone"
                                required
                                type="number"
                                register={{ ...register("phone_number", { required: true }) }}
                            />
                            {errors.phone_number && (
                                <p className="text-sm text-font text-red-500 pt-1">
                                    This field is required
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <button type="button" className="mt-5 text-xs title-font
                    px-2 py-2 bg-[#101010b3] rounded-[12px] text-white hover:opacity-70
                    trasntion-all duration-200 ease-linear"  onClick={() => setUpdatePassword((state) => !state)}> {updatePassword ? <LuX /> : "Update password"}</button>
                    </div>
                    {
                        updatePassword &&
                        <div className="call-api-success">
                            <h3 className="text-[22px] title-font title-color my-5">Update Password</h3>
                            <div className="">
                                <InputPrimary
                                    label="Current Password"
                                    type="password"
                                    register={{ ...register("current_password", { required: true }) }}
                                />
                                {errors.current_password && (
                                    <p className="text-sm text-font text-red-500 pt-1">
                                        This field is required
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <InputPrimary
                                    label="New Password"
                                    type="password"
                                    register={{ ...register("new_password", 
                                    { required: {value:true, message: "This field is required"},
                                        minLength: {value: 6, message: "This field must be greater than 6 characters"}}) }}
                                />
                                {errors.new_password && (
                                    <p className="text-sm text-font text-red-500 pt-1">
                                        {errors.new_password.message}
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <InputPrimary
                                    label="Confirm Password"
                                    type="password"
                                    register={{
                                        ...register("confirm_password", {
                                            required: {value: true, message: "This field is required"},
                                            validate: (value) =>
                                                value == newPassword || 'Passwords do not match'
                                        })
                                    }}
                                />
                                {errors.confirm_password && <p className="text-sm text-font text-red-500 pt-1">
                                    {errors.confirm_password.message}
                                </p>}
                            </div>
                        </div>
                    }
                    <div>
                        <ButtonPrimary
                            type="submit"
                            name={`${loading ? "Loading..." : "Save"}`}
                        >

                        </ButtonPrimary>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AccountDetail; 