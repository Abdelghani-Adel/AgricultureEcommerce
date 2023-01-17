import React from "react";

export default function Header() {
  const stickyheader = this.state.isTop ? "sticky" : "";
  return (
    <Fragment>
      {/* Aside (Right Panel) */}
      <aside
        className={classNames("andro_aside andro_aside-right", {
          open: this.state.sidebarmethod,
        })}
      >
        <Canvas />
      </aside>
      <div
        className="andro_aside-overlay aside-trigger-right"
        onClick={this.sidebarToggle}
      />
      {/* Aside (Mobile Navigation) */}
      <aside
        className={classNames("andro_aside andro_aside-left", {
          open: this.state.navmethod,
        })}
      >
        <Mobilemenu />
      </aside>
      <div
        className="andro_aside-overlay aside-trigger-left"
        onClick={this.toggleNav}
      />
      {/* Header Start */}
      <header className={`andro_header header-3 can-sticky ${stickyheader}`}>
        {/* Topheader Start */}
        <div className="andro_header-top">
          <div className="container">
            <div className="andro_header-top-inner">
              <ul className="andro_header-top-sm andro_sm">
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-facebook-f" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-twitter" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-linkedin-in" />{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="#">
                    {" "}
                    <i className="fab fa-youtube" />{" "}
                  </Link>{" "}
                </li>
              </ul>
              <ul className="andro_header-top-links">
                <li className="menu-item">
                  <Link to="/login"> My Account </Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to="#">
                    {" "}
                    <span className="andro_current-currency-text">
                      Currency
                    </span>{" "}
                    (USD){" "}
                  </Link>
                  <ul className="sub-menu sub-menu-left">
                    <li>
                      {" "}
                      <Link to="#">United States Dollar (USD)</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="#">Kuwait Dinar (KWD)</Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link to="#">Pound Sterling (GBP)</Link>{" "}
                    </li>
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
              <Link className="navbar-brand" to="/">
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                  alt="logo"
                />{" "}
              </Link>
              {/* Search Form */}
              <div className="andro_search-adv">
                <form>
                  <div className="andro_search-adv-cats">
                    <span>All Categories</span>
                    <div className="sub-menu">
                      <div className="andro_dropdown-scroll">
                        <label>
                          <input
                            type="checkbox"
                            name="category1"
                            defaultValue="food"
                          />
                          Food
                          <i className="fas fa-check" />
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="category2"
                            defaultValue="home-care"
                          />
                          Home Care
                          <i className="fas fa-check" />
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="category3"
                            defaultValue="keto"
                          />
                          Keto
                          <i className="fas fa-check" />
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="category4"
                            defaultValue="baskets"
                          />
                          Baskets
                          <i className="fas fa-check" />
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="category5"
                            defaultValue="supplements"
                          />
                          Supplements
                          <i className="fas fa-check" />
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="category6"
                            defaultValue="baby-kids"
                          />
                          Baby &amp; Kids care
                          <i className="fas fa-check" />
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="category7"
                            defaultValue="serum"
                          />
                          Serum
                          <i className="fas fa-check" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="andro_search-adv-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Look for Fruits, Vegetables"
                      name="search"
                    />
                    <button type="submit" name="button">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="andro_header-controls">
                <ul className="andro_header-controls-inner">
                  <li className="andro_header-favorites">
                    {" "}
                    <Link to="/wishlist" title="Your Wishlist">
                      {" "}
                      <i className="flaticon-like" />{" "}
                    </Link>{" "}
                  </li>
                  <li className="andro_header-cart">
                    <Link to="/cart" title="Your Cart">
                      <i className="flaticon-shopping-basket" />
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
                  onClick={this.toggleNav}
                >
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
              <div
                className={classNames("andro_category-mm", {
                  open: this.state.categorymethod,
                })}
                onClick={this.categoryToggle}
              >
                <div className="andro_category-mm-header">
                  <h6>
                    {" "}
                    <i className="fas fa-th-large" /> Categories
                  </h6>
                </div>
                <div className="andro_category-mm-body">
                  <Category />
                </div>
              </div>
              {/* Menu */}
              <Navigation />
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
    </Fragment>
  );
}
