import React, { Component } from "react";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

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

class Navigation extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        {navigationmenus.length > 0
          ? navigationmenus.map((item, i) => (
              <li
                key={i}
                className={`menu-item ${
                  item.child ? "menu-item-has-children" : ""
                } `}
                onClick={this.triggerChild}
              >
                {item.child ? (
                  <Link onClick={(e) => e.preventDefault()} href="/">
                    {" "}
                    {this.props.t("Navbar." + item.linkText)}{" "}
                  </Link>
                ) : (
                  <Link href={item.link}>
                    {" "}
                    {this.props.t("Navbar." + item.linkText)}{" "}
                  </Link>
                )}
                {item.child ? (
                  <ul className="sub-menu" role="menu">
                    {item.submenu.map((sub_item, i) => (
                      <li
                        key={i}
                        className={`menu-item ${
                          sub_item.child ? "menu-item-has-children" : ""
                        } `}
                      >
                        {sub_item.child ? (
                          <Link onClick={(e) => e.preventDefault()} href="/">
                            {" "}
                            {sub_item.linkText}{" "}
                          </Link>
                        ) : (
                          <Link href={sub_item.link}>
                            {" "}
                            {sub_item.linkText}{" "}
                          </Link>
                        )}
                        {sub_item.submenu ? (
                          <ul className="sub-menu">
                            {sub_item.submenu.map((third_item, i) => (
                              <li className="menu-item" key={i}>
                                <Link href={third_item.link}>
                                  {third_item.linkText}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))
          : null}
      </ul>
    );
  }
}

export default withTranslation(Navigation);
