import Link from "next/Link";
import { useState } from "react";
import { Fragment } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const HeaderNavItem = (props) => {
  const { link } = props;
  const [subMenuIsShown, setSubMenuIsShown] = useState(false);

  const itemStyle = link.ClassificationChildren.length > 0 && "menu-item-has-children";

  const clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target);
    setSubMenuIsShown(!subMenuIsShown);
  };

  const blurHandler = () => {
    setSubMenuIsShown(false);
  };

  return (
    <li className={`menu-item ${itemStyle}`} onMouseLeave={blurHandler}>
      {link.ClassificationChildren.length == 0 && (
        <Link href={link.FAClassificationPath}>{link.FAClassificationName} </Link>
      )}

      {link.ClassificationChildren.length > 0 && (
        <Fragment>
          <Link href={link.FAClassificationPath}>
            {link.FAClassificationName} {"  "}
            <span onClick={clickHandler} className="icon">
              {!subMenuIsShown ? <FaArrowDown /> : <FaArrowUp />}
            </span>
          </Link>

          {subMenuIsShown && (
            <ul className="sub-menu" role="menu">
              {link.ClassificationChildren.map((subItem) => (
                <HeaderNavItem link={subItem} key={subItem.FAClassificationId} />
              ))}
            </ul>
          )}
        </Fragment>
      )}
    </li>
  );
};

export default HeaderNavItem;
