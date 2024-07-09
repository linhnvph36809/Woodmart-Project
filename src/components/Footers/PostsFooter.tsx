import { useState } from "react";

const PostsFooter = () => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <>
      <div>
        <div className="mt-14">
          <h4 className="title-color title-font text-[22px]">
            Online store with a wide selection of furniture and decor
          </h4>
          <p className="text-font text-[15px] text-color-black my-6 tracking-[0.2px]">
            Furniture is an invariable attribute of any room. It is they who
            give it the right atmosphere, making the space cozy and comfortable,
            creating favorable conditions for productive work or helping to
            relax after a hard day. More and more often, customers want to place
            an order in an online store, when you can sit down at the computer
            in your free time, arrange the furniture in the photo and calmly buy
            the furniture you like. The online store has a large catalog of
            furniture: both home and office furniture are available.
          </p>
          <h4 className="title-color title-font text-[22px]">
            Furniture production is a modern form of art
          </h4>
          <p className={`text-font text-[15px] text-color-black my-6 tracking-[0.2px] ${active && "h-[70px]"} overflow-hidden`}>
            Furniture manufacturers, as well as manufacturers of other home
            goods, are full of amazing offers: we often come across both
            standard mass-produced products and unique creations – furniture
            from professional craftsmen, which will be appreciated by true
            connoisseurs of beauty. We have selected for you the best models
            from modern craftsmen who managed to ingeniously combine elegance,
            quality and practicality in each product unit. Our assortment
            includes products from proven companies. Who for many years of
            continuous joint work did not give reason to doubt their reliability
            and honesty. All of them guarantee the high quality of their
            products, excellent operational characteristics, attractive
            appearance of the products, a long period of use of the furniture,
            as well as safety.
          </p>
        </div>
        <div className="pb-10 relative">
          <span
            onClick={() => setActive(!active)}
            className="border-b-[2px] border-solid border-[#f59a57] nav-color
            text-[13px] wd-text-font-bold pb-[2px] hover:opacity-70 cursor-pointer"
          >
            Read More
          </span>
          {active && <div className={`absolute w-full -top-[60px] h-[65px] z-[10] test`}></div>}

        </div>
      </div>
    </>
  );
};

export default PostsFooter;
