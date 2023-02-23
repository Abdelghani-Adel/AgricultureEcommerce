import Link from "next/Link";
import { useEffect, useState } from "react";
import { FaCommentAlt, FaRegHeart } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import LangController from "./LangController";
import ProfileAuthController from "./ProfileAuthController/ProfileAuthController";
import CartController from "./CartController";
import MobileViewNavToggler from "./MobileViewNavToggler";

const HeaderControls = (props) => {
  // Start watching the size to unmount the mobile navigation from the dom completely in desktop view
  const [isMobileView, setIsMobileView] = useState(false);
  const updateWindowSize = () => {
    setIsMobileView(window.innerWidth < 991);
  };
  useEffect(() => {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);
  // End watching the size to unmount the mobile navigation from the dom completely in desktop view

  return (
    <ul className="d-flex justify-content-end ">
      <li className="header_control d-none d-md-flex">
        <Link href="/chat" title="Chat">
          <FaCommentAlt />
        </Link>
      </li>

      <ul className="header_control me-2 bg-white d-none d-md-flex">
        <ProfileAuthController mobileView={false} />
      </ul>

      <li className="header_control d-none d-md-flex">
        <Link href="/wishlist" title="Wish List">
          <FaRegHeart />
        </Link>
      </li>
      <li className="header_control cart_controller ">
        <CartController />
      </li>
      <LangController changeLang={props.changeLang} lang={props.lang} />

      {isMobileView && <MobileViewNavToggler />}
    </ul>
  );
};

export default withTranslation(HeaderControls);
