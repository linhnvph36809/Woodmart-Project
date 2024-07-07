import Spinner from "../Spinner/Spinner";

const Loadding = ({isActive} : any) => {
  return (
    <>
      {isActive && (
        <div className="fixed z-[2000] inset-0 flex justify-center items-center bg-[#ffffffc9]">
          <Spinner size={30} />
        </div>
      )}
    </>
  );
};

export default Loadding;
