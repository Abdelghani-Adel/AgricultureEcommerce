import { useState } from "react";
import HeaderNav from "../../Reusable/Navigation/HeaderNav";

const MobileViewNavToggler = (props) => {
  const [navIsShown, setNavIsShown] = useState(false);

  const clickHandler = () => setNavIsShown(!navIsShown);
  return (
    <>
      <div className="aside-toggler aside-trigger-left" onClick={clickHandler}>
        <span />
        <span />
        <span />
      </div>

      {navIsShown && (
        <div className="mobilemenu-overlay" onClick={clickHandler}>
          <HeaderNav />
        </div>
      )}
    </>
  );
};

export default MobileViewNavToggler;
