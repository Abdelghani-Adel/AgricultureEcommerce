import Link from "next/Link";
import { useState, Fragment } from "react";
import { FaAngleDown, FaAngleUp, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const HeaderNavItem = (props) => {
  const { link, isChild } = props;
  const [subMenuIsShown, setSubMenuIsShown] = useState(false);

  const itemStyle = link.ClassificationChildren.length > 0 ? "menu-item-has-children" : "";
  const itemLink =
    link.ClassificationChildren.length > 0 ? `/categories/mopidat` : `/categories/organic`;

  const clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubMenuIsShown(!subMenuIsShown);
  };

  const blurHandler = () => {
    setSubMenuIsShown(false);
  };

  return (
    <li className={`menu-item ${itemStyle}`} onMouseLeave={blurHandler}>
      <Link href={itemLink}>
        {link.FAClassificationName}
        {link.ClassificationChildren.length > 0 && (
          <span onClick={clickHandler} className="icon">
            {!isChild && (!subMenuIsShown ? <FaAngleDown /> : <FaAngleUp />)}
            {isChild && (!subMenuIsShown ? <FaAngleRight /> : <FaAngleLeft />)}
          </span>
        )}
      </Link>

      {subMenuIsShown && (
        <ul className="sub-menu" role="menu">
          {link.ClassificationChildren.map((subItem) => (
            <HeaderNavItem link={subItem} key={subItem.FAClassificationId} isChild={true} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default HeaderNavItem;
