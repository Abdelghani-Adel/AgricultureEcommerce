import classNames from "classnames";
import React from "react";
import HeaderComponent from "../../../helper/Navigationhelper";
import SideCategoriesList from "../MainHeader/Reusable/SideCategoriesList";
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
import CategoriesNav from "./categoriesNav";

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
        <aside
          className={classNames("andro_aside andro_aside-right", {
            open: this.state.sidebarmethod,
          })}
        >
          <SideCategoriesList />
        </aside>
        <div className="andro_aside-overlay aside-trigger-right" onClick={this.sidebarToggle} />

        <aside
          className={classNames("andro_aside andro_aside-left", {
            open: this.state.navmethod,
          })}
        >
          <Mobilemenu language={language} />
        </aside>
        <div className="andro_aside-overlay aside-trigger-left" onClick={this.toggleNav} />

        <header className={`andro_header header-1 can-sticky ${stickyheader}`}>
          <div className="andro_header-middle">
            <div className="container">
              <nav className="navbar">
                <Link className="navbar-brand" href="/">
                  {" "}
                  <img src={"../img/logo.png"} alt="logo" />{" "}
                </Link>

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
                        <FaRegHeart />
                      </Link>
                    </li>
                    <li className="andro_header-cart">
                      <Link href="/cart" title={t("Navbar.YourCart")}>
                        <FaShoppingBasket />

                        <div className="andro_header-cart-content">
                          <span>9 Items</span>
                          <span>249.99$</span>
                        </div>
                      </Link>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <Link href="">{t("Navbar." + this.state.language)}</Link>
                      <ul className="sub-menu sub-menu-left">
                        <li onClick={() => this.changeLang("en")}>{t("Navbar.en")}</li>
                        <li onClick={() => this.changeLang("ar")}>{t("Navbar.ar")}</li>
                      </ul>
                    </li>
                  </ul>

                  <div className="aside-toggler aside-trigger-left" onClick={this.toggleNav}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* <div className="andro_header-bottom">
            <div className="container">
              <div className="andro_header-bottom-inner">
              
                <Navigation language={language} />
               
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
          </div> */}

          <CategoriesNav />
        </header>
      </>
    );
  }
}

export default withTranslation(Navbar);
