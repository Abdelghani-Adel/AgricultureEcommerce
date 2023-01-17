import React from "react";

const HeaderTop = () => {
  return (
    <div className="andro_header-top">
      <div className="container">
        <div className="andro_header-top-inner">
          <ul className="andro_header-top-sm andro_sm">
            <li>
              <Link to="#">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-youtube" />
              </Link>
            </li>
          </ul>
          <ul className="andro_header-top-links">
            <li className="menu-item">
              <Link to="/login"> My Account </Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link to="#">
                <span className="andro_current-currency-text">Currency</span>
                (USD)
              </Link>
              <ul className="sub-menu sub-menu-left">
                <li>
                  <Link to="#">United States Dollar (USD)</Link>
                </li>
                <li>
                  <Link to="#">Kuwait Dinar (KWD)</Link>
                </li>
                <li>
                  <Link to="#">Pound Sterling (GBP)</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
