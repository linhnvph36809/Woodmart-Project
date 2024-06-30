import { useState } from "react";
import { getVoucher } from "../../api/orders.api";
import { useGlobalContext } from "../../Layouts";
import Spinner from "../../components/Spinner/Spinner";

const Voucher = ({ setCalculate }: { setCalculate: any }) => {

    const cookies = useGlobalContext()
    const [voucher, setVoucher] = useState("");
    const [loading, setLoading] = useState(false);

    const handlerSubmit = async () => {
        if (voucher) {
            try {
                setLoading(true)
                const data = await getVoucher(voucher, cookies.user.token);
                if (data?.discount) {
                    setCalculate((state: any) =>
                        ({ ...state, priceVoucher: { price: data.discount, id: data.id } }))
                }
            } catch (error) {
                cookies.setMessage({ isActive: true, message: "VOUCHER NOT EXIST", type: "yellow" })
                setCalculate((state: any) =>
                    ({ ...state, priceVoucher: { price: 0, id: null } }))
            } finally {
                setLoading(false)

            }
        }
    }



    return (
        <>
            <form action="" >
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        defaultValue={voucher}
                        className="text-color-black w-[230px] h-[35px] text-font 
                        rounded-[35px] border border-[#0000001a] text-sm
                        pl-4 nav-color text-color-black focus:outline-none"
                        onChange={(e) => setVoucher(e.target.value)}
                        placeholder="Coupon code"
                    />
                    <button type="button" onClick={handlerSubmit} className="w-[100px] h-[35px] px-2 hover:bg-[#df8c4f]
                      flex justify-center items-center wd-text-font-bold text-white text-xs
                      transtion-all duration-300 ease-linear rounded-[32px] bg-primary">
                        {loading ? <Spinner size={16} color="#fff" /> : "Apply coupon"}
                    </button>
                </div>
            </form>
        </>
    )
}


export default Voucher; 