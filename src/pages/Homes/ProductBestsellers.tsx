import { memo, useEffect, useState } from "react";
import Products from "../../components/Products/Product";
import { getProductBestsellers } from "../../api/product.api";
import Spinner from "../../components/Spinner/Spinner";

const ProductBestsellers = memo(() => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getProductBestsellers();
      data && setProducts(data);
    })();
  }, []);

  

  return (
    <>
      {" "}
      {products.length > 0 ? (
        <div className="grid grid-product-s gap-y-6 justify-between call-api-success">
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
      ) : (
        <div className="text-center">
          <Spinner />
        </div>
      )}
    </>
  );
});

export default ProductBestsellers;
