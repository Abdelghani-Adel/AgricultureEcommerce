import React from "react";

const HeaderMiddle = (props) => {
  return (
    <div className="andro_header-middle">
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <Link className="navbar-brand" href="#">
            {" "}
            <img src={"../img/logo.png"} alt="logo" />{" "}
          </Link>
          {/* Search Form */}
          <div className="andro_search-adv">
            <form method="post">
              <div className="andro_search-adv-cats">
                <span>{t("Navbar.AllCategories")}</span>
                <div className="sub-menu">
                  {/* <div className="andro_dropdown-scroll">
                                                            <label>
                                                                <input type="checkbox" name="category1" defaultValue="food" />
            Food
            <i className="fas fa-check" />
                                                            </label>
                                                            <label>
                                                                <input type="checkbox" name="category2" defaultValue="home-care" />
            Home Care
            <i className="fas fa-check" />
                                                            </label>
                                                            <label>
                                                                <input type="checkbox" name="category3" defaultValue="keto" />
            Keto
            <i className="fas fa-check" />
                                                            </label>
                                                            <label>
                                                                <input type="checkbox" name="category4" defaultValue="baskets" />
            Baskets
            <i className="fas fa-check" />
                                                            </label>
                                                            <label>
                                                                <input type="checkbox" name="category5" defaultValue="supplements" />
            Supplements
            <i className="fas fa-check" />
                                                            </label>
                                                            <label>
                                                                <input type="checkbox" name="category6" defaultValue="baby-kids" />
            Baby &amp; Kids care
            <i className="fas fa-check" />
                                                            </label>
                                                            <label>
                                                                <input type="checkbox" name="category7" defaultValue="serum" />
            Serum
            <i className="fas fa-check" />
                                                            </label>
                                                        </div> */}
                </div>
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
                {" "}
                <Link href="/wishlist" title={t("Navbar.WishList")}>
                  {/* <i className="flaticon-like" />  */}
                  <FaCommentAlt />
                </Link>
              </li>
              <li className="andro_header-favorites">
                {" "}
                <Link href="/wishlist" title={t("Navbar.WishList")}>
                  {/* <i className="flaticon-like" />  */}
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
            <div
              className="aside-toggler aside-trigger-left"
              //   onClick={this.toggleNav}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMiddle;
