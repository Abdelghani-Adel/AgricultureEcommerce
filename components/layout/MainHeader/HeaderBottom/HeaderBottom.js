import HeaderNav from "./HeaderNav";
import SideCategoriesToggler from "./SideCategoriesToggler";

const HeaderBottom = (props) => {
  return (
    <div className="andro_header-bottom">
      <div className="container">
        <div className="andro_header-bottom-inner">
          <HeaderNav />
          <SideCategoriesToggler />
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
