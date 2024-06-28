import { useCallback, useEffect, useState } from "react";
import { LuX } from "react-icons/lu";
import { deleteCart, getCartByUserId, putCart } from "../../api/cart.api";
import InputQuantity from "../../components/Inputs/InputQuantity";
import { useGlobalContext } from "../../Layouts";

const ProductTables = ({setLoading,setCalculate} : {setLoading:any,setCalculate:any}) => {
    
    const cookies = useGlobalContext();

    const [carts, setCarts] = useState<any>();
    const [quantity, setQuantity] = useState<any>();


    const hanlerGetCart = async () => {
        setLoading(true);
        const datas = await getCartByUserId(
            cookies.user.user_id,
            cookies.user.token
        );

        const results = datas.map((data : any) => 
        ({
        product_id: data.variant.product_id,
        color_id: data.variant.color_id,
        material_id: data.variant.material_id,
        price: data.variant.price,
        product_variant_img: data.variant.img,
        quantity: data.quantity,
        })) ; 
        setCalculate((state: any) => ({...state,products: results}))
        setCarts(datas);
        cookies.hanlerTotalPrice();
        setLoading(false);
    };


    const handlerQuantity = useCallback(
        async (quantity: string | number, id: string | number) => {
            setLoading(true);
            setQuantity({ id, quantity });
            const data = await putCart({ id, quantity }, cookies?.user.token);
            hanlerGetCart();
            setLoading(false);
        },
        [quantity]
    );

    const handlerDeleteCart = useCallback(
        async (id: string | number, token: string) => {
            setLoading(true);
            if (cookies?.user?.token) {
                const data = await deleteCart(id, token);
                hanlerGetCart();
            }
            setLoading(false);
        },
        [carts]
    );

    useEffect(() => {
        hanlerGetCart();
    }, []);

    return (
        <>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="uppercase border-b-2 border-solid border-[rgba(0,0,0,0.075)]">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 title-font text-base title-color"
                            >
                                PRODUCT
                            </th>
                            <th
                                scope="col"
                                className="px-2 py-3 text-end title-font text-base title-color"
                            >
                                SUBTOTAL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts?.length &&
                            carts.map((cart: any) => (
                                <tr className="bg-white border-b">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 text-font flex items-center gap-3"
                                    >
                                        <LuX
                                            className="text-base hover:cursor-pointer hover:opacity-70"
                                            onClick={() =>
                                                handlerDeleteCart(cart.id, cookies.user.token)
                                            }
                                        />
                                        <img
                                            src={cart?.variant?.img}
                                            className="w-[65px] h-[74px] object-cover"
                                            alt="Apple Watch"
                                        />
                                        <div className="flex flex-col gap-3">
                                            <h5>{cart?.variant?.product.product_name}</h5>
                                            <div className="w-[81px]">
                                                <InputQuantity
                                                    totalQuantity={+cart.variant.qty_in_stock}
                                                    defaultValue={cart.quantity}
                                                    id={cart.id}
                                                    handlerChangeQuantity={handlerQuantity}
                                                />
                                            </div>
                                        </div>
                                    </th>

                                    <td className="px-2 py-4 text-font text-base text-color-black text-end">
                                        ${cart.variant.price}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductTables;
