import Link from "next/Link";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useDispatch, useSelector } from "react-redux";
import { langActions } from "../../../../../redux/slices/lang";
import { setDefaultLanguage, setTranslations } from "react-multi-lang";
import ar from "../../../../../translations/ar.json";
import en from "../../../../../translations/en.json";
import { storeLangInCookie } from "../../../../../helper/Cookies/LangCookie";

setTranslations({ ar, en });

const LangController = (props) => {
  const lang = useSelector((state) => state.lang);
  setDefaultLanguage(lang);
  const dispatch = useDispatch();

  const changeLang = (lang) => {
    // props.changeLang(lang);
    setDefaultLanguage(lang);
    storeLangInCookie(lang);
    window.location.reload();
    // dispatch(langActions.changeLang(lang));
  };

  return (
    <li className="header_control lang_controller">
      <ul>
        <li className="menu-item menu-item-has-children">
          <Link href="">{lang && props.t("Navbar." + lang)}</Link>
          <ul className="sub-menu sub-menu-left">
            <li onClick={() => changeLang("en")}>{props.t("Navbar.en")}</li>
            <li onClick={() => changeLang("ar")}>{props.t("Navbar.ar")}</li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default withTranslation(LangController);
