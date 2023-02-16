import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItemsFromCookiesToDB } from "../../helper/cookiesHandlers";
import { getCartDetails } from "../../redux/slices/cartSlice";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { getNavbarLinks } from "../../redux/slices/navbarSlice";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import Loader from "./Reusable/Loader";

export default function MainLayout(props) {
  const loaderState = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderActions.showLoader());

    const getNavbarLink = dispatch(getNavbarLinks());
    const getCartDetailsFromDB = dispatch(getCartDetails());
    const getCartDetailsFromCookies = addItemsFromCookiesToDB();

    Promise.all([getCartDetailsFromDB, getNavbarLink, getCartDetailsFromCookies]).then(() => {
      dispatch(loaderActions.hideLoader());
    });
  }, []);

  return (
    <>
      <MainHeader changeLang={props.changeLang} lang={props.lang} />
      <div style={{ width: "60px", height: "60px", position: "absolute" }}>
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={true}
          theme="light"
        />
      </div>
      {loaderState && <Loader />}
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </>
  );
}
