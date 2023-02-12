import React from "react";
import BrandLogo from "../../Reusable/BrandLogo";
import HeaderControls from "./HeaderControls/HeaderControls";
import HeaderSearchForm from "../Reusable/HeaderSearchForm/HeaderSearchForm";
import  {withTranslation} from "react-multi-lang";
const HeaderMiddle = (props) => {
  return (
    <div className="main_header-middle">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between header_middle--inner">
          <div className="col-4 col-md-2">
            <BrandLogo />
          </div>
          <div className="col-6 d-none d-lg-block">
            <HeaderSearchForm />
          </div>
          <div className="col-8 col-lg-4">
            <HeaderControls changeLang={props.changeLang} lang={props.lang} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(HeaderMiddle);
