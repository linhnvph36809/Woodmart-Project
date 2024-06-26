import { LuX } from "react-icons/lu";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGlobalContext } from "../../Layouts";
import { useCallback, useEffect, useState } from "react";

import InputPrimary from "../../components/Inputs/InputPrimary";

import {
  getAddressByUserId,
  getPayments,
  getShiping,
  getUser,
  postUrlPayMomo,
  postUrlPayVnpay,
} from "../../api/user.api";

import { deleteCart, getCartByUserId, putCart } from "../../api/cart.api";
import InputQuantity from "../../components/Inputs/InputQuantity";
import { useNavigate } from "react-router-dom";

const PageCheckOut = () => {
  const cookies = useGlobalContext();

  const [inforUser, setInforUser] = useState<any>();
  const [shippings, setShipping] = useState<any>();
  const [payments, setPayments] = useState<any>();
  const [carts, setCarts] = useState<any>();
  const [loading, setLoading] = useState<any>(false);
  const [quantity, setQuantity] = useState<any>();
  const navigate = useNavigate();

  type Inputs = {
    fullName: string;
    phone: string | number;
    email: string;
    country: string;
    city: string;
    street_address: string;
    post_code: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handlerGetInfoPay = useCallback(async () => {
    const address = getAddressByUserId(
      cookies.user.user_id,
      cookies.user.token
    );
    const user = getUser(cookies.user.user_id, cookies.user.token);
    const shipping = getShiping(cookies.user.token);
    const payments = getPayments(cookies.user.token);
    setLoading(true);
    Promise.all([address, user, shipping, payments]).then((values: any) => {
      const [address, { data: user }, shipping, payments] = values;
      reset({
        fullName: user?.full_name || null,
        phone: user?.phone || null,
        email: user?.email,
        country: address?.country,
        city: address?.city,
        street_address: address?.street_address,
        post_code: address?.post_code,
      });
      setInforUser({ ...address, ...user });
      setShipping(shipping);
      setPayments(payments);
      setLoading(false);
    });
  }, []);

  const hanlerGetCart = async () => {
    setLoading(true);
    const datas = await getCartByUserId(
      cookies.user.user_id,
      cookies.user.token
    );
    setCarts(datas);
    cookies.hanlerTotalPrice();
    setLoading(false);
  };

  const handlerQuantity = useCallback(
    async (quantity: string | number, id: string | number) => {
      setLoading(true);
      setQuantity({ id, quantity });
      const data = await putCart({ id, quantity }, cookies?.user.token);
      hanlerGetCart();
      setLoading(false);
    },
    [quantity]
  );

  const handlerDeleteCart = useCallback(
    async (id: string | number, token: string) => {
      setLoading(true);
      if (cookies?.user?.token) {
        const data = await deleteCart(id, token);
        hanlerGetCart();
      }
      setLoading(false);
    },
    [carts]
  );

  const handlerPayOnline = useCallback(async (id: string | number) => {
    const payload = { total: "1231", url: "http://localhost:5173/checkout/order-received" };
    if (id == 1) {
      const data = await postUrlPayVnpay(payload, cookies.user.token);
      window.location.href = data.data;
    } else if (id == 2) {
      const data = await postUrlPayMomo(payload, cookies.user.token);
      window.location.href = data.payUrl;
    }
  }, []);

  useEffect(() => {
    hanlerGetCart();
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
                    register={{ ...register("phone", { required: true }) }}
                  />
                  {errors.phone && (
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
                <div className="relative overflow-x-auto sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="uppercase border-b-2 border-solid border-[rgba(0,0,0,0.075)]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 title-font text-base title-color"
                        >
                          PRODUCT
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 text-end title-font text-base title-color"
                        >
                          SUBTOTAL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts?.length &&
                        carts.map((cart: any) => (
                          <tr className="bg-white border-b">
                            <th
                              scope="row"
                              className="px-6 py-4 text-font flex items-center gap-3"
                            >
                              <LuX
                                className="text-base hover:cursor-pointer hover:opacity-70"
                                onClick={() =>
                                  handlerDeleteCart(cart.id, cookies.user.token)
                                }
                              />
                              <img
                                src={cart?.variant?.img}
                                className="w-[65px] h-[74px] object-cover"
                                alt="Apple Watch"
                              />
                              <div className="flex flex-col gap-3">
                                <h5>{cart?.variant?.product.product_name}</h5>
                                <div className="w-[81px]">
                                  <InputQuantity
                                    defaultValue={cart.quantity}
                                    id={cart.id}
                                    handlerChangeQuantity={handlerQuantity}
                                  />
                                </div>
                              </div>
                            </th>

                            <td className="px-2 py-4 text-font text-base text-color-black text-end">
                              $
                              {+cart?.variant?.price *
                                (quantity?.id == cart.variant.id
                                  ? quantity.quantity
                                  : cart.quantity)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
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
                        <div className="flex items-center gap-2 justify-end mb-3">
                          <label
                            htmlFor={"shipping" + shipping.id}
                            className="text-font text-[15px] title-color hover:cursor-pointer"
                          >
                            {shipping.shipping_name}
                          </label>
                          <input
                            id={"shipping" + shipping.id}
                            type="radio"
                            name="shipping"
                            className="hover:cursor-pointer"
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <h4 className="title-color title-font text-lg">Total</h4>
                  <h3 className="wd-text-font-bold text-[22px] color-primary">
                    ${cookies.totalPrice}
                  </h3>
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
                    <ul className="flex gap-3 py-4">
                      {payments?.length &&
                        payments.map((payment: any) => (
                          <li onClick={() => handlerPayOnline(payment.id)}>
                            <button
                              type="button"
                              className="flex justify-center items-center gap-2 mt-3 bg-white dark:bg-gray-900 border
                            border-[#0000001a] rounded-lg w-[160px] h-[45px] px-3 py-2 text-sm font-medium 
                            text-gray-800 title-font hover:bg-gray-200 focus:outline-none 
                            focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transtion-all
                            duration-300 ease-linear"
                            >
                              <span>{payment.payment_name}</span>
                            </button>
                          </li>
                        ))}
                    </ul>
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
        {loading && (
          <div className="fixed z-10 top-0 right-0 left-0 bottom-0 flex justify-center items-center">
            laodding.....
          </div>
        )}
      </div>
    </>
  );
};

export default PageCheckOut;
