import React from "react";
import HeaderLogo from "../Reusable/HeaderLogo";
import HeaderControls from "./HeaderControls/HeaderControls";
import HeaderSearchForm from "./HeaderSearchForm/HeaderSearchForm";

const HeaderMiddle = (props) => {
  return (
    <div className="andro_header-middle">
      <div className="container">
        <nav className="navbar">
          <HeaderLogo />
          <HeaderSearchForm />
          <HeaderControls />
        </nav>
      </div>
    </div>
  );
};

export default HeaderMiddle;
