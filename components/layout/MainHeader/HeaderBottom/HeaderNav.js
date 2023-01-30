import Link from "next/Link";
import { useEffect } from "react";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";
import links from "../../../../data/category.json";
import HeaderNavItem from "./HeaderNavItem";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderNav = (props) => {
  const { lang } = props;
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const getNavLinks = async () => {
      const response = await fetch(
        "http://192.168.10.251:800/api/ECommerceSetting/GetCategoriesMenu",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lang: lang,
            FAClassification_ParentId: 81,
          }),
        }
      );

      const data = await response.json();
      setNavLinks(data);
    };

    getNavLinks();
  }, [lang]);

  return (
    <ul className="header-nav">
      {navLinks.map((link) => (
        <HeaderNavItem lang={lang} link={link} key={link.FAClassificationId} />
      ))}
    </ul>
  );
};

export default withTranslation(HeaderNav);
