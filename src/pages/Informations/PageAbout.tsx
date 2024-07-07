import BannerGolobal from "../../components/BannerGlobal/BannerGlobal";
const PageAbout = () => {

  document.title = "About "
  return (
    <>
      <BannerGolobal title="About us" />
      <div className="content py-10">
        <div className="flex justify-between items-center">
          <div className="w-8/12">
            <div className="flex gap-5">
              <img
                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-about-us-img-1.jpg.webp"
                alt=""
                className="rounded-[10px] w-[441px]"
              />
              <img
                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-about-us-img-2.jpg.webp"
                alt=""
                className="rounded-[10px] w-[441px]"
              />
            </div>
          </div>
          <div className="w-4/12">
            <div>
              <h4 className="text-[32px] title-font title-color">
                About our online store
              </h4>
              <span className="text-font text-[15px] text-color-black">
                <em>
                  Risus suspendisse a orci penatibus a felis suscipit
                  consectetur vestibulum sodales dui cum ultricies
                </em>
              </span>
              <p className="py-6 text-font text-[15px] text-color-black">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff.
              </p>
              <p className="text-font text-[15px] text-color-black">
                Dictumst per ante cras suscipit nascetur ullamcorper in nullam
                fermentum condimentum torquent iaculis reden posuere potenti
                viverra condimentum dictumst id tellus suspendisse convallis
                condimentum.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <h4 className="text-[32px] title-font title-color">Teammembers</h4>
          <p className="text-base text-font text-color-black">
            Explore product collections from our vendors
          </p>
        </div>
        <div className="flex justify-evenly mt-8">
          <div className="text-center">
            <div>
              <img
                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-teammember-1-280x280.png"
                alt=""
              />
            </div>
            <h4 className="title-color title-font text-lg mt-4">
              Marvin McKinney
            </h4>
            <span className="text-[#a5a5a5] text-base text-font block py-3">
              CEO, co-founder
            </span>
            <div>
              <div className="flex justify-center items-center gap-2 text-[15px] title-font">
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/facebook.png"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/in.png"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/Instagram.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div>
              <img
                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-teammember-2-280x280.png"
                alt=""
              />
            </div>
            <h4 className="title-color title-font text-lg mt-4">
              Dianne Russell
            </h4>
            <span className="text-[#a5a5a5] text-base text-font block py-3">
              CEO, co-founder
            </span>
            <div>
              <div className="flex justify-center items-center gap-2 text-[15px] title-font">
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/facebook.png"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/x.png"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/in.png"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/Instagram.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div>
              <img
                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-teammember-3-280x280.png"
                alt=""
              />
            </div>
            <h4 className="title-color title-font text-lg mt-4">
              Kristin Watson
            </h4>
            <span className="text-[#a5a5a5] text-base text-font block py-3">
              CEO, co-founder
            </span>
            <div>
              <div className="flex justify-center items-center gap-2 text-[15px] title-font">
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/facebook.png"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/x.png"
                  alt=""
                />
                <img
                  className="w-[40px] h-[40px] object-cover"
                  src="./public/images/Instagram.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-20 relative w-[1096px] bg-repeat bg-center bg-cover rounded-[200px]
         h-[390px] bg-[url('./public/images/banner-6.jpg')] left-1/2 -translate-x-1/2">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="text-center">
              <p className="text-lg text-[#ffffffcc] text-font mb-2">
                How choose furniture
              </p>
              <h4 className="text-[36px] title-font text-white mb-8">
                SØLREM furniture collection
              </h4>
              <div className="flex justify-center">
                <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center border-[2px] border-solid border-[#c2beb9] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-[#c2beb9]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAbout;
