import { memo, useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGlobalContext } from "../../Layouts";
import { postReview } from "../../api/user.api";

type Inputs = {
  comment: string;
};

const FormReview = memo(
  ({ review, handlerSetReview }: { review: any; handlerSetReview: any }) => {
    const cookies = useGlobalContext();

    const [hover, setHover] = useState<number>(0);
    const [click, setClick] = useState<number>(0);

    const stars = [1, 2, 3, 4, 5];

    const handlerHover = (index: number) => {
      setHover(index);
    };

    const handlerClick = (index: number) => {
      setClick(index);
    };

    const handlerResetHover = () => {
      setHover(0);
    };

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      if (click) {
        await postReview(
          { ...review.review, comment: data.comment, stars: click },
          cookies.user.token
        );
        handlerSetReview();
      } else {
        alert("Please enter stars");
      }
    };

    return (
      <>
        <div
          className={`fixed z-[500] top-1/2 left-1/2 -translate-y-1/2
            -translate-x-1/2 bg-white rounded-[10px] flex
            justify-center gap-[30px] p-12`}
        >
          <div className="">
            <h5 className="text-lg title-color title-font mb-5">
              BE THE FIRST TO REVIEW “CAN”
            </h5>
            <p className="text-font text-base text-color-black pb-2">
              Your email address will not be published. Required fields are
              marked <span className="text-red-500">*</span>
            </p>
            <p className="text-font text-base nav-color flex items-center gap- my-3">
              Your rating <span className="text-red-500">*</span>:
              <div className="flex ml-2 gap-1">
                {stars.map((value, i) => (
                  <RiStarFill
                    key={i}
                    className={`text-[#bbb] text-xl
                            transtion-all duration-300 ease-linear hover:text-[#f59a57] 
                            cursor-pointer focus:text-black-500 ${
                              hover >= value || click >= value
                                ? "text-[#f59a57]"
                                : ""
                            }`}
                    onMouseEnter={() => handlerHover(value)}
                    onClick={() => handlerClick(value)}
                    onMouseLeave={() => handlerResetHover()}
                  />
                ))}
              </div>
            </p>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label className="text-font text-base nav-color mb-2 block">
                  Your review <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("comment", {
                    required: {
                      value: true,
                      message: "This field is required ",
                    },
                    minLength: {
                      value: 15,
                      message: "This field must be over 10 characters",
                    },
                  })}
                  id="message"
                  rows={8}
                  className="block p-2.5 w-full text-sm bg-gray-50 text-color-black text-font
                                rounded-[35px] border border-[#0000001a] focus:ring-blue-500 focus:outline-none"
                  defaultValue={""}
                />
                {errors.comment && (
                  <p className="text-sm text-font text-red-500 pt-1">
                    {errors.comment.message}
                  </p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  className="w-[86px] h-[42px] flex justify-center items-center
                            wd-text-font-bold text-white text-[13px] rounded-[32px] bg-primary
                            transtion-all duration-300 ease-linear hover:bg-[#df8c4f]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
);

export default FormReview;
