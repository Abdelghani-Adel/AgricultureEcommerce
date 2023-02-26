import React from "react";
import BrandLogo from "../../../Reusable_Components/BrandLogo";
import HeaderControls from "./HeaderControls/HeaderControls";
import HeaderSearchForm from "../../../Reusable_Components/SearchBars/HeaderSearchForm/HeaderSearchForm";
import { withTranslation } from "react-multi-lang";
const HeaderMiddle = (props) => {
  return (
    <div className="main_header-middle">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between header_middle--inner">
          <div className="col-5 col-sm-2">
            <BrandLogo />
          </div>
          <div className="d-none d-lg-block col-lg-4 col-xxl-6">
            <HeaderSearchForm />
          </div>
          <div className="col-6 col-sm-10 col-lg-6 col-xxl-4">
            <HeaderControls changeLang={props.changeLang} lang={props.lang} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(HeaderMiddle);
