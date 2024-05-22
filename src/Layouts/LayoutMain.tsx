import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ButtonScrollTop from "../components/Buttons/ButtonScrollTop";
import Login from "../pages/ContentSideRights/Login";
import Cart from "../pages/ContentSideRights/Cart";
import { BackGroudContext } from "./index.ts";
import BackGroundTransparent from "./components/BackGround/BackGroundTransparent.tsx";
import ProductPopup from "../components/Products/ProductPopup.tsx";

const LayOutMain = () => {
  const [selected, setSelected] = useState<string>("");
  const [bgTransparent, setBgTransparent] = useState<boolean>(false);

  let contentSideRight;

  if (selected == "cart") {
    contentSideRight = <Cart/>;
  } else if (selected == "login") {
    contentSideRight = <Login/>;
  }

  function handleBgTransparent(pages:string|undefined = "") {        
    setBgTransparent(!bgTransparent) ; 
    setSelected(pages) ;
  }

  return (
    <>
      <BackGroudContext.Provider value={handleBgTransparent}>
        <div className="relative">
          <Header/>
          <div className="pt-[156px] bg-[url('https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-background.jpg')]">
            <Outlet></Outlet>
          </div>
          <Footer />
          { selected !== "product-popup" && <div
            className={`fixed bottom-0 right-0 top-0 w-[340px]
            bg-white z-[500] transtion-all duration-300 ease-in-out ${
            selected == ""
            ? "opacity-0 translate-x-[500px]"
            : "opacity-1 translate-x-0"
          } `}
          >
            {contentSideRight}
          </div>}
          {selected == "product-popup" && <ProductPopup />}
          <div className="fixed w-[930px] h-[630px] bg-white right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-black z-[500] invisible"></div>
          <ButtonScrollTop />
          <BackGroundTransparent bgTransparent={bgTransparent} onhandleBg={handleBgTransparent} />
        </div>
      </BackGroudContext.Provider>
    </>
  );
};

export default LayOutMain;
