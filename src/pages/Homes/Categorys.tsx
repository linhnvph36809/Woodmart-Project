import { memo, useEffect, useState } from "react";
import { ICategory } from "../../interfaces/ICategories/ICategories";

import {getCategorysByCount } from "../../api/categorys.api";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const Categories = memo(() => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    (async function(){
      const datas = await getCategorysByCount()  
      setCategories(datas)
    })()
    
  }, []);
  

  return (
    <>
      {categories?.length > 0 ? (
        <div className="my-5 grid grid-rows-2 grid-cols-258 gap-y-6 justify-between call-api-success">
          {categories.map((category: any) => (
            <div
              className="bg-cover bg-no-repeat rounded-full 
                    bg-center relative category-hover overflow-hidden"
              key={category.category.id}
            >
              <Link to={`product-category/${category?.category?.id}`} className="block text-center">
                <img
                  className="rounded-full scale-[1.1] w-full min-h-[258px]
                  object-cover transition-all duration-300 ease-linear"
                  src={category?.category?.background}
                  alt="Image Erorr"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-500
                 ease-linear transition-bg bg-black bg-opacity-15">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <h3
                      className="text-xl nav-color title-font min-w-[93px] h-[36px] px-2 py-3 bg-white transition-all duration-400
                                ease-linear rounded-[25px] flex justify-center items-center translate-y-[18px] category-item"
                    >
                      {category.category.category_name}
                    </h3>
                    <p className="text-white text-base header-font mt-2 transition-category">
                      {category["COUNT(id)"]} products{" "}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center block-spinner">
            <Spinner />
        </div>
      )}
    </>
  );
});

export default Categories;
