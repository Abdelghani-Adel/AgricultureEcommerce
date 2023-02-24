import HeaderNav from "../Reusable/Navigation/HeaderNav";
import SideCategoriesToggler from "./SideCategoriesToggler";
import HeaderOffers from "./HeaderOffers";
import { useSelector } from "react-redux";
import SubNav from "./SubNav";

const HeaderBottom = (props) => {
  return (
    <div className="main_header-bottom-wrapper">
      <div className="main_header-bottom">
        <div className="main_header-bottom-inner mt-0">
          <div className="d-flex" style={{ height: "40px" }}>
            <SideCategoriesToggler />
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
