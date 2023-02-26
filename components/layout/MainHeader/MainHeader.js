import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";

const MainHeader = (props) => {
  return (
    <header>
      <HeaderMiddle changeLang={props.changeLang} lang={props.lang} />
      <HeaderBottom lang={props.lang} />
    </header>
  );
};

export default MainHeader;
