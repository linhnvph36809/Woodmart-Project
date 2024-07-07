import { RiCloseFill } from "react-icons/ri";
import { useGlobalContext } from "../../Layouts";

const VideoGlobal = ({ handlerVideo }: any) => {


  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[500]">
        <iframe
          width={900}
          height={506}
          className="rounded-[10px]"
          src="https://www.youtube.com/embed/XHOmBV4js_E?si=PHmhHbA2FgQydXl4?autoplay=1&loop=1&autopause=0"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <button
          className="absolute -top-10 -right-2 z-[10]"
          onClick={() => handlerVideo()}
        >
          <RiCloseFill className="text-[30px] text-white transtion-all duration-200 ease-linear hover:opacity-80" />
        </button>
      </div>
    </>
  );
};

export default VideoGlobal;
