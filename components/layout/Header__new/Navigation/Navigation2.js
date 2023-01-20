import navigationmenu from "../../../../data/Navigation.json";

const Naviation = (props) => {
  return (
    <ul className="navbar-nav">
      {navigationmenu.length > 0
        ? navigationmenu.map((item, i) => (
            <li
              key={i}
              className={`menu-item ${
                item.child ? "menu-item-has-children" : ""
              } `}
              onClick={this.triggerChild}
            >
              {item.child ? (
                <Link onClick={(e) => e.preventDefault()} to="/">
                  {" "}
                  {item.linkText}{" "}
                </Link>
              ) : (
                <Link to={item.link}> {item.linkText} </Link>
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
                        <Link onClick={(e) => e.preventDefault()} to="/">
                          {" "}
                          {sub_item.linkText}{" "}
                        </Link>
                      ) : (
                        <Link to={sub_item.link}> {sub_item.linkText} </Link>
                      )}
                      {sub_item.submenu ? (
                        <ul className="sub-menu">
                          {sub_item.submenu.map((third_item, i) => (
                            <li className="menu-item" key={i}>
                              <Link to={third_item.link}>
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
      <li className="menu-item menu-item-has-children mega-menu-wrapper">
        <Link to="#">Shop</Link>
        <ul className="sub-menu">
          <li>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="mega-menu-item">
                    <h6>Membership Delivery</h6>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                    <Link
                      to="/login"
                      className="andro_btn-custom shadow-none btn-sm"
                    >
                      Become a Member
                    </Link>
                  </div>
                </div>
                <div className="offset-lg-1 col-lg-3">
                  <div className="mega-menu-item">
                    <h6>Shop Pages</h6>
                    <Link to="/shop-v1">Shop v1 (Default)</Link>
                    <Link to="/shop-v2">Shop v2 (Full Width)</Link>
                    <Link to="/shop-v3">Shop v3 (No Sidebar)</Link>
                    <Link to="/shop-v4">Shop v4 (List view)</Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mega-menu-item">
                    <h6>Product Details Pages</h6>
                    <Link to="/product-single/1">Product Details v1</Link>
                    <Link to="/product-single-v2/1">Product Details v2</Link>
                    <Link to="#" className="coming-soon">
                      Product Details v3 <span>Coming Soon</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
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
                <Link onClick={(e) => e.preventDefault()} to="/">
                  {" "}
                  {item.linkText}{" "}
                </Link>
              ) : (
                <Link to={item.link}> {item.linkText} </Link>
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
                        <Link onClick={(e) => e.preventDefault()} to="/">
                          {" "}
                          {sub_item.linkText}{" "}
                        </Link>
                      ) : (
                        <Link to={sub_item.link}> {sub_item.linkText} </Link>
                      )}
                      {sub_item.submenu ? (
                        <ul className="sub-menu">
                          {sub_item.submenu.map((third_item, i) => (
                            <li className="menu-item" key={i}>
                              <Link to={third_item.link}>
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
};

export default Naviation;
