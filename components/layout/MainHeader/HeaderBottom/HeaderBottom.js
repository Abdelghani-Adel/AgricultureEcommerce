import HeaderNav from "../../../Reusable_Components/Navigation/HeaderNav";
import HeaderOffers from "./HeaderOffers";
import ShowAllCategories from "./ShowAllCategories";
import SubNav from "./SubNav";

const HeaderBottom = (props) => {
  return (
    <div className="main_header-bottom-wrapper">
      <div className="main_header-bottom">
        <div className="main_header-bottom-inner mt-0">
          <div className="d-flex" style={{ height: "40px" }}>
            <ShowAllCategories />
            <HeaderNav lang={props.lang} />
          </div>
          <div className="header_left_offers">
            <HeaderOffers />
          </div>
        </div>
      </div>

      <SubNav />
    </div>
  );
};

export default HeaderBottom;
