import Link from "next/Link";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../redux/slices/loaderSlice";
import Image from "next/image";
import { encrypt } from "../../../helper/crypto";

const CategoryNavItem = (props) => {
  const { link, isChild } = props;
  const [subMenuIsShown, setSubMenuIsShown] = useState(false);
  const dispatch = useDispatch();

  const itemStyle = link.ClassificationChildren.length > 0 ? "menu-item-has-children" : "";

  const showLoader = () => {
    dispatch(loaderActions.showLoader());
  };

  const arrowClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubMenuIsShown(!subMenuIsShown);
  };

  const blurHandler = () => {
    setSubMenuIsShown(false);
  };

  const encryptedID = encrypt(`${link.FAClassificationId}`);

  return (
    <li className={`nav_item ${itemStyle}`} onMouseLeave={blurHandler} onClick={blurHandler}>
      <Link
        href={{
          pathname: `/categories/${link.FAClassificationSlug}`,
          query: { id: `${encryptedID}` },
        }}
        onClick={showLoader}
        className="nav_link position-relative"
        prefetch={false}
      >
        {link.IconTypeId == 1 && (
          <Image
            className="category_icon svg"
            alt="Icon"
            src={`${link.Icon}`}
            width={16}
            height={16}
          />
        )}
        {link.IconTypeId == 2 && (
          <Image className="category_icon" alt="Icon" src={`${link.Icon}`} width={16} height={16} />
        )}

        {link.FAClassificationName}

        {link.ClassificationChildren.length > 0 && (
          <span onClick={arrowClickHandler} className="icon">
            {!isChild && (!subMenuIsShown ? <FaAngleDown /> : <FaAngleUp />)}
            {isChild && (!subMenuIsShown ? <FaAngleRight /> : <FaAngleLeft />)}
          </span>
        )}
      </Link>

      {subMenuIsShown && (
        <ul className="sub_menu" role="menu">
          {link.ClassificationChildren.map((subItem) => (
            <CategoryNavItem link={subItem} key={subItem.FAClassificationId} isChild={true} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoryNavItem;
