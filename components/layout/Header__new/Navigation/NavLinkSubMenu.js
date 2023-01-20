const NavLinkSubMenu = (props) => {
  const { submenu } = props;
  return (
    <ul className="sub-menu" role="menu">
      {submenu.map(
        (sub_item, i) =>
          sub_item.child ? (
            <NavLinkSubMenu
              item={sub_item}
              style="menu-item menu-item-has-children"
            />
          ) : (
            <NavLink />
          )
        // <li
        //   key={i}
        //   className={`menu-item ${sub_item.child && "menu-item-has-children"} `}
        // >
        //   {sub_item.child ? (
        //     <Link onClick={(e) => e.preventDefault()} to="/">
        //       {sub_item.linkText}
        //     </Link>
        //   ) : (
        //     <Link to={sub_item.link}> {sub_item.linkText} </Link>
        //   )}
        //   {sub_item.submenu ? (
        //     <ul className="sub-menu">
        //       {sub_item.submenu.map((third_item, i) => (
        //         <li className="menu-item" key={i}>
        //           <Link to={third_item.link}>{third_item.linkText}</Link>
        //         </li>
        //       ))}
        //     </ul>
        //   ) : null}
        // </li>
      )}
    </ul>
  );
};

export default NavLinkSubMenu;
