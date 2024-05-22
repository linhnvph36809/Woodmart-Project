import { useEffect, useState } from "react";
import { LuChevronUp } from "react-icons/lu";
const ButtonScrollTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div
        className={`fixed bottom-[20px] z-[300] w-[50px]
             h-[50px] rounded-full flex justify-center items-center bg-[#ffffffe6] right-[20px]
             shadow ${
               backToTopButton
                 ? "translate-x-0"
                 : "translate-x-[100px] opacity-0"
             }
             transtion-all duration-200 ease-linear cursor-pointer hover:opacity-60
             `}
        onClick={scrollUp}
      >
        <LuChevronUp className="text-lg" />
      </div>
    </>
  );
};

export default ButtonScrollTop;
