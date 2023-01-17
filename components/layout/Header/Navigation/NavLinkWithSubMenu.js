import Link from "next/link";
import NavLinkSubMenu from "./NavLinkSubMenu";

const NavLinkWithSubMenu = (props) => {
  const { item, style } = props;
  const itemSytle = "menu-item menu-item-has-children";
  const preventDefaultHandler = (e) => e.preventDefault();

  return (
    <li className={style}>
      <Link onClick={preventDefaultHandler} href="/">
        {item.linkText}
        <NavLinkSubMenu submenu={item.submenu} />
      </Link>
    </li>
  );
};

export default NavLinkWithSubMenu;
