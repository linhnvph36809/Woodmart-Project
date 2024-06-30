import { useCallback, useEffect, useState } from "react";

import { BackGroundTransparent, useGlobalContext } from "../../Layouts";
import { getOrderReviews } from "../../api/orders.api";
import Spinner from "../../components/Spinner/Spinner";
import FormReview from "./FormReview";

const ReviewProducts = () => {
  const cookies = useGlobalContext();
  const [orders, setOrders] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>({
    active: false,
    review: null,
  });

  const handlerSetReview = useCallback(
    (review: any = { active: false, review: null }) => {
      if (review.active) {
        setSelected((state: any) => ({ ...state, active: true, review }));
      } else {
        setSelected(review);
      }
    },
    []
  );
  console.log("selected", selected);

  const hanlerGetOrderDetail = useCallback(async () => {
    setLoading(true);
    const datas = await getOrderReviews("32", cookies.user.token);
    setLoading(false);
    setOrders(datas);
  }, []);

  useEffect(() => {
    hanlerGetOrderDetail();
  }, []);

  console.log(orders);

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
                  Image
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-base title-font title-color"
                >
                  Status
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
              {orders?.length
                ? orders.map((order: any) => {
                    return (
                      <tr
                        key={order.id}
                        className="border-b-[1px] border-solid border-[#0000001b]"
                      >
                        <td className="px-3 py-4 text-font text-color-black text-sm">
                          <a href="">#{order.id}</a>
                        </td>
                        <td className="px-3 py-4 text-font text-color-black text-sm">
                          {order.created_at}
                        </td>
                        <td className="px-3 py-4 text-font text-color-black text-sm">
                          <img
                            src={order.product_variant_img}
                            alt=""
                            className="w-[70px] h-[70px] object-cover"
                          />
                        </td>
                        <td className="px-3 py-4 text-font text-color-black text-sm">
                          Waiting for review
                        </td>
                        <td className="min-w-[250px] px-3 py-4 text-color-black text-sm">
                          <span className="wd-text-font-bold color-primary">
                            {" "}
                            ${order.price * +order.quantity}
                          </span>{" "}
                          for {order.quantity} items
                        </td>
                        <td className="px-3 py-4">
                          <p
                            className="w-[56px] h-[36px] flex justify-center items-center
                          block bg-primary text-xs text-white title-font rounded-[35px]
                          transtion-all duration-200 ease-linear hover:bg-[#df8c4f] cursor-pointer
                          "
                            onClick={() =>
                              handlerSetReview({
                                active: true,
                                review: {
                                  user_id: cookies.user.user_id,
                                  product_id: order.product_id,
                                  detail_order_id: order.order.id,
                                },
                              })
                            }
                          >
                            Review
                          </p>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
        {loading && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
      </div>
      {selected.active && <FormReview review={selected.review} handlerSetReview={handlerSetReview} />}
      <BackGroundTransparent
        bgTransparent={selected.active}
        onhandleBg={handlerSetReview}
      />
    </>
  );
};

export default ReviewProducts;
