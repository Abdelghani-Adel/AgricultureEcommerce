import React, { Fragment } from "react";
import HeaderTop from "./HeaderTop";
import ToggleNav from "./ToggleNav";

const Header = () => {
  return (
    <Fragment>
      <ToggleNav />
      <HeaderTop />
    </Fragment>
  );
};

export default Header;
