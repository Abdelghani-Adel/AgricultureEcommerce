import Link from "next/Link";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";

const CategoryNavItem = (props) => {
  const { link, isChild } = props;
  const [subMenuIsShown, setSubMenuIsShown] = useState(false);

  const itemStyle = link.ClassificationChildren.length > 0 ? "menu-item-has-children" : "";
  const itemLink = `/categories/${link.FAClassificationSlug}?id=${link.FAClassificationId}`;

  const encoded = window.btoa(unescape(encodeURIComponent(link.FAClassificationId)));

  const arrowClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubMenuIsShown(!subMenuIsShown);
  };

  const blurHandler = () => {
    setSubMenuIsShown(false);
  };

  return (
    <li className={`menu-item mt-1 ${itemStyle}`} onMouseLeave={blurHandler} onClick={blurHandler}>
      <Link
        href={{
          pathname: `/categories/${link.FAClassificationSlug}`,
          query: { id: `${link.FAClassificationId}` },
        }}
      >
        {link.IconTypeId == 1 && <img className="category_icon svg" src={`${link.Icon}`} />}
        {link.IconTypeId == 2 && <img className="category_icon" src={`${link.Icon}`} />}

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
