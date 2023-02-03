import Link from "next/Link";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";

const CategoryNavItem = (props) => {
  const { link, isChild } = props;
  const [subMenuIsShown, setSubMenuIsShown] = useState(false);

  const itemStyle = link.ClassificationChildren.length > 0 ? "menu-item-has-children" : "";
  const itemLink =
    link.ClassificationChildren.length > 0
      ? `/categories/${"mopidat"}?id=${link.FAClassificationId}`
      : `/categories/${"organic"}?id=${link.FAClassificationId}`;
  // const itemLink = `/categories/${link.FAClassificationSlug}?&id=${
  //   link.FAClassificationId
  // }`;

  const arrowClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubMenuIsShown(!subMenuIsShown);
  };

  const blurHandler = () => {
    setSubMenuIsShown(false);
  };

  // const icon = new Buffer(link.Icon, "base64");
  // let image = new Image();
  console.log(link.Icon);
  // image.src = link.Icon;
  // console.log(image);

  return (
    <li className={`menu-item ${itemStyle}`} onMouseLeave={blurHandler} onClick={blurHandler}>
      <Link href={itemLink}>
        {link.FAClassificationName}
        {/* {icon} */}
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
