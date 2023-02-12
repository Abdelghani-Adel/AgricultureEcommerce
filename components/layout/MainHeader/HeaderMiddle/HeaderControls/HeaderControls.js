import { signOut, useSession } from "next-auth/react";
import Link from "next/Link";
import { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaCommentAlt, FaRegHeart, FaShoppingBasket, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import LanguageChange from "../LanguageChange";
import MobileViewNavToggler from "./MobileViewNavToggler";
import { loaderActions } from "../../../../../redux/slices/loaderSlice";

const HeaderControls = (props) => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
    dispatch(loaderActions.showLoader());
    signOut();
    dispatch(loaderActions.hideLoader());
  };

  return (
    <div className="main_header-controls">
      <ul className="d-flex justify-content-end ">
        <li className="header_control d-none d-md-flex">
          <Link href="/chat" title="Chat">
            <FaCommentAlt />
          </Link>
        </li>

        <ul className="header_control me-2">
          <li className="menu-item menu-item-has-children ps-1 pe-1">
            {session.status == "authenticated" ? (
              <>
                <Link href="">{session.data.user.username}</Link>
                <ul className="sub-menu sub-menu-left">
                  <span className="ms-2 text-muted">{session.data && session.data.user.email}</span>
                  <li onClick={logoutHandler} className="justify-content-start align-items-center">
                    <FiLogOut />
                    <span className="ms-2">Logout</span>
                  </li>
                </ul>
              </>
            ) : (
              <Link href="/login" title="Login">
                <FaUserAlt />
              </Link>
            )}
          </li>
        </ul>

        <li className="header_control d-none d-md-flex">
          <Link href="/wishlist" title="Wish List">
            <FaRegHeart />
          </Link>
        </li>
        <li className="header_control main_header-cart d-none d-md-flex">
          <Link href="/cart" title="Cart">
            <FaShoppingBasket />
            <div className="main_header-cart-content fs-800">
              <span>{cartState.items.length} Items</span>
              <span>{cartState.totalPrice} $</span>
            </div>
          </Link>
        </li>
        <LanguageChange changeLang={props.changeLang} lang={props.lang} />
        {isMobileView && <MobileViewNavToggler />}
      </ul>
    </div>
  );
};

export default HeaderControls;
