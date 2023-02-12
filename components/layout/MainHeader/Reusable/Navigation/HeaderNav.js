import { useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useDispatch, useSelector } from "react-redux";
import { loaderActions } from "../../../../../redux/slices/loaderSlice";
import { CategoryApi } from "../../../../../services/CategoryAPI";
import HeaderNavItem from "./HeaderNavItem";

const CategoryAPI = new CategoryApi();

const HeaderNav = (props) => {
  const { lang } = props;
  const navLinksState = useSelector((state) => state.navbarLinks);
  const navLinks = navLinksState.slice(0, 4);

  return (
    <ul className="header-nav">
      {navLinks.map((link) => (
        <HeaderNavItem lang={lang} link={link} key={link.FAClassificationId} />
      ))}
    </ul>
  );
};

export default withTranslation(HeaderNav);
