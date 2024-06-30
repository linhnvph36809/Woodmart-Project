import { useEffect } from "react";
import { IoAlertCircleSharp } from "react-icons/io5";

const Message = ({isActive, message = "123123123123",type = "blue",setMessage}: {message?:string,type?:string, isActive?: boolean, setMessage:any}) => {
    
    const classType = `text-${type}-800 bg-${type}-50 border-${type}-300`
    
    useEffect(() => {
        const timoeout = setTimeout(() => {
        setMessage({isActive: false, message: "", type: ""})
        },3000)
        return () => {
            clearTimeout(timoeout)
        }
    },[isActive])

  return (
    <>
      <div className={`fixed top-3 right-0 z-[500] 
        ${isActive ? "translate-x-0" : "translate-x-full"} 
        transtion-all duration-200 ease-linear`}>
        <div
          id="alert-additional-content-1"
          className={`p-4 mb-4 border-[1px] rounded-lg min-w-[350px] ` + classType}
          role="alert"
        >
          <div className="flex items-center">
              <IoAlertCircleSharp  className="flex-shrink-0 w-6 h-6 me-2"/>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium title-font">This is a info alert</h3>
          </div>
          <div className="mt-2 text-sm text-font">
            {message}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
