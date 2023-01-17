import Link from "next/link";

const NavLink = (props) => {
  const { item } = props;
  return (
    <li className="menu-item">
      <Link to={item.link}> {item.linkText} </Link>
    </li>
  );
};

export default NavLink;
