import { withTranslation } from "react-multi-lang";
import { Component } from "react";
import Link from "next/Link";
import navLinks from "../../../../data/category.json";

const navigationmenus = [
  {
    id: 1,
    linkText: "Home",
    child: false,
    link: "/",
  },
  {
    id: 2,
    linkText: "About",
    link: "/about",
  },
  {
    id: 3,
    linkText: "Shop",
    link: "/categories",
  },
  {
    id: 4,
    linkText: "ContactUs",
    link: "/contact",
  },
  {
    id: 5,
    linkText: "Chat",
    link: "/chat",
  },
];

const HeaderNav = () => {
  return (
    <ul className="navbar-nav">
      {navLinks.map((link, index) => (
        <li key={index} className={`menu-item ${link.child && "menu-item-has-children"}`}>
          <Link href={"categories/" + link.slug}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default withTranslation(HeaderNav);
