import { useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { CategoryApi } from "../../../../../services/CategoryAPI";
import HeaderNavItem from "./HeaderNavItem";

const CategoryAPI = new CategoryApi();

const HeaderNav = (props) => {
  const { lang } = props;
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const getNavLinks = async () => {
      const data = await CategoryAPI.GetCategoriesMenu();
      setNavLinks(data);
    };

    getNavLinks();
  }, []);

  return (
    <ul className="header-nav">
      {navLinks.map((link) => (
        <HeaderNavItem lang={lang} link={link} key={link.FAClassificationId} />
      ))}
    </ul>
  );
};

export default withTranslation(HeaderNav);
