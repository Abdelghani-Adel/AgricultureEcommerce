import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import HeaderNavItem from "./HeaderNavItem";

const HeaderNav = (props) => {
  const { lang } = props;
  const navLinksState = useSelector((state) => state.navbarLinks);

  return (
    <>
      <ul className="header-nav">
        {navLinksState &&
          navLinksState.map((link) => (
            <HeaderNavItem lang={lang} link={link} key={link.FAClassificationId} />
          ))}
      </ul>
    </>
  );
};

export default withTranslation(HeaderNav);
