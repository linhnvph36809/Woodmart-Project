import { useCallback, useEffect, useState } from "react";
import { getOrderDetail } from "../../api/orders.api";
import { useGlobalContext } from "../../Layouts";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const AccountOrderDetail = () => {
  const cookies = useGlobalContext();
  const { id } = useParams();
  const navigator = useNavigate()
  const [orders, setOrders] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const hanlerGetOrderDetail = useCallback(async (id: string | number) => {
    if (id) {
      try {
        setLoading(true)
        const datas = await getOrderDetail(id, cookies.user.token);
        setLoading(false)
        setOrders(datas);
      } catch (error) {
        navigator("/error")
      }

    }
  }, []);

  useEffect(() => {
    hanlerGetOrderDetail(id as string);
  }, []);

  console.log(orders);


  return (
    <>
      <div>
        <h3 className="title-font text-[22px] title-color uppercase mb-5">
          ORDER DETAILS
        </h3>
        {orders &&
          orders["order-detail"] &&
          orders["order-detail"].map((orderDetail: any) => (
            <div>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-base">PRODUCT</h4>
                <p className="title-color title-font text-base">TOTAL</p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">
                  {" "}
                  ${orderDetail.product.product_name}{" "}
                  <span className="text-color-black">
                    × {orderDetail.quantity}
                  </span>
                </h4>
                <p className="wd-text-font-bold text-[15px] color-primary">
                  ${orderDetail.price}
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">
                  Subtotal:
                </h4>
                <p className="wd-text-font-bold text-[15px] color-primary">
                  ${+orderDetail.price * +orderDetail.quantity}
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">
                  Shipping:
                </h4>
                <p className="text-font text-[15px] text-color-black">
                  {orders.order.shipping.shipping_name}, {orders.order.shipping.fee}$
                </p>
              </div>
              {
                orders['voucher-detail']?.code && <div className="flex justify-between items-center py-4 border-b border-solid">
                  <h4 className="title-color title-font text-[15px]">
                    Voucher:
                  </h4>
                  <p className="text-font text-[15px] text-color-black">
                    {orders['voucher-detail']?.code}, -{orders['voucher-detail']?.discount}%
                  </p>
                </div>
              }

              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">
                  Payment method:
                </h4>
                <p className="text-font text-[15px] text-color-black">
                  {orders.order.payment.payment_name}
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-solid">
                <h4 className="title-color title-font text-[15px]">TOTAL:</h4>
                <h4 className="text-[22px] wd-text-font-bold color-primary">
                  ${+orders.order.total}
                </h4>
              </div>
            </div>
          ))}
      </div>
      <div>
        <h3 className="title-font text-[22px] title-color uppercase mt-10 mb-3">
          BILLING ADDRESS
        </h3>
        <address className="text-color-black text-font text-base leading-[1.8] mb-5 font-normal italic">
          <em>
            {orders?.order?.user?.full_name}
            <br />
            {orders?.order?.address}
            <br />
            {orders?.order?.telephone}
            <br />
            {orders?.order?.user?.email}
          </em>
        </address>
      </div>
      {loading && <div className="flex justify-center"><Spinner /></div>}
    </>
  );
};

export default AccountOrderDetail;
