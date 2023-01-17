import Link from "next/link";
import { Fragment } from "react";
import NavLink from "./NavLink";
import NavLinkWithSubMenu from "./NavLinkWithSubMenu";

const NavigationLink = (props) => {
  const { item } = props;
  const itemHasChild = item.child;

  return (
    <Fragment>
      {itemHasChild ? (
        <NavLinkWithSubMenu
          item={item}
          style="menu-item menu-item-has-children"
        />
      ) : (
        <NavLink item={item} />
      )}
    </Fragment>
  );
};

export default NavigationLink;
