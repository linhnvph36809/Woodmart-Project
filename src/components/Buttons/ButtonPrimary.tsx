const ButtonPrimary = (
  {className = "w-full bg-primary mt-5 hover:bg-[#df8c4f]",name="",...type}
  :
  {className?:string,name?:string,type?:any}) => {

  return (
    <>
      <button
        {...type}
        className={`h-[42px] flex
        justify-center items-center wd-text-font-bold
        text-white text-[13px] rounded-[32px]
        transtion-all duration-300 ease-linear ${className}`}
      >
        {name}
      </button>
    </>
  );
};

export default ButtonPrimary;
