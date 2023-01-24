import Link from "next/Link";
import { useEffect } from "react";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";
import links from "../../../../data/category.json";
import HeaderNavItem from "./HeaderNavItem";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const navigationmenu = [
  {
    id: 1,
    FAClassificationName: "Home Pages",
    child: true,
    submenu: [
      {
        id: 11,
        FAClassificationPath: "/",
        FAClassificationName: "Home v1",
      },
      {
        id: 12,
        FAClassificationPath: "/home-v2",
        FAClassificationName: "Home v2",
      },
      {
        id: 13,
        FAClassificationPath: "/home-v3",
        FAClassificationName: "Home v3",
      },
    ],
  },
  {
    id: 2,
    FAClassificationName: "Blog",
    child: true,
    submenu: [
      {
        id: 21,
        FAClassificationName: "Blog Archive",
        child: true,
        submenu: [
          {
            id: 211,
            FAClassificationPath: "/blog-grid",
            FAClassificationName: "Grid View",
          },
          {
            id: 212,
            FAClassificationPath: "/blog-list",
            FAClassificationName: "List View",
          },
          {
            id: 213,
            FAClassificationPath: "/blog-masonry",
            FAClassificationName: "Masonary View",
          },
        ],
      },
      {
        id: 22,
        FAClassificationPath: "/post-single/1",
        FAClassificationName: "Blog Single",
      },
    ],
  },
  {
    id: 3,
    FAClassificationName: "Pages",
    child: true,
    submenu: [
      {
        id: 31,
        FAClassificationPath: "/about",
        FAClassificationName: "About Us",
      },
      {
        id: 32,
        FAClassificationPath: "/login",
        FAClassificationName: "Login",
      },
      {
        id: 33,
        FAClassificationPath: "/register",
        FAClassificationName: "Sign Up",
      },
      {
        id: 34,
        FAClassificationPath: "/checkout",
        FAClassificationName: "Checkout",
      },
      {
        id: 35,
        FAClassificationPath: "/cart",
        FAClassificationName: "Cart",
      },
      {
        id: 36,
        FAClassificationPath: "/wishlist",
        FAClassificationName: "Wishlist",
      },
      {
        id: 37,
        FAClassificationPath: "/legal",
        FAClassificationName: "Legal",
      },
      {
        id: 38,
        FAClassificationPath: "/error",
        FAClassificationName: "Error 404",
      },
    ],
  },
];

const HeaderNav = (props) => {
  const { lang } = props;
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const getNavLinks = async () => {
      const response = await fetch(
        "http://192.168.10.251:800/api/ECommerceSetting/GetCategoriesMenu",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lang: lang,
            FAClassification_ParentId: 81,
          }),
        }
      );

      const data = await response.json();
      setNavLinks(data);
    };

    getNavLinks();
  }, [lang]);

  return (
    <ul className="header-nav">
      {navLinks.map((link) => (
        <HeaderNavItem link={link} key={link.FAClassificationId} />
      ))}
    </ul>
  );
};

export default withTranslation(HeaderNav);
