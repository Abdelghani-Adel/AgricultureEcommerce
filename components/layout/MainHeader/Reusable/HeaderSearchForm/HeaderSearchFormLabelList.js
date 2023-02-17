import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { fetchCategoriesMenu } from "../../../../../services/categoryServices";
import HeaderSearchFromLabel from "./HeaderSearchFormLabel";

const HeaderSearchFormLabelList = (props) => {
  const lang = useSelector((state) => state.lang);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCategoriesMenu(lang);
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
