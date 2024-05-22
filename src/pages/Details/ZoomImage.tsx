import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from 'lightgallery/plugins/Fullscreen';

const ZoomImages = () => {
  return (
    <>
      <LightGallery
        speed={500} 
        plugins={[lgFullscreen,lgZoom]}
        elementClassNames="grid grid-cols-2 gap-5"
      >
        <a href="./public/images/product-1-min-2.jpg" className="relative rounded-full">
          <img
            src="./public/images/product-1-min-2.jpg"
            alt=""
            className="rounded-[10px]"
          />
          <div className="absolute top-4 right-4 z-[5] rounded-xl bg-[#438E44]
          text-white min-w-[50px] text-xs uppercase text-center wd-text-font-bold py-1">
            New
          </div>
        </a>
        <a
          href="./public/images/product-1-min-2.jpg"
          className="rounded-[20px]"
        >
          <img
            src="./public/images/product-1-min-2.jpg"
            alt=""
            className="rounded-[10px]"
          />
        </a>
        <a
          href="./public/images/product-1-min-2.jpg"
          className="rounded-[20px]"
        >
          <img
            src="./public/images/product-1-min-2.jpg"
            alt=""
            className="rounded-[10px]"
          />
        </a>
        <a
          href="./public/images/product-1-min-2.jpg"
          className="rounded-[20px]"
        >
          <img
            src="./public/images/product-1-min-2.jpg"
            alt=""
            className="rounded-[10px]"
          />
        </a>
      </LightGallery>
    </>
  );
};

export default ZoomImages;
