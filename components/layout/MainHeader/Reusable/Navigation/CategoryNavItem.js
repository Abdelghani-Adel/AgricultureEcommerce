import Link from "next/Link";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";

const CategoryNavItem = (props) => {
  const { link, isChild } = props;
  const [subMenuIsShown, setSubMenuIsShown] = useState(false);

  const itemStyle = link.ClassificationChildren.length > 0 ? "menu-item-has-children" : "";
  const itemLink = `/categories/${link.FAClassificationSlug || "SlugNotFound"}?id=${
    link.FAClassificationId
  }`;

  const arrowClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubMenuIsShown(!subMenuIsShown);
  };

  const blurHandler = () => {
    setSubMenuIsShown(false);
  };

  return (
    <li className={`menu-item ${itemStyle}`} onMouseLeave={blurHandler} onClick={blurHandler}>
      <Link href={itemLink}>
        <img className="me-2" src={`data:image/png;base64,${link.Icon}`} />
        {link.FAClassificationName}

        {link.ClassificationChildren.length > 0 && (
          <span onClick={arrowClickHandler} className="icon">
            {!isChild && (!subMenuIsShown ? <FaAngleDown /> : <FaAngleUp />)}
            {isChild && (!subMenuIsShown ? <FaAngleRight /> : <FaAngleLeft />)}
          </span>
        )}
      </Link>

      {subMenuIsShown && (
        <ul className="sub-menu" role="menu">
          {link.ClassificationChildren.map((subItem) => (
            <CategoryNavItem link={subItem} key={subItem.FAClassificationId} isChild={true} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoryNavItem;
