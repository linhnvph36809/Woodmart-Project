import { useEffect, useState } from "react";
import Products from "../../components/Products/Product"
import { getWishlistByUserId } from "../../api/wishlist.api";
import { useGlobalContext } from "../../Layouts";

const Wishlist = () => {

    const cookies = useGlobalContext();

    const [products, setProducts] = useState([]);

    useEffect(() => {
      (async function () {
        const data = await getWishlistByUserId(cookies.user.user_id,cookies.user.token);
        data && setProducts(data);
      })();
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
            <div className="grid-product-xl mt-5">
            {products.map((product: any) => (
            <Products key={product.id} data={{
              id:product.product.id,
              name: product.product.product_name,
              price: product.product.price,
              reviews: product.product.reviews,     
              variants: product.product.variants,
              category: product.product.category,
              img: product.product.product_theme,
              description: ""
            }} />
          ))}
            </div>
        </div>
        </>
    )
}

export default Wishlist