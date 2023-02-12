import React, { Fragment, useState } from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import ToggleNav from "./Reusable/ToggleNav";

const MainHeader = (props) => {
  return (
    <Fragment>
      <header className={`main_header`}>
        <HeaderMiddle changeLang={props.changeLang} lang={props.lang} />
        <HeaderBottom lang={props.lang} />
      </header>
    </Fragment>
  );
};

export default MainHeader;
