import Link from "next/Link";
import MobileViewNavToggler from "./MobileViewNavToggler";
import LanguageChange from "../LanguageChange";
import { FaShoppingBasket, FaRegHeart, FaUserAlt, FaCommentAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const HeaderControls = (props) => {
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

  return (
    <div className="main_header-controls">
      <ul className="main_header-controls-inner">
        <li className="main_header-favorites">
          <Link href="/chat" title="Chat">
            <FaCommentAlt />
          </Link>
        </li>
        <li className="main_header-favorites">
          <Link href="/login" title="Login">
            <FaUserAlt />
          </Link>
        </li>
        <li className="main_header-favorites">
          <Link href="/wishlist" title="Wish List">
            <FaRegHeart />
          </Link>
        </li>
        <li className="main_header-cart">
          <Link href="/cart" title="Cart">
            <FaShoppingBasket />
            <div className="main_header-cart-content">
              <span>9 Items</span>
              <span>249.99$</span>
            </div>
          </Link>
        </li>
        <LanguageChange changeLang={props.changeLang} lang={props.lang} />
      </ul>
      {isMobileView && <MobileViewNavToggler />}
    </div>
  );
};

export default HeaderControls;
