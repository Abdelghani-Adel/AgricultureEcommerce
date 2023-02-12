import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartDetails } from "../../redux/slices/cartSlice";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { getNavbarLinks } from "../../redux/slices/navbarSlice";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import Loader from "./Reusable/Loader";

export default function MainLayout(props) {
  const dispatch = useDispatch();
  const loaderState = useSelector((state) => state.loader);

  const changeLang = (lang) => {
    props.changeLang(lang);
  };

  useEffect(() => {
    dispatch(loaderActions.showLoader());
    const cartDetails = dispatch(getCartDetails());
    const navbarLinks = dispatch(getNavbarLinks());

    Promise.all([cartDetails, navbarLinks]).then(() => {
      dispatch(loaderActions.hideLoader());
    });
  }, []);

  return (
    <>
      <MainHeader changeLang={changeLang} lang={props.lang} />
      {loaderState && <Loader />}
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </>
  );
}
