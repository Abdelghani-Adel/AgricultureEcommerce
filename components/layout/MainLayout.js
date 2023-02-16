import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItemsFromCookiesToDB } from "../../helper/cookiesHandlers";
import { getCartDetails, getCurrency } from "../../redux/slices/cartSlice";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { getNavbarLinks } from "../../redux/slices/navbarSlice";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import Loader from "./Reusable/Loader";

export default function MainLayout(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const loaderState = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(loaderActions.showLoader());

    const fetchCurrency = dispatch(getCurrency());
    const fetchNavbarLinks = dispatch(getNavbarLinks());
    const fetchCartDetailsFromDB = dispatch(getCartDetails());
    const fetchCartDetailsFromCookies = addItemsFromCookiesToDB();

    const promisies = [
      fetchCurrency,
      fetchCartDetailsFromDB,
      fetchNavbarLinks,
      fetchCartDetailsFromCookies,
    ];

    Promise.all(promisies).then(() => {
      fetchCartDetailsFromCookies.then((result) => {
        if (result == "done") {
          router.push("/cart");
        }
      });
      dispatch(loaderActions.hideLoader());
    });
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
