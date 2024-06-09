const InputPrimary = ({label,required,type="text"}:{label:string,required?:boolean,type?:string}) => {
    return (
        <>
            <div className="mt-5">
                <label className="text-font text-[15px] nav-color mb-2 block">
                    {label}
                    {required && <span className="text-red-500"> *</span>}
                </label>
                <input
                    type={type}
                    className="text-color-black text-[15px] outline-none pl-5
                    w-full h-[42px] text-font rounded-[35px] border border-[#0000001a]"
                />
            </div>
        </>
    )
}

export default InputPrimary; 