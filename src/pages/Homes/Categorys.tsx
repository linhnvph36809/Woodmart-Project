import { useEffect, useState, CSSProperties} from "react";
import { getAllCategorys } from "../../api/category.api";
import { ICategory } from "../../interfaces/ICategories/ICategories";
import ClipLoader from "react-spinners/ClipLoader";

const Categories = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    async function getCategorys() {
        const { data } = await getAllCategorys();
        setCategories(data);
    }

    useEffect(() => {
        getCategorys();
    }, []);
    
    return (
        <div className="my-5 grid grid-cols-258 gap-y-6 justify-between">
            {
                categories.length > 0 ? categories.map((category:ICategory) =>
                    <div className="bg-cover bg-no-repeat rounded-full m-h-[258px]
                    bg-center relative category-hover overflow-hidden" key={category.id}>
                        <a href="#" className="block text-center">
                            <img
                                className="rounded-full scale-[1.1] transition-all duration-300 ease-linear"
                                src={category.image_url}
                                alt=""
                            />
                            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-500 ease-linear transition-bg bg-black bg-opacity-15">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                                    <h3 className="text-xl nav-color title-font min-w-[93px] h-[36px] bg-white transition-all duration-400
                                    ease-linear rounded-[25px] flex justify-center items-center translate-y-[18px] now">
                                        {category.category_name}
                                    </h3>
                                    <p className="text-white text-base header-font mt-2 transition-category">
                                        16 products{" "}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ) : 
                <ClipLoader
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            }
        </div>
    );
};

export default Categories;
