import Link from "next/Link";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";
import CategoryNavItem from "./CategoryNavItem";

const HeaderNavItem = (props) => {
  const { link, lang } = props;

  return <CategoryNavItem lang={lang} link={link} />;
};

export default HeaderNavItem;
