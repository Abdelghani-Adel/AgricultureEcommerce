import React, { Fragment, useState } from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderTop from "./HeaderTop/HeaderTop";
import ToggleNav from "./ToggleNav";

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  return (
    <Fragment>
      <ToggleNav />

      <header className={`andro_header header-3 can-sticky`}>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
      </header>
    </Fragment>
  );
};

export default Header;
