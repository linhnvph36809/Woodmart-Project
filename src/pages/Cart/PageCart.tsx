import { LuX } from "react-icons/lu";
import { useGlobalContext } from "../../Layouts";
import { useCallback, useEffect, useState } from "react";
import { deleteCart, getCartByUserId, putCart } from "../../api/cart.api";
import InputQuantity from "../../components/Inputs/InputQuantity";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import Loadding from "../../components/Loadding/Loadding";

const PageCart = () => {
  const cookies = useGlobalContext();
  document.title = "My Cart"

  const [carts, setCarts] = useState<any>([]);
  const [quantity, setQuantity] = useState<any>();
  const [loading, setLoading] = useState<any>(null);

  const hanlerGetCart = useCallback(async () => {
    setLoading(true);
    if(cookies?.user?.token){
      const data = await getCartByUserId(
        cookies.user.user_id,
        cookies.user.token
      );
      setCarts(data);
    }
    setLoading(false)
      cookies.hanlerTotalPrice()
  }, [carts]);  

  const handlerDeleteCart = useCallback(
    async (id: string | number, token: string) => {
      setLoading(true);
      if(cookies?.user?.token){
        await deleteCart(id, token);
        hanlerGetCart();
      }
      setLoading(false);
    },
    [carts]
  );

  const handlerQuantity = useCallback((quantity:string|number,id:string|number) => {
    setLoading(true);
    setQuantity({id, quantity});
    setTimeout(async () => {
      await putCart({id,quantity},cookies?.user.token) ;
      hanlerGetCart() 
      setLoading(false);
    },1000)
    
  },[quantity])

  useEffect(() => {
    hanlerGetCart();
  }, []);

  console.log(carts);
  

  return (
    <>
      <div className="content pt-10 pb-20">
        <div className="flex justify-between gap-6">
          <div className="w-8/12">
            <div className="rounded-[10px] p-5 bg-white">
              <p className="text-font text-[15px] text-color-black pb-3">
                Your order qualifies for free shipping!
              </p>
              <div className="bg-[#0000000f] rounded-[10px]">
                <div className="progress-bar w-full h-[7px] bg-primary rounded-[10px]"></div>
              </div>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg my-5 p-4 pb-8 bg-white">
              <div className="relative">
                {carts?.length ? (
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-base border-b-[1px] border-solid title-color title-font uppercase bg-white">
                      <tr>
                        <th scope="col" className="">
                          <span className="sr-only">Action</span>
                        </th>
                        <th scope="col" className="w-[104px]">
                          <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-3 py-4">
                          PRODUCT
                        </th>
                        <th scope="col" className="px-6 py-4">
                          PRICE
                        </th>
                        <th scope="col" className="px-6 py-4">
                          QUANTITY
                        </th>
                        <th scope="col" className="px-6 py-4 text-end">
                          SUBTOTAL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts.map((cart: any) => (
                        <tr className="bg-white border-b" key={cart.id}>
                          <td className="pl-2 py-4">
                            <LuX
                              className="text-base hover:opacity-70 hover:cursor-pointer"
                              onClick={() =>
                                handlerDeleteCart(cart.id, cookies.user.token)
                              }
                            />
                          </td>
                          <td className="py-4">
                            <img src={cart?.variant?.img} className="w-[80px] h-[80px] object-cover"/>
                          </td>
                          <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
                            <a
                              href=""
                              className="text-[#333333] title-font text-sm"
                            >
                              {cart?.variant?.product.product_name}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-[#777] text-font text-sm">
                            ${cart?.variant?.price}
                          </td>
                          <td className="w-[50px] px-6 py-4 font-semibold text-gray-900 dark:text-white">
                            <InputQuantity 
                            totalQuantity={+cart.variant.qty_in_stock}
                            id={cart.id} 
                            handlerChangeQuantity={handlerQuantity}
                            defaultValue={cart.quantity < +cart.variant.qty_in_stock && cart.quantity >= 20 ? 20 : (+cart.quantity < +cart.variant.qty_in_stock ? +cart.quantity : +cart.variant.qty_in_stock) }
                            />
                          </td>
                          <td className="px-6 py-4 text-end text-base wd-text-font-bold color-primary">
                            ${+cart?.variant?.price * (quantity?.id == cart.variant.id ? quantity.quantity : cart.quantity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center text-center title-font py-3">No products in the cart.</div>
                )}
              </div>

            </div>
            <div className="flex justify-between">
              <div className="flex w-[287px] items-start gap-5 pl-4 py-5 bg-white rounded-[10px]">
                <img
                  src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-phone-1.svg"
                  alt=""
                />
                <div>
                  <h4 className="text-lg title-font title-color">
                    Have questions?
                  </h4>
                  <p className="text-font text-color-black text-[15px] pr-10 pt-2">
                    Our experts are here to help!{" "}
                    <u>
                      <em className="text-[#3366ff]">Call us</em>
                    </u>
                  </p>
                </div>
              </div>
              <div className="flex w-[287px] items-start gap-5 pl-4 py-5 bg-white rounded-[10px]">
                <img
                  src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-sequre.svg"
                  alt=""
                />
                <div>
                  <h4 className="text-lg title-font title-color">
                    Secure shopping ?
                  </h4>
                  <p className="text-font text-color-black text-[15px] pr-10 pt-2">
                    All transactions are protected by SSL.
                  </p>
                </div>
              </div>
              <div className="flex w-[287px] items-start gap-5 pl-4 py-5 bg-white rounded-[10px]">
                <img
                  src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-privacy.svg"
                  alt=""
                />
                <div>
                  <h4 className="text-lg title-font title-color">
                    Privacy protection
                  </h4>
                  <p className="text-font text-color-black text-[15px] pr-10 pt-2">
                    Your privacy is always our top priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="bg-white p-6 rounded-[10px]">
              <h3 className="title-font title-color text-[22px]">
                Cart Totals
              </h3>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">Subtotal</h4>
                <p className="text-font text-[15px] text-color-black">
                  ${cookies.totalPrice}
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">Subtotal</h4>
                <div className="text-end">
                  <p className="text-font text-[15px] nav-color">
                    Free shipping
                  </p>
                  <p className="text-font text-[15px] text-color-black py-3">
                    Shipping to <strong>AL</strong>.
                  </p>
                  <h4>
                    <a
                      href="#"
                      className="wd-text-font-bold color-primary text-[15px]"
                    >
                      Change address
                    </a>
                  </h4>
                </div>
              </div>
              <div className="flex justify-between items-center py-4">
                <h4 className="title-color title-font text-[15px]">Total</h4>
                <h3 className="wd-text-font-bold text-[22px] color-primary">
                  ${cookies.totalPrice}
                </h3>
              </div>
              <Link to="/checkout">
              {
                carts.length ? 
              <ButtonPrimary
                className="w-full h-[42px] flex justify-center items-center
                 wd-text-font-bold text-white text-[13px] rounded-[32px] bg-primary mt-2
                 hover:bg-[#df8c4f]"
                 name="Proceed to checkout"
              >
              </ButtonPrimary> : ""
              }   
              </Link>
            </div>
            <div className="mt-5 bg-white p-6 rounded-[10px]">
              <div className="mb-6">
                <h3 className="text-lg title-font title-color mb-2">
                  Payment methods:
                </h3>
                <div>
                  <img
                    src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/payment-methods.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg title-font title-color mb-3">
                  Delivery information:
                </h3>
                <p className="text-font text-sm text-color-black">
                  Although we don’t think you’ll ever want one, we’ll gladly
                  provide a refund if it’s requested within 14 days of purchase.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg title-font title-color mb-3">
                  14 Days Money Back Guarantee:
                </h3>
                <p className="text-font text-sm text-color-black">
                  Although we don’t think you’ll ever want one, we’ll gladly
                  provide a refund if it’s requested within 14 days of purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loadding isActive={loading} />
    </>
  );
};

export default PageCart;
