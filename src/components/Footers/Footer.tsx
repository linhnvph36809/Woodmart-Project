import { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/ICategories/ICategories";
import { getAllCategorys } from "../../api/categorys.api";
import { Link } from "react-router-dom";

const Footer = () => {
    const [categories, setCategories] = useState<{
        category1: ICategory[];
        category2: ICategory[];
    }>({ category1: [], category2: [] });

    useEffect(() => {
        (async function () {
            try {
                const { data } = await getAllCategorys();
                let n = Math.floor(data.length / 2); // Tính số phần tử của mỗi mảng con
                let arr1 = data.slice(0, n);
                let arr2 = data.slice(n);
                setCategories((state: any) => ({
                    ...state,
                    category1: arr1,
                    category2: arr2,
                }));
            } catch (error) {
                alert(error);
            }
        })();
    }, []);

    return (
        <footer className="bg-black pt-12">
            <div className="content">
                <div className="flex justify-between items-center">
                    <div className="w-9/12">
                        <img src="./public/images/logo-footer.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-between pt-12 pb-8">
                    <div className="w-9/12 flex">
                        <div className="w-4/12">
                            <h1 className="text-[22px] text-white title-font">
                                Useful links
                            </h1>
                            <ul className="mt-6">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >
                                        Showrooms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm text-[#ffffff99] text-font mt-3 block 
                                hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                    >
                                        Gift Cards
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-4/12">
                            <h1 className="text-[22px] text-white title-font">Categories</h1>
                            <ul className="mt-6">
                                {categories?.category1.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            to={`/product-category/${category.id}`}
                                            className="text-sm text-[#ffffff99] text-font mt-3 block 
                                            hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                        >
                                            {category.category_name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-4/12">
                            <ul className="mt-14">
                                {categories?.category2.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            to={`/product-category/${category.id}`}
                                            className="text-sm text-[#ffffff99] text-font mt-3 block 
                                            hover:text-white hover:transition-all hover:duration-250 hover:ease-linear"
                                        >
                                            {category.category_name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-3/12">
                        <h1 className="title-font text-[22px] text-white">
                            Download App on Mobile:
                        </h1>
                        <p className="text-sm text-font text-[#ffffffcc] py-3">
                            15% discount on your first purchase
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <img
                                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/google-play.svg"
                                alt=""
                            />
                            <img
                                src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/app-store.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 border-t-[0.8px] border-solid border-[#ffffff26]">
                <div className="content flex justify-between">
                    <h3 className="text-font text-xs text-[#cccccc] text-white">
                        <strong className="text-white">WOODMART</strong> © 2024 CREATED BY{" "}
                        <strong className="text-white">XTEMOS STUDIO</strong>. PREMIUM
                        E-COMMERCE SOLUTIONS.
                    </h3>
                    <img
                        src="https://woodmart.b-cdn.net/furniture2/wp-content/themes/woodmart/images/payments.png"
                        alt=""
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
