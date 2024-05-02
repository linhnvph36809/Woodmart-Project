import BannerGolobal from "../../components/BannerGlobal/PageAbGlobal";
import { LuChevronDown, LuMoveRight } from "react-icons/lu";
const PageGiftCards = () => {
  return (
    <>
      <BannerGolobal title="Gift cards" />
      <div className="content pt-10 pb-20">
        <div className="flex justify-between gap-8">
          <a href="#" className="w-6/12">
            <div className="relative">
              <img
                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-e-gift-card.jpg.webp"
                alt=""
                className="rounded-[10px] w-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-black bg-opacity-30 rounded-[10px]">
                <div className="text-center">
                  <span className="text-lg text-font text-[#ffffff99]">
                    WOORMART
                  </span>
                  <h4 className="text-[32px] text-white title-font mt-1">
                    e-Gift card
                  </h4>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-font text-[15px] text-color-black px-[170px] pt-8">
                Purchase online and the e-Gift Card is sent straight to their
                inbox!
              </p>
              <h5 className="title-font text-base text-[#333333] my-5">
                Purchase e-Gift Cards up to €1 000 in value.
              </h5>
              <div className="mt-5 flex justify-center">
                <a
                  href="#"
                  className="text-[12px] text-white wd-text-font-bold w-[110px] h-[42px] flex justify-center gap-2 items-center bg-primary rounded-[35px] px-4 "
                >
                  <div className="flex items-end gap-1">
                    Buy now
                    <LuMoveRight className="text-[16px]" />
                  </div>
                </a>
              </div>
            </div>
          </a>
          <a href="#" className="w-6/12">
            <div className="relative">
              <img
                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-gift-card.jpg.webp"
                alt=""
                className="rounded-[10px] w-full"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-black bg-opacity-30 rounded-[10px]">
                <div className="text-center">
                  <span className="text-lg text-font text-[#ffffff99]">
                    WOORMART
                  </span>
                  <h4 className="text-[32px] text-white title-font mt-1">
                    Gift card
                  </h4>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-font text-[15px] text-color-black px-[170px] pt-8">
                Purchase in-store and it’s ready for gifting! Just pick the
                value of the card
              </p>
              <h5 className="title-font text-base text-[#333333] my-5">
                Purchase Gift Cards up to €500 in value.
              </h5>
              <div className="mt-5 flex justify-center">
                <a
                  href="#"
                  className="text-[12px] text-white wd-text-font-bold w-[110px] h-[42px] flex justify-center gap-2 items-center bg-primary rounded-[35px] px-4 "
                >
                  <div className="flex items-end gap-1">
                    Buy now
                    <LuMoveRight className="text-[16px]" />
                  </div>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center my-20">
          <h4 className="title-font text-lg title-color">
            If you can't decide on the perfect gift, let them choose with the
            WoodMart Gift Card.
          </h4>
          <p className="text-font text-base text-color-black px-[220px]">
            The WoodMart Gift Card is easy! Just pick the value of the card and
            your friends or family are free to get exactly what they want! It's
            perfect for graduations, holidays, back to college shopping, baby
            showers, weddings and house warming gifts. Available in increments
            of €5 - €1 000.
          </p>
        </div>
        <div>
            <h3 className="text-[32px] title-font title-color py-5 border-b-2 border-solid border-[#0000001b]">Frequently asked questions</h3>
            <div className="py-5 border-b-[1px] border-solid border-[#0000001b]">
                  <div className="flex justify-between items-center">
                    <p className="text-lg header-font title-color">
                      {" "}
                      What is the difference between an e-Gift Card and physical Gift Card?{" "}
                    </p>
                    <LuChevronDown className="text-color-black" />
                  </div>
                  <div>
                    <p className="text-font text-color-black text-base pt-4">
                      Authorities in our business will tell in no uncertain
                      terms that Lorem Ipsum is that huge, huge no no to
                      forswear forever. Not so fast, I’d say, there are some
                      redeeming factors in favor of greeking text, as its use is
                      merely the symptom of a worse problem to take into
                      consideration.
                    </p>
                  </div>
            </div>
            <div className="py-5 border-b-[1px] border-solid border-[#0000001b]">
                  <div className="flex justify-between items-center">
                    <p className="text-lg header-font title-color">
                      {" "}
                      Do I have to use my Gift Card all at once?{" "}
                    </p>
                    <LuChevronDown className="text-color-black" />
                  </div>
                  <div>
                    <p className="text-font text-color-black text-base pt-4">
                      Authorities in our business will tell in no uncertain
                      terms that Lorem Ipsum is that huge, huge no no to
                      forswear forever. Not so fast, I’d say, there are some
                      redeeming factors in favor of greeking text, as its use is
                      merely the symptom of a worse problem to take into
                      consideration.
                    </p>
                  </div>
            </div>
            <div className="py-5 border-b-[1px] border-solid border-[#0000001b]">
                  <div className="flex justify-between items-center">
                    <p className="text-lg header-font title-color">
                      {" "}
                      When will I receive my e-Gift Card?{" "}
                    </p>
                    <LuChevronDown className="text-color-black" />
                  </div>
                  <div>
                    <p className="text-font text-color-black text-base pt-4">
                      Authorities in our business will tell in no uncertain
                      terms that Lorem Ipsum is that huge, huge no no to
                      forswear forever. Not so fast, I’d say, there are some
                      redeeming factors in favor of greeking text, as its use is
                      merely the symptom of a worse problem to take into
                      consideration.
                    </p>
                  </div>
            </div>
        </div>
        <p className="text-center text-font text-[15px] text-color-black pt-6">If you want more information about Gift Cards Contact us</p>
      </div>
    </>
  );
};

export default PageGiftCards;
