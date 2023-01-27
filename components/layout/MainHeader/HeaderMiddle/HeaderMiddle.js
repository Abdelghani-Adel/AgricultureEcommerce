import React from "react";
import HeaderLogo from "../Reusable/HeaderLogo";
import HeaderControls from "./HeaderControls/HeaderControls";
import HeaderSearchForm from "./HeaderSearchForm/HeaderSearchForm";

const HeaderMiddle = (props) => {
  return (
    <div className="main_header-middle">
      <div className="container">
        <nav className="navbar">
          <HeaderLogo />
          <HeaderSearchForm />
          <HeaderControls changeLang={props.changeLang} lang={props.lang} />
        </nav>
      </div>
    </div>
  );
};

export default HeaderMiddle;
