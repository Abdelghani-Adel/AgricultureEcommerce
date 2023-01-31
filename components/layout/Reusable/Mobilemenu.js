import React, { Component } from "react";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

const navigationmenu = [
  {
    id: 1,
    linkText: "Home",
    child: false,
    link: "/",
  },
  {
    id: 2,
    linkText: "About",
    child: false,
    link: "/about",
  },
  {
    id: 3,
    linkText: "Shop",
    child: false,
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

class Mobilemenu extends Component {
  getNextSibling = function (elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
      if (sibling.matches(selector)) return sibling;
      sibling = sibling.nextElementSibling;
    }
  };

  triggerChild = (e) => {
    let subMenu = "";

    subMenu =
      this.getNextSibling(e.target, ".sub-menu") !== undefined
        ? this.getNextSibling(e.target, ".sub-menu")
        : null;

    if (subMenu !== null && subMenu !== undefined && subMenu !== "") {
      subMenu.classList = subMenu.classList.contains("d-block") ? "sub-menu" : "sub-menu d-block";
    }
  };
  render() {
    return (
      <>
        <Link className="navbar-brand" href="/">
          {" "}
          <img src={"../img/logo.png"} alt="logo" />{" "}
        </Link>
        <ul>
          {navigationmenu.length > 0
            ? navigationmenu.map((item, i) => (
                <li
                  key={i}
                  className={`menu-item ${item.child ? "menu-item-has-children" : ""} `}
                  onClick={this.triggerChild}
                >
                  {item.child ? (
                    <Link onClick={(e) => e.preventDefault()} href="/">
                      {" "}
                      {this.props.t("Navbar." + item.linkText)}{" "}
                    </Link>
                  ) : (
                    <Link href={item.link}> {this.props.t("Navbar." + item.linkText)} </Link>
                  )}
                  {item.child ? (
                    <ul className="sub-menu" role="menu">
                      {item.submenu.map((sub_item, i) => (
                        <li
                          key={i}
                          className={`menu-item ${sub_item.child ? "menu-item-has-children" : ""} `}
                        >
                          {sub_item.child ? (
                            <Link onClick={(e) => e.preventDefault()} href="/">
                              {" "}
                              {sub_item.linkText}{" "}
                            </Link>
                          ) : (
                            <Link href={sub_item.link}> {sub_item.linkText} </Link>
                          )}
                          {sub_item.submenu ? (
                            <ul className="sub-menu">
                              {sub_item.submenu.map((third_item, i) => (
                                <li className="menu-item" key={i}>
                                  <Link href={third_item.link}>{third_item.linkText}</Link>
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
      </>
    );
  }
}
export default withTranslation(Mobilemenu);
