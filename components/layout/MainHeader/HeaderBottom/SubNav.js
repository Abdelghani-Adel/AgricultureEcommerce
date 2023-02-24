import Link from "next/Link";
import { useSelector } from "react-redux";
import CategoryNavItem from "../Reusable/Navigation/CategoryNavItem";

const SubNav = (props) => {
  const links = useSelector((state) => state.subNav);

  console.log(links);
  return (
    <>
      {links.length > 0 && (
        <div className="nav-2">
          <ul className="header-nav">
            {links.map((link) => (
              <CategoryNavItem link={link} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SubNav;
