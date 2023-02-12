import HeaderSearchFromLabel from "./HeaderSearchFormLabel";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { CategoryApi } from "../../../../../services/CategoryAPI";

const CategoryAPI = new CategoryApi();

const HeaderSearchFormLabelList = (props) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getCategories = async () => {
      const categories = await CategoryAPI.GetCategoriesMenu();
      setCategories(categories);
    };

    getCategories();
  }, []);
  return (
    <div className="andro_search-adv-cats">
      <span>
        {selectedCategory} <FaAngleDown />
      </span>
      <div className="sub-menu">
        <div className="andro_dropdown-scroll">
          {categories.map((category, i) => (
            <HeaderSearchFromLabel key={i} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchFormLabelList;
