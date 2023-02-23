import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { fetchCategoriesMenu } from "../../../../../services/categoryServices";
import HeaderSearchFromLabel from "./HeaderSearchFormLabel";

const HeaderSearchFormLabelList = (props) => {
  const lang = useSelector((state) => state.lang);
  const links = useSelector((state) => state.navbarLinks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="andro_search-adv-cats menu-item-has-children">
      <span>
        {selectedCategory} <FaAngleDown />
      </span>
      <div className="sub-menu">
        <div className="andro_dropdown-scroll">
          {links.map((link, i) => (
            <HeaderSearchFromLabel key={i} category={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchFormLabelList;
