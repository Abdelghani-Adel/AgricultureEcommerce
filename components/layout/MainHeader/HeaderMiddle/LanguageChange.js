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
    <ul className="language-change">
      <li className="menu-item menu-item-has-children">
        <Link href="">{props.t("Navbar." + language)}</Link>
        <ul className="sub-menu sub-menu-left">
          <li onClick={() => changeLang("en")}>{props.t("Navbar.en")}</li>
          <li onClick={() => changeLang("ar")}>{props.t("Navbar.ar")}</li>
        </ul>
      </li>
    </ul>
  );
};

export default withTranslation(LanguageChange);
