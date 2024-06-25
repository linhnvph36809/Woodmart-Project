import { createPortal } from "react-dom";

const BackGroundTransparent = ({
  bgTransparent,
  onhandleBg,
}: {
  bgTransparent?: boolean;
  onhandleBg: () => void;
}) => {
  return (
    <>
      {createPortal(
        <div
          className={`absolute bg-[#000000b3] z-[300]
            top-0 left-0 right-0 bottom-0 hover:cursor-pointer
            transtion-all duration-300 ease-in-out ${
              bgTransparent ? "opacity-1" : " opacity-0 invisible"
            }`}
          onClick={() => onhandleBg()}
        ></div>,document.body)
      }
    </>
  );
};

export default BackGroundTransparent;
