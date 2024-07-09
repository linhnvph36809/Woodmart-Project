import { useEffect, useState } from "react";
import Products from "../../components/Products/Product"
import { deleteWishlist, getWishlistByUserId } from "../../api/wishlist.api";
import { useGlobalContext } from "../../Layouts";
import { LuX } from "react-icons/lu";
import Loadding from "../../components/Loadding/Loadding";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {

  const cookies = useGlobalContext();
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerDeleteWishList = async (id: string | number) => {
    await deleteWishlist(id, cookies.user.token);
    handlerGetWishList();

  }

  const handlerGetWishList = async () => {
    try {
      setLoading(true)
      const data = await getWishlistByUserId(cookies.user.user_id, cookies.user.token);
      data && setProducts(data);
      setLoading(false)
    } catch {
      navigate("/login")
    }

  };

  useEffect(() => {
    handlerGetWishList()
  }, []);


  return (
    <>
      <div>
        <div className="flex justify-between items-center pb-3 border-b border-[#0000001b]">
          <h4 className="text-lg title-font title-color">YOUR PRODUCTS WISHLIST</h4>
          <p className="flex items-center gap-2 text-[15px] wd-text-font-bold nav-color">
            Share:
            <img src="../public/images/share-network.png" alt="" />
          </p>
        </div>
        <div className="grid gap-8 grid-cols-3 mt-5">
          {products.map((product: any) => (
            <div className="relative">
              <Products key={product.id} data={{
                id: product.product.id,
                name: product.product.product_name,
                price: product.product.price,
                reviews: product.product.reviews,
                variants: product.product.variants,
                category: product.product.category,
                img: product.product.product_theme,
                description: ""
              }} />
              <div className="absolute -top-5 z-[10] right-0" onClick={() => handlerDeleteWishList(product.id)}><LuX className="text-xl cursor-pointer
              transtion-all duration-300 ease-linear nav-color hover:opacity-70"/></div>
            </div>
          ))}
        </div>
      </div>
      {
        <Loadding isActive={loading} />
      }
    </>
  )
}

export default Wishlist