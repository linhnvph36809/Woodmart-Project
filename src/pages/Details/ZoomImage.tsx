import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";
// import lgFullscreen from 'lightgallery/plugins/Fullscreen';

const ZoomImages = ({ datas = [] }: { datas: any }) => {

  return (
    <>
      <LightGallery
        speed={500}
        plugins={[lgZoom]}
        elementClassNames="grid grid-cols-2 gap-5 h-full object-cover"
      >
        {
          datas?.map((data: any) => (
            <a key={data.id} href={data.img} className="relative rounded-full">
              <img
                src={data.img}
                alt="Image error"
                className="rounded-[10px]"
              />
              <div className="absolute top-4 right-4 z-[5] rounded-xl bg-[#438E44]
              text-white min-w-[50px] text-xs uppercase text-center font-bold py-1">
                New
              </div>
            </a>
          ))
        }
      </LightGallery>
    </>
  );
};

export default ZoomImages;
