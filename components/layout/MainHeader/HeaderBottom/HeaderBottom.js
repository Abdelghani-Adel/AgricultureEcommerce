import HeaderNav from "./HeaderNav";
import SideCategoriesToggler from "./SideCategoriesToggler";
import HeaderOffers from "./HeaderOffers";
const HeaderBottom = (props) => {
  return (
    <div className="andro_header-bottom">
      <div className="andro_header-bottom-inner mt-0">
        <SideCategoriesToggler />
        <HeaderNav />
        <div className="header_left_offers">
          <HeaderOffers />

        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
