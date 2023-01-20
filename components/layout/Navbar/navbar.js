import classNames from "classnames";
import React from "react";
import HeaderComponent from "../../../helper/Navigationhelper";
import Canvas from "../Canvas";
import Mobilemenu from "../Mobilemenu";
import Navigation from "./Navigation";
import Link from "next/Link";
import {
  FaCommentAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaRegHeart,
  FaSearch,
  FaShoppingBasket,
  FaTwitter,
  FaUserAlt,
  FaYoutube,
} from "react-icons/fa";
import { withTranslation } from "react-multi-lang";

class Navbar extends HeaderComponent {
  constructor(props) {
    super(props);

    this.state = {
      language: this.props.lang,
      isTop: false,
    };
  }
  componentDidMount = () => {
    window.addEventListener(
      "scroll",
      () => {
        this.setState({
          isTop: window.scrollY > 110,
        });
      },
      false
    );
  };
  changeLang = (lang) => {
    this.setState({ language: lang });
    this.props.changeLang(lang);
  };
  render() {
    const { t } = this.props;
    const { language } = this.state;
    const stickyheader = this.state.isTop ? "sticky" : "";
    return (
      <>
        {/* Aside (Right Panel) */}
        <aside
          className={classNames("andro_aside andro_aside-right", {
            open: this.state.sidebarmethod,
          })}
        >
          <Canvas />
        </aside>
        <div className="andro_aside-overlay aside-trigger-right" onClick={this.sidebarToggle} />
        {/* Aside (Mobile Navigation) */}
        <aside
          className={classNames("andro_aside andro_aside-left", {
            open: this.state.navmethod,
          })}
        >
          <Mobilemenu language={language} />
        </aside>
        <div className="andro_aside-overlay aside-trigger-left" onClick={this.toggleNav} />
        {/* Header Start */}
        <header className={`andro_header header-1 can-sticky ${stickyheader}`}>
          {/* Topheader Start */}
          <div className="andro_header-top">
            <div className="container">
              <div className="andro_header-top-inner">
                <ul className="andro_header-top-sm andro_sm">
                  <li>
                    {" "}
                    <Link href="#">
                      <FaFacebookF />{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="#">
                      {" "}
                      <FaTwitter />{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="#">
                      {" "}
                      <FaLinkedinIn />{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="#">
                      {" "}
                      <FaYoutube />{" "}
                    </Link>{" "}
                  </li>
                </ul>

                <ul className="andro_header-top-links">
                  <li className="menu-item">
                    <Link href="/login">{t("Navbar.MyAccount")}</Link>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link href="">
                      {" "}
                      <span className="andro_current-currency-text"> {t("Navbar.Lang")}</span>{" "}
                      {t("Navbar." + this.state.language)}{" "}
                    </Link>
                    <ul className="sub-menu sub-menu-left">
                      <li onClick={() => this.changeLang("en")}>{t("Navbar.en")}</li>
                      <li onClick={() => this.changeLang("ar")}>{t("Navbar.ar")}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Topheader End */}
          {/* Middle Header Start */}
          <div className="andro_header-middle">
            <div className="container">
              <nav className="navbar">
                {/* Logo */}
                <Link className="navbar-brand" href="/">
                  {" "}
                  <img src={"../img/logo.png"} alt="logo" />{" "}
                </Link>
                {/* Search Form */}
                <div className="andro_search-adv">
                  <form method="post">
                    <div className="andro_search-adv-cats">
                      <span>{t("Navbar.AllCategories")}</span>
                      <div className="sub-menu"></div>
                    </div>
                    <div className="andro_search-adv-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t("Navbar.Search")}
                        name="search"
                      />
                      <button type="submit" name="button">
                        <FaSearch />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="andro_header-controls">
                  <ul className="andro_header-controls-inner">
                    <li className="andro_header-favorites">
                      <Link href="/wishlist" title={t("Navbar.WishList")}>
                        <FaCommentAlt />
                      </Link>
                    </li>
                    <li className="andro_header-favorites">
                      <Link href="/vendor-registration" title={t("Navbar.WishList")}>
                        <FaUserAlt />
                      </Link>
                    </li>
                    <li className="andro_header-favorites">
                      {" "}
                      <Link href="/wishlist" title={t("Navbar.WishList")}>
                        {/* <i className="flaticon-like" />  */}
                        <FaRegHeart />
                      </Link>
                    </li>
                    <li className="andro_header-cart">
                      <Link href="/cart" title={t("Navbar.YourCart")}>
                        <FaShoppingBasket />
                        {/* <i className="flaticon-shopping-basket" /> */}
                        <div className="andro_header-cart-content">
                          <span>9 Items</span>
                          <span>249.99$</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                  {/* Toggler */}
                  <div className="aside-toggler aside-trigger-left" onClick={this.toggleNav}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* Middle Header End */}
          {/* Bottom Header Start */}
          <div className="andro_header-bottom">
            <div className="container">
              <div className="andro_header-bottom-inner">
                {/* Menu */}
                <Navigation language={language} />
                {/* Side navigation toggle */}
                <div
                  className="aside-toggler aside-trigger-right desktop-toggler"
                  onClick={this.sidebarToggle}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Header End */}
        </header>
        {/* Header End */}
      </>
    );
  }
}

export default withTranslation(Navbar);
