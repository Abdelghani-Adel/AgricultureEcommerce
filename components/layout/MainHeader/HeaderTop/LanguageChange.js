import Link from "next/link";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";

const LanguageChange = (props) => {
  const [language, setLanguage] = useState(props.lang);

  const changeLang = (lang) => {
    setLanguage(lang);
    props.changeLang(lang);
  };

  return (
    <ul className="andro_header-top-links">
      {/* <li className="menu-item">
        <Link href="/login"> My Account </Link>
      </li> */}
      <li className="menu-item menu-item-has-children">
        <Link href="">
          <span className="andro_current-currency-text"> {props.t("Navbar.Lang")}</span>
          {props.t("Navbar." + language)}
        </Link>
        <ul className="sub-menu sub-menu-left">
          <li onClick={() => changeLang("en")}>{props.t("Navbar.en")}</li>
          <li onClick={() => changeLang("ar")}>{props.t("Navbar.ar")}</li>
        </ul>
      </li>
    </ul>
  );
};

export default withTranslation(LanguageChange);
