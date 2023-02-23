import Link from "next/Link";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import Categories from "../../data/category.json";

const Category = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = Categories;
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      {data &&
        data.map((cat, index) => {
          return (
            <li key={index} className={`menu-item ${cat.child ? "menu-item-has-children" : ""} `}>
              <Link href="#">{cat.title}</Link>
            </li>
          );
        })}
      {/* <li className="andro_category-mm-item">
        <Link href="#">{props.t("Categories.Ingrediants")}</Link>
      </li>
      <li className="andro_category-mm-item">
        <Link href="#">{props.t("Categories.Organic")}</Link>
      </li>
      <li className="andro_category-mm-item">
        <Link href="#">{props.t("Categories.Farms")}</Link>
      </li>
      <li className="andro_category-mm-item">
        <Link href="#">{props.t("Categories.Supplements")}</Link>
      </li> */}
    </>
  );
};

export default withTranslation(Category);
