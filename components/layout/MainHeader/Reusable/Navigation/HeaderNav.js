import { useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import HeaderNavItem from "./HeaderNavItem";

const HeaderNav = (props) => {
  const { lang } = props;
  console.log(props.test);
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
            lang: "ar",
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
