import Link from "next/Link";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useDispatch, useSelector } from "react-redux";
import { langActions } from "../../../../redux/slices/lang";

const LanguageChange = (props) => {
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  const changeLang = (lang) => {
    props.changeLang(lang);
    dispatch(langActions.changeLang(lang));
  };

  return (
    <ul className="header_control language-change">
      <li className="menu-item menu-item-has-children">
        <Link href="">{props.t("Navbar." + lang)}</Link>
        <ul className="sub-menu sub-menu-left">
          <li onClick={() => changeLang("en")}>{props.t("Navbar.en")}</li>
          <li onClick={() => changeLang("ar")}>{props.t("Navbar.ar")}</li>
        </ul>
      </li>
    </ul>
  );
};

export default withTranslation(LanguageChange);
