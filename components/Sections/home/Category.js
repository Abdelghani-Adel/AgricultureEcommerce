import React, { Component } from "react";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

const Category = (props) => {
  return (
    <ul>
      <li className="andro_category-mm-item">
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
      </li>
    </ul>
  );
};

export default withTranslation(Category);
