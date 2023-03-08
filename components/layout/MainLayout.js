import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { fetchBasicData, fetchBrwosingData, sendCookiesToDB } from "../../services/GroupAPICall";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import Loader from "../Reusable_Components/Loader";
import { deleteCookie, getCookie } from "../../helper/Cookies/CookiesHandlers";
import { signOut } from "next-auth/react";
import { getTokenDuration } from "../../services/AuthenticationAPI";

export default function MainLayout(props) {
  const dispatch = useDispatch();
  const loaderState = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(loaderActions.showLoader());
    fetchBasicData()
      .then(() => sendCookiesToDB())
      .then(() => fetchBrwosingData())
      .then(() => dispatch(loaderActions.hideLoader()));
  }, []);

  useEffect(() => {
    const tokenRemainingDays = getTokenDuration();
    const nextAuthSession = getCookie("next-auth.session");
    const remainingMillSec = tokenRemainingDays * 86400000;

    if (isNaN(tokenRemainingDays) && nextAuthSession.length > 0) {
      signOut({ redirect: false });
      return;
    }

    if (tokenRemainingDays < 2) {
      setTimeout(() => {
        deleteCookie("next-auth-token-expiry");
        signOut();
      }, remainingMillSec);
    }
  }, []);

  return (
    <Fragment>
      <MainHeader changeLang={props.changeLang} lang={props.lang} />
      <ToastContainer position="top-center" autoClose={500} hideProgressBar={true} theme="light" />
      {loaderState && <Loader />}
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </Fragment>
  );
}
