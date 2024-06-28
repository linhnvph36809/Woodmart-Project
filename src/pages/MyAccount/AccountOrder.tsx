import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { useGlobalContext } from "../../Layouts";
import { getOrders } from "../../api/orders.api";
import Spinner from "../../components/Spinner/Spinner";

const AccountOrder = () => {
  const cookies = useGlobalContext();
  const [orders, setOrders] = useState<any>([]);
  const [loading,setLoading] = useState<boolean>(false) ; 

  const hanlerGetOrderDetail = useCallback(async () => {
    setLoading(true);
    const datas = await getOrders(cookies.user.user_id, cookies.user.token);
    setLoading(false);
    setOrders(datas);
  }, []);

  useEffect(() => {
    hanlerGetOrderDetail();
  }, []);

  
  return (
    <>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase border-b-2 border-solid border-[#00000013]">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3 text-base title-font title-color"
                >
                  ORDER
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-base title-font title-color"
                >
                  DATE
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-base title-font title-color"
                >
                  STATUS
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-base title-font title-color"
                >
                  TOTAL
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-base title-font title-color text-end"
                >
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.length ? 
                orders.map((order: any) => {
                  let status ; 
                  switch (+order.status) {
                    case 0:
                      status = "Cancelled" ;
                      break;
                      case 1:
                        status = "Awaiting payment" ;
                      break;
                      case 2:
                        status = "Awaiting confirmation" ;
                      break;
                      case 3:
                        status = "Preparing orders" ;
                      break;
                      case 4:
                        status = "Being transported" ;
                      break;
                      case 5:
                        status = "Delivered successfully" ;
                      break;
                    default:
                      break;
                  }
                  return (
                    <tr key={order.id} className="border-b-[1px] border-solid border-[#0000001b]">
                      <td className="px-3 py-4 text-font text-color-black text-sm">
                        <a href="">#{order.id}</a>
                      </td>
                      <td className="px-3 py-4 text-font text-color-black text-sm">
                        {order.created_at}
                      </td>
                      <td className="px-3 py-4 text-font text-color-black text-sm">
                        {status}
                      </td>
                      <td className="min-w-[325px] px-3 py-4 text-color-black text-sm">
                        <span className="wd-text-font-bold color-primary">
                          {" "}
                          ${order.total}
                        </span>{" "}
                      </td>
                      <td className="px-3 py-4 flex justify-end">
                        <Link
                          to={`/my-account/orders/detail/${order.id}`}
                          className="w-[56px] h-[36px] flex justify-center items-center
                          block bg-primary text-xs text-white title-font rounded-[35px]
                          transtion-all duration-200 ease-linear hover:bg-[#df8c4f]
                          "
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                }) : ""}
            </tbody>

          </table>
        </div>
          {loading && <div className="flex justify-center"><Spinner /></div>}
      </div>
    </>
  );
};

export default AccountOrder;
