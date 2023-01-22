import HeaderNav from "./HeaderNav";
import SideCategoriesToggler from "./SideCategoriesToggler";

const HeaderBottom = (props) => {
  return (
    <div className="andro_header-bottom">
      <div className="andro_header-bottom-inner mt-0">
        <SideCategoriesToggler />
        <HeaderNav />
      </div>
    </div>
  );
};

export default HeaderBottom;
