import { useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import { CategoryApi } from "../../../../../services/CategoryAPI";
import HeaderNavItem from "./HeaderNavItem";

const CategoryAPI = new CategoryApi();

const HeaderNav = (props) => {
  const { lang } = props;
  const [navLinks, setNavLinks] = useState([]);

  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const getNavLinks = async () => {
      const data = await CategoryAPI.GetCategoriesMenu();
      // setNavLinks(data);
      setNavLinks(data.slice(0, 6));
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
