import Link from "next/Link";
import { useSelector } from "react-redux";
import CategoryNavItem from "../Reusable/Navigation/CategoryNavItem";

const SubNav = (props) => {
  const links = useSelector((state) => state.subNav);

  return (
    <>
      {links.length > 0 && (
        <div className="sub_nav">
          <ul className="header-nav">
            {links.map((link) => (
              <CategoryNavItem key={link.FAClassificationId} link={link} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SubNav;
