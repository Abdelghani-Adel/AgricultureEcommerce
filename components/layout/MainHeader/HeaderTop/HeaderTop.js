import React from "react";
import LanguageChange from "./LanguageChange";
import SocialmediaLinks from "./SocialmediaLinks";

const HeaderTop = (props) => {
  return (
    <div className="andro_header-top">
      <div className="container">
        <div className="andro_header-top-inner">
          <SocialmediaLinks />
          <LanguageChange changeLang={props.changeLang} lang={props.lang} />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
