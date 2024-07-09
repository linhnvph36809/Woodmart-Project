import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useGlobalContext } from "../../Layouts";
import InputPrimary from "../../components/Inputs/InputPrimary";


import {
  getAddressByUserId,
  getPayments,
  getShippings,
  getUser,
  postUrlPay,
} from "../../api/user.api";

import Voucher from "./Voucher";
import { useNavigate } from "react-router-dom";
import ProductTables from "./ProductTables";
import { postOrder } from "../../api/orders.api";
import { IInForPay } from "../../interfaces/IInForPay";
import Loadding from "../../components/Loadding/Loadding";
import PageError from "../../components/PageError/PageError";
import { deleteCart } from "../../api/cart.api";

const PageCheckOut = () => {
  const cookies = useGlobalContext();
  const navigate = useNavigate();
  document.title = "Checkout..."

  if (!cookies?.user) {
    return <PageError />;
  }

  const currentUrl = window.location.href;
  const urlObject = new URL(currentUrl);


  const [shippings, setShipping] = useState<any>();
  const [payments, setPayments] = useState<any>();
  const [loading, setLoading] = useState<any>(false);
  const [calculate, setCalculate] = useState<any>({
    priceShipping: 0,
    priceVoucher: { price: 0, code: null },
    products: [],
    cartId: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInForPay>();

  const handlerDeleteCart = useCallback(async (cartId: any) => {
    cartId.forEach(async (id: any) => {
      try {
        await deleteCart(id, cookies.user.token);
      } catch {
        cookies.removeCookie("user");
        navigate('/login')
      }
    })
    cookies.hanlerTotalPrice()

  }, [])


  const onSubmit: SubmitHandler<IInForPay> = async (data) => {
    setLoading(true);

    const obj = {
      telephone: data.telephone,
      payment_id: data.payment_id,
      shipping_id: data.shipping_id,
      address: `${data.street_address} ${data.city} ${data.country}`,
      user_id: cookies.user.user_id,
      voucher: calculate.priceVoucher.code,
      total:
        (cookies.totalPrice +
          calculate.priceShipping) -
        (cookies.totalPrice * calculate.priceVoucher.price / 100),
      status: 2,
      products: calculate.products,
      cartIds: calculate.cartId
    };


    const { payment_name } = payments.find(
      (payment: any) => payment.id == data.payment_id
    );

    if (payment_name == "Cash on delivery") {
      try {
        const datas = await postOrder(obj, cookies?.user?.token);
        await handlerDeleteCart(calculate.cartId)
        cookies.setOrderId(datas.data.id);
        cookies.setMessage({ isActive: true, message: "Order success", type: "blue" })
        navigate("/checkout/order-received");
      } catch (error) {
        cookies.removeCookie("user");
        navigate("/login");

      }


    } else {
      try {
        const datas = await postUrlPay(
          payment_name.split(" ").join("").toLowerCase(),
          {
            total: obj.total,
            url: `${urlObject.origin}/checkout/order-received`,
          },
          cookies?.user?.token
        );

        if (datas?.payUrl) {
          window.location.href = datas.payUrl;
          sessionStorage.setItem("infor", JSON.stringify(obj));

        } else if (datas?.data) {
          window.location.href = datas.data;
          sessionStorage.setItem("infor", JSON.stringify(obj));
        }
      } catch (error) {
        navigate("/error")
      }

    }
    setLoading(false);
  };

  const handlerGetInfoPay = useCallback(async () => {
    const address = getAddressByUserId(
      cookies?.user?.user_id,
      cookies?.user?.token
    );
    const user = getUser(cookies.user.user_id, cookies.user.token);
    const shipping = getShippings(cookies?.user?.token);
    const payments = getPayments(cookies?.user?.token);
    setLoading(true);

    Promise.all([address, user, shipping, payments]).then((values: any) => {
      const [address, { data: user }, shipping, payments] = values;
      reset({
        fullName: user?.full_name || null,
        telephone: user?.phone_number || null,
        email: user?.email,
        country: address?.country,
        city: address?.city,
        street_address: address?.street_address,
        post_code: address?.post_code,
      });

      setShipping(shipping);
      setPayments(payments);
      setLoading(false);
    }).catch(() => {
      cookies.removeCookie("user");
      navigate('/login')
    });
  }, []);

  useEffect(() => {
    handlerGetInfoPay();
  }, [reset]);

  return (
    <>
      <div className="w-[1000px] mx-auto py-16">
        <div className="flex items-center flex-col">
          <div className="w-[683px] pb-8">
            <div className="flex items-center gap-3 rounded-[10px] p-4 bg-[#1010100d]">
              <div
                className="text-base w-[36px] h-[36px] rounded-full
               flex justify-center items-center bg-primary text-white title-font"
              >
                <p>1</p>
              </div>
              <h3 className="text-2xl title-font title-color">
                Billing Details
              </h3>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-x-6 mt-5">
                <div className="">
                  <InputPrimary
                    label="Full Name"
                    required
                    register={{ ...register("fullName", { required: true }) }}
                  />
                  {errors.fullName && (
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
                    register={{ ...register("telephone", { required: true }) }}
                  />
                  {errors.telephone && (
                    <p className="text-sm text-font text-red-500 pt-1">
                      This field is required
                    </p>
                  )}
                </div>
                <div className="">
                  <InputPrimary
                    label="Email address"
                    required
                    type="email"
                    register={{ ...register("email", { required: true }) }}
                  />
                  {errors.email && (
                    <p className="text-sm text-font text-red-500 pt-1">
                      This field is required
                    </p>
                  )}
                </div>
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
                <div className="flex mt-5 gap-2 items-center">
                  <input
                    type="checkbox"
                    className="text-color-black text-font rounded-[35px] border border-[#0000001a]"
                  />
                  <p className="text-font text-[15px] nav-color">
                    Ship to a different address?
                  </p>
                </div>
              </div>
              <div>
                {/* <div className="mt-5 mb-10">
                  <label className="text-font text-base nav-color mb-2 block">
                    Your review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={8}
                    className="block p-2.5 w-full text-sm bg-gray-50 text-color-black text-font
                     rounded-[35px] border border-[#0000001a] focus:ring-blue-500 focus:outline-none"
                    defaultValue={""}
                  />
                </div> */}
                <div className="flex items-center gap-3 rounded-[10px] p-4 bg-[#1010100d] my-10">
                  <div
                    className="text-base w-[36px] h-[36px] rounded-full
               flex justify-center items-center bg-primary text-white title-font"
                  >
                    <p>2</p>
                  </div>
                  <h3 className="text-2xl title-font title-color">
                    Your Order
                  </h3>
                </div>
                <ProductTables
                  setLoading={setLoading}
                  setCalculate={setCalculate}

                />
                <div className="flex justify-between items-center py-4 border-b border-solid">
                  <h4 className="title-color title-font text-[15px]">
                    Subtotal
                  </h4>
                  <p className="wd-text-font-bold text-[15px] color-primary">
                    ${cookies.totalPrice}
                  </p>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-solid">
                  <h4 className="title-color title-font text-[15px]">
                    Shiping
                  </h4>
                  <div className="text-end">
                    {shippings?.length &&
                      shippings.map((shipping: any) => (
                        <div
                          key={shipping.id}
                          className="flex items-center gap-2 justify-end mb-3"
                        >
                          <label
                            htmlFor={"shipping" + shipping.id}
                            className="text-font text-[15px] title-color hover:cursor-pointer"
                          >
                            {shipping.shipping_name}
                          </label>
                          <input
                            id={"shipping" + shipping.id}
                            type="radio"
                            className="hover:cursor-pointer"
                            value={shipping.id}
                            {...register("shipping_id", { required: true })}
                            onChange={() =>
                              setCalculate((state: any) => ({
                                ...state,
                                priceShipping: +shipping.fee,
                              }))
                            }
                          />
                        </div>
                      ))}
                    {errors.shipping_id && (
                      <p className="text-sm text-font text-red-500 pt-1">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-solid">
                  <h4 className="title-color title-font text-[15px]">
                    Voucher
                  </h4>
                  <Voucher setCalculate={setCalculate} />
                </div>
                <div className="flex justify-between items-center py-4">
                  <h4 className="title-color title-font text-lg">Total</h4>
                  <div>
                    {calculate?.priceShipping ? (
                      <p className="text-font text-[#777777] text-[10px] text-end call-api-success">
                        Shipping :
                        <span className="ml-1 font-medium">
                          ${calculate.priceShipping}
                        </span>
                      </p>
                    ) : (
                      ""
                    )}
                    {calculate?.priceVoucher?.price ? (
                      <p className="text-font text-[#777777] text-[10px] text-end">
                        Voucher :
                        <span className="ml-1 font-medium">
                          -{calculate.priceVoucher.price}%
                        </span>
                      </p>
                    ) : (
                      ""
                    )}
                    <h3 className="wd-text-font-bold text-[22px] color-primary text-end">
                      $
                      {(cookies.totalPrice +
                        calculate.priceShipping) -
                        (cookies.totalPrice * calculate.priceVoucher.price / 100)}
                    </h3>
                  </div>
                </div>

                <div className="rounded-[10px] bg-white">
                  <p className="text-font text-[15px] text-color-black pb-3">
                    Your order qualifies for free shipping!
                  </p>
                  <div className="bg-[#0000000f] rounded-[10px]">
                    <div className="progress-bar w-full h-[7px] bg-primary rounded-[10px]"></div>
                  </div>
                </div>
                <div className="mt-6 text-font text-sm rounded-[10px] p-3 border-[1px] border-solid border-[#f59a5733] bg-[#fef5ee] text-color-black">
                  Your order is expected to leave our warehouse within 1-7 days.
                </div>
                <div className="pb-5 border-b">
                  <div className="flex items-center gap-3 rounded-[10px] p-4 bg-[#1010100d] mt-10">
                    <div
                      className="text-base w-[36px] h-[36px] rounded-full
                    flex justify-center items-center bg-primary text-white title-font"
                    >
                      <p>3</p>
                    </div>
                    <h3 className="text-2xl title-font title-color">
                      Payment Information
                    </h3>
                  </div>
                  <div>
                    <ul className="text-end pt-5">
                      {payments?.length &&
                        payments.map((payment: any) => (
                          <div className="flex gap-2 items-center">
                            <input
                              {...register("payment_id", { required: true })}
                              type="radio"
                              value={payment.id}
                              id={payment.id}
                              className="hover:cursor-pointer w-3 h-3"
                            />
                            <label
                              htmlFor={payment.id}
                              className="text-font text-[17px] title-color hover:cursor-pointer"
                            >
                              {payment.payment_name}
                            </label>
                          </div>
                        ))}
                    </ul>
                    {errors.payment_id && (
                      <p className="text-sm text-font text-red-500 pt-1">
                        This field is required
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full h-[48px] bg-primary text-white wd-text-font-bold rounded-[35px] my-10"
                  >
                    Place order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Loadding isActive={loading} />
      </div>
    </>
  );
};

export default PageCheckOut;
