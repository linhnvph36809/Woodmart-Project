import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import InputPrimary from "../../components/Inputs/InputPrimary";
import { IInForPay } from "../../interfaces/IInForPay";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { useGlobalContext } from "../../Layouts";
import {
  getAddressByUserId,
  patchAddressUser,
} from "../../api/user.api";


const FormEditAddress = ({ title }: { title: string }) => {
  const cookies = useGlobalContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [idAddress, setIdAddress] = useState();


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IInForPay>();
  const onSubmit: SubmitHandler<IInForPay> = async (data) => {
    if (cookies.user) {
      setLoading(true);
      const datas = await patchAddressUser(
        { ...data, user_id: cookies.user.user_id },
        cookies.user.token
      );
      setLoading(false);
      navigate("/my-account/address");
    }
  };

  const handlerGetAddress = async () => {
    if (cookies.user) {
      setLoading(true);
      const datas = await getAddressByUserId(
        cookies.user.user_id,
        cookies.user.token
      );
      setLoading(false);

      reset({
        country: datas.country,
        city: datas.city,
        street_address: datas.street_address,
        post_code: datas.post_code,
      });
    }
  };

  useEffect(() => {
    handlerGetAddress();
  }, []);

  return (
    <>
      <div>
        <h3 className="text-[22px] title-font title-color mb-5">{title}</h3>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <InputPrimary
              label="Country / Region"
              required
              type="text"
              register={{ ...register("country", { required: true }) }}
            />
            {errors.country && (
              <p className="text-sm text-font text-red-500 pt-1">
                This field is required
              </p>
            )}
          </div>
          <div className="">
            <InputPrimary
              label="Town / City"
              required
              type="text"
              register={{ ...register("city", { required: true }) }}
            />
            {errors.city && (
              <p className="text-sm text-font text-red-500 pt-1">
                This field is required
              </p>
            )}
          </div>
          <div className="">
            <InputPrimary
              label="Street address"
              required
              type="text"
              register={{
                ...register("street_address", { required: true }),
              }}
            />
            {errors.street_address && (
              <p className="text-sm text-font text-red-500 pt-1">
                This field is required
              </p>
            )}
          </div>
          <div className="">
            <InputPrimary
              label="Postcode / ZIP (optional)"
              type="text"
              register={{ ...register("post_code", { required: true }) }}
            />
            {errors.post_code && (
              <p className="text-sm text-font text-red-500 pt-1">
                This field is required
              </p>
            )}
          </div>
          <div>
            <ButtonPrimary
              type={`${loading ? "button" : "submit"}`}
              name={`${loading ? "Loading..." : "Save"}`}
            ></ButtonPrimary>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormEditAddress;
