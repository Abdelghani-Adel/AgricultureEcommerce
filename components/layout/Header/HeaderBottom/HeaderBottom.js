import Navigation from "../../Navigation";

const HeaderBottom = (props) => {
  return (
    <div className="andro_header-bottom">
      <div className="container">
        <div className="andro_header-bottom-inner">
          {/* Menu */}
          <Navigation />
          {/* Side navigation toggle */}
          <div
            className="aside-toggler aside-trigger-right desktop-toggler"
            // onClick={this.sidebarToggle}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
