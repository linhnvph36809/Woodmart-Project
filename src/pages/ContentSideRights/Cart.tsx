import { LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import { memo, useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../../Layouts";
import { deleteCart, getCartByUserId } from "../../api/cart.api";
import Spinner from "../../components/Spinner/Spinner";

const CartSideRight = memo(({onClose} : {onClose : () => void }) => {

  const {user,totalPrice,hanlerTotalPrice} = useGlobalContext();

  const [carts,setCarts] = useState([])

  const [loading,setLoading] = useState<any>(null) ; 

  const hanlerGetCart =  useCallback(async () => {
    setLoading(true)
    if(user){
      const data = await getCartByUserId(user?.user_id,user?.token) ; 
      setCarts(data)
      hanlerTotalPrice()
    }
    setLoading(false)
  },[carts])


  const handlerDeleteCart = useCallback (async(id:string|number,token:string) => {
    await deleteCart(id,token)  ;
    hanlerGetCart() ; 
  },[carts])


  

  useEffect(() => {
    hanlerGetCart()
  },[])

  
  return (
    <div className="p-4 flex flex-col h-full justify-between">
      <div className="pb-5 flex justify-between border-b-[1px] border-solid boder-[#0000001b]">
        <h4 className="title-font text-xl title-color">Shopping cart</h4>
        <p className="flex items-center gap-1 title-font text-base text-[#333] hover:opacity-70
        transtion-all duration-100 ease-linear hover:cursor-pointer" onClick={() => onClose()}>
          <LuX className="text-xl" /> Close
        </p>
      </div>
      <div className="h-[450px] px-3 relative">
        <ul className="h-full absolute left-0 right-0 scroll-cart-items overflow-auto call-api-success">
          {
           carts?.length > 0 ? carts.map((cart:any) => 
          <li key={cart.id}>
            <div className="flex justify-between py-4 border-b">
              <div className="flex items-start gap-3">
                <img
                  src={cart?.variant?.img}
                  alt=""
                  className="w-[65px] h-[65px] object-cover"
                />
                <div>
                  <h4 className="title-font title-color text-[15px]">
                  {cart?.variant?.product.product_name}
                  </h4>
                  <span className="flex gap-1 items-center text-xs text-[#bbb]">
                    {cart?.quantity} ×{" "}
                    <h4 className="wd-text-font-bold text-sm color-primary">
                    ${cart?.variant?.price}
                    </h4>{" "}
                  </span>
                </div>
              </div>
              <p onClick={() => handlerDeleteCart(cart.id,user?.token)}
                className="flex justify-center items-center nav-color w-[20px] h-[20px]
                rounded-full transtion-all duration-100 ease-linear hover:shadow 
                hover:shadow-[#0000001a] hover:cursor-pointer"
              >
                ×
              </p>
            </div>
          </li>
          ) : <div className="text-center title-font py-3">No products in the cart.</div>}
        </ul>
         {loading && <div className="absolute left-1/2 top-1/2 -transtion-x-1/2 -transtion-y-1/2">
          <Spinner/>
          </div>
          }
        
      </div>
      <div className="">
        <p className="py-4 border-y flex justify-between items-center wd-text-font-bold title-color text-xl">
          Subtotal:
          <h3 className="color-primary text-xl wd-text-font-bold">${totalPrice || "0"}</h3>
        </p>
        <div>
          <div className="rounded-[10px] py-5 bg-white">
            <p className="text-font text-[15px] text-color-black pb-3">
              Your order qualifies for free shipping!
            </p>
            <div className="bg-[#0000000f] rounded-[10px]">
              <div className="progress-bar w-full h-[7px] bg-primary rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div>
          <Link to="cart" className="w-full h-[42px] flex justify-center 
          items-center wd-text-font-bold title-color text-[13px] rounded-[32px] bg-[#efefef]"
          onClick={() => onClose()}>  
            View cart
          </Link>
          <Link to="/checkout" onClick={() => onClose() }>
          <ButtonPrimary name="Checkout" className="w-full bg-primary mt-3 hover:bg-[#df8c4f]"/>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default CartSideRight;
