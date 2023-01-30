import React from "react";
import BrandLogo from "../../Reusable/BrandLogo";
import HeaderControls from "./HeaderControls/HeaderControls";
import HeaderSearchForm from "../Reusable/HeaderSearchForm/HeaderSearchForm";

const HeaderMiddle = (props) => {
  return (
    <div className="main_header-middle">
      <div className="container">
        <nav className="navbar">
          <BrandLogo />
          <HeaderSearchForm />
          <HeaderControls changeLang={props.changeLang} lang={props.lang} />
        </nav>
      </div>
    </div>
  );
};

export default HeaderMiddle;
