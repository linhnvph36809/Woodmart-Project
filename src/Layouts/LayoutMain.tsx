import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";

import { Header, Footer, User, ButtonScrollTop } from "./index.ts";
import { useCookies } from "react-cookie";
import { useCallback, useEffect, useState } from "react";
import { getCartByUserId } from "../api/cart.api.ts";
import { getUserById, logout } from "../api/authentication.api.ts";
import Message from "../components/Message/Message.tsx";

const LayOutMain = () => {
  const navigate = useNavigate();
  const [cookies, _, removeCookie] = useCookies(["user"]);
  const [totalPrice, setTotalPrice] = useState<any>({
    totalPrice: 0,
    quantityProduct: 0,
  });
  const [orderId, setOrderId] = useState<any>();
  const [message, setMessage] = useState<any>({isActive: false, message: "", type: ""});

  const hanlerTotalPrice = async () => {
    if (cookies?.user) {
      const data = await getCartByUserId(
        cookies?.user?.user_id,
        cookies?.user?.token
      );
      const result = data.reduce(
        (acc: number, cur: any) => acc + +cur.quantity * +cur.variant.price,
        0
      );
      setTotalPrice({ totalPrice: result, quantityProduct: +data.length });
    } else {
      setTotalPrice({ totalPrice: 0, quantityProduct: 0 });
    }
  };

  const handlerLogout = useCallback(async () => {
    if (cookies.user?.user_id && cookies.user?.token) {
      const user = await getUserById(
        cookies.user?.user_id,
        cookies.user?.token
      );
      const data = await logout({ email: user.email }, cookies.user.token);
      if (data.status == 200) {
        removeCookie("user");
        navigate("/");
        setTotalPrice({ totalPrice: 0, quantityProduct: 0 });
      }
    }
  }, [cookies.user?.token]);

  console.log(cookies);
  

  useEffect(() => {
    hanlerTotalPrice();
  }, [cookies.user?.token]);

  const datas = {
    ...cookies,
    totalPrice: totalPrice.totalPrice,
    quantityProduct: totalPrice.quantityProduct,
    hanlerTotalPrice,
    orderId,
    setOrderId,
    handlerLogout,
    message,
    setMessage
  };

    

  return (
    <>
      <User.Provider value={datas}>
        <div className="relative">
          <Header />
          <div className="pt-[156px] bg-[url('https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-background.jpg')]">
            <Outlet></Outlet>
          </div>
          <Footer />
          <ButtonScrollTop />
          <Message setMessage={setMessage} isActive={message.isActive} type={message.type} message={message.message} />
        </div>
      </User.Provider>
      <ScrollRestoration />
    </>
  );
};

export default LayOutMain;
