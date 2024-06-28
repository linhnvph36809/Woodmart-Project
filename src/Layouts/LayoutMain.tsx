import { Outlet, ScrollRestoration } from "react-router-dom";

import {Header,Footer,User,ButtonScrollTop,} from "./index.ts";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { getCartByUserId } from "../api/cart.api.ts";

const LayOutMain = () => {

  const [cookies] = useCookies(['user']);
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const [orderId, setOrderId] = useState<any>();

  const hanlerTotalPrice = async () => {
    if(cookies?.user){
      const data = await getCartByUserId(cookies?.user?.user_id,cookies?.user?.token)    
        const result = data.reduce((acc:number,cur:any) => acc +(+cur.quantity * +cur.variant.price),0)
        setTotalPrice(result)
    }
  }

  useEffect(() => {
    hanlerTotalPrice() 
  },[cookies])

  console.log(cookies);
  
  
  const datas = {...cookies,
    totalPrice,
    hanlerTotalPrice,
    orderId,
    setOrderId
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
        </div>
      </User.Provider>
      <ScrollRestoration />
    </>
  );
};

export default LayOutMain;
