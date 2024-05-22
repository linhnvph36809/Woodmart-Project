import Product from "../../components/Products/Product"
const Wishlist = () => {
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
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
        </>
    )
}

export default Wishlist