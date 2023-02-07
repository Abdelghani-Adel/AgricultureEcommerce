import { signOut, useSession } from "next-auth/react";
import Link from "next/Link";
import { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaCommentAlt, FaRegHeart, FaShoppingBasket, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import LanguageChange from "../LanguageChange";
import MobileViewNavToggler from "./MobileViewNavToggler";

const HeaderControls = (props) => {
  const cartState = useSelector((state) => state.cart);
  const authState = useSelector((state) => state.auth);
  const session = useSession();
  // console.log(session.status);

  // console.log(session);

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

  const logoutHandler = () => {
    signOut({ callbackUrl: "localhost:8080" });
  };

  return (
    <div className="main_header-controls">
      <ul className="main_header-controls-inner">
        <li className="main_header-favorites">
          <Link href="/chat" title="Chat">
            <FaCommentAlt />
          </Link>
        </li>
        <li className="main_header-favorites">
          {session.status == "authenticated" ? (
            <Link href="" title="logout" onClick={logoutHandler}>
              <FiLogOut />
            </Link>
          ) : (
            <Link href="/login" title="Login">
              <FaUserAlt />
            </Link>
          )}
        </li>
        <li className="main_header-favorites">
          <Link href="/wishlist" title="Wish List">
            <FaRegHeart />
          </Link>
        </li>
        <li className="main_header-cart">
          <Link href="/cart" title="Cart">
            <FaShoppingBasket />
            <div className="main_header-cart-content fs-800">
              <span>{cartState.items.length} Items</span>
              <span>
                {cartState.total} {cartState.currency}
              </span>
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
