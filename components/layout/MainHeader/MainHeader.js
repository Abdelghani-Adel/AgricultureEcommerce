import React, { Fragment, useState } from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderTop from "./HeaderTop/HeaderTop";
import ToggleNav from "./Reusable/ToggleNav";

const MainHeader = (props) => {
  const [isTop, setIsTop] = useState(true);
  return (
    <Fragment>
      <ToggleNav />

      <header className={`andro_header header-3 can-sticky`}>
        <HeaderMiddle changeLang={props.changeLang} lang={props.lang} />
        <HeaderBottom />
      </header>
    </Fragment>
  );
};

export default MainHeader;
