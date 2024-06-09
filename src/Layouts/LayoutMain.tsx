import { Outlet } from "react-router-dom";
import { useState, useCallback  } from "react";

import {Header,Footer,BackGroudContext,ProductPopup,
VideoGlobal,ButtonScrollTop,BackGroundTransparent} from "./index.ts";

import Login from "../pages/ContentSideRights/Login";
import Cart from "../pages/ContentSideRights/Cart";

const LayOutMain = () => {
  const [selected, setSelected] = useState<string>("");
  const [bgTransparent, setBgTransparent] = useState<boolean>(false);

  let contentSideRight;
  let contentFixed;

  switch (selected) {
    case "cart":
      contentSideRight = <Cart />;
      break;
    case "login":
      contentSideRight = <Login />;
      break;
    case "video":
      contentFixed = <VideoGlobal />;
      break;
    default:
      break;
  }

  const handleBgTransparent = useCallback((pages: string | undefined = "") => {
    setBgTransparent(!bgTransparent);
    setSelected(pages);
  },[bgTransparent,selected])
  

  return (
    <>
      <BackGroudContext.Provider value={handleBgTransparent}>
        <div className="relative">
          <Header />
          <div className="pt-[156px] bg-[url('https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-background.jpg')]">
            <Outlet></Outlet>
          </div>
          <Footer />
          <div
            className={`fixed bottom-0 right-0 top-0 w-[340px]
            bg-white z-[500] transtion-all duration-300 ease-in-out ${
              selected == "cart" || selected == "login"
                ? "opacity-1 translate-x-0"
                : "opacity-0 translate-x-[500px]"
            } `}
          >
            {contentSideRight}
          </div>
          {contentFixed}
          <div className="fixed w-[930px] h-[630px] bg-white right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-black z-[500] invisible"></div>
          <ButtonScrollTop />
          <BackGroundTransparent
            bgTransparent={bgTransparent}
            onhandleBg={handleBgTransparent}
          />
        </div>
      </BackGroudContext.Provider>
    </>
  );
};

export default LayOutMain;
