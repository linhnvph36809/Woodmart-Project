import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../interfaces/ICategories/ICategories";
import axios from "axios";

const Category = memo(() => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    (async function(){
      const {data} = await axios.get("https://woodmart.click/api/category")
      setCategories(data)
    })()
  }, []);


  return (
    <ul className="flex gap-7">
      {categories?.map((category:any) => (
        <li key={category.id}>
          <Link
            to={`product-category/${category.id}`}
            className="flex items-center gap-2 header-font text-[14px] block hover:text-[#f59a57] transition-all duration-300 ease-linear"
          >
            <img src={category.icon} alt={`${category.category_name} icon`} className="w-[18px]" />
            {category.category_name}
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default Category;
