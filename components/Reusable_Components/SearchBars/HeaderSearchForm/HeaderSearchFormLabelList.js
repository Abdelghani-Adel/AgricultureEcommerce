import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
//import { fetchCategoriesMenu } from "../../../../../services/categoryServices";
import HeaderSearchFromLabel from "./HeaderSearchFormLabel";

const HeaderSearchFormLabelList = (props) => {
  return (
    <div className="header_search--list menu-item-has-children">
      <span className="txt-dark">
        {props.selectedCategory} <FaAngleDown />
      </span>
      <ul className="sub-menu">
        {props.links.map((link, i) => (
          <HeaderSearchFromLabel
            key={i}
            category={link}
            catChangeHandler={props.catChangeHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default HeaderSearchFormLabelList;
