import { memo } from "react";
import CartSideRight from "../../pages/ContentSideRights/Cart";
import Login from "../../pages/ContentSideRights/Login";
import { BackGroundTransparent } from "../../Layouts";

const SideRight = memo(({showSideRight,handlerShowSideRight}:{showSideRight:string,handlerShowSideRight: () => void}) => {
  let Content ; 
  if(showSideRight == "login"){
    Content = <Login onClose={handlerShowSideRight}/>
  }else if(showSideRight == "cart"){
    Content = <CartSideRight onClose={handlerShowSideRight}/>
  }
  return (
    <>
      <div
        className={`fixed bottom-0 right-0 top-0 w-[340px]
            bg-white z-[500] transtion-all duration-300 ease-in-out ${
                showSideRight ? "opacity-1 translate-x-0" : "opacity-0 translate-x-[500px]"
            } `}
      >
        {Content}
        <BackGroundTransparent bgTransparent={!!showSideRight} onhandleBg={handlerShowSideRight} />
      </div>
    </>
  );
});

export default SideRight;
