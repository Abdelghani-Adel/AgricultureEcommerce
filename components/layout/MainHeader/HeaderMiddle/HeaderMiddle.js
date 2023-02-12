import React from "react";
import BrandLogo from "../../Reusable/BrandLogo";
import HeaderControls from "./HeaderControls/HeaderControls";
import HeaderSearchForm from "../Reusable/HeaderSearchForm/HeaderSearchForm";

const HeaderMiddle = (props) => {
  return (
    <div className="main_header-middle">
      {/* <div className="container"> */}
        <div className="row align-items-center justify-content-between header_middle--inner">
          <div className="col-lg-2 col-md-2">
            <BrandLogo />
          </div>
          <div className="col-lg-6 d-none d-md-block">
            <HeaderSearchForm />
          </div>
          <div className="col-lg-4">
            <HeaderControls changeLang={props.changeLang} lang={props.lang} />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default HeaderMiddle;
