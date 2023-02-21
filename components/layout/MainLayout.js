import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItemsFromCookiesToDB, sendLikesToDB } from "../../helper/cookiesHandlers";
import { getCartDetails, getCurrency } from "../../redux/slices/cartSlice";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { getNavbarLinks } from "../../redux/slices/navbarSlice";
import { fetchProducts } from "../../redux/slices/productSlice";
import { fetchBasicData, fetchBrwosingData, sendCookiesToDB } from "../../services/GroupAPICall";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import Loader from "./Reusable/Loader";

export default function MainLayout(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const loaderState = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(loaderActions.showLoader());

    fetchBasicData()
      .then(sendCookiesToDB())
      .then(fetchBrwosingData())
      .then(() => {
        dispatch(loaderActions.hideLoader());
      });

    // const fetchCurrency = dispatch(getCurrency());
    // const fetchNavbarLinks = dispatch(getNavbarLinks());
    // const initialPromises = [fetchCurrency, fetchNavbarLinks];

    // Promise.all(initialPromises).then(() => {
    //   const fetchCartDetailsFromCookies = addItemsFromCookiesToDB();
    //   const fetchLikesDetailsFromCookies = sendLikesToDB();
    //   const sendCookiesToDBPromises = [fetchCartDetailsFromCookies, fetchLikesDetailsFromCookies];

    //   fetchCartDetailsFromCookies.then((result) => {
    //     if (result == "done") {
    //       router.push("/cart");
    //     }
    //   });

    //   Promise.all(sendCookiesToDBPromises).then(() => {
    //     const fetchCurrency = dispatch(getCurrency());
    //     const fetchNavbarLinks = dispatch(getNavbarLinks());
    //     const fetchCartDetailsFromDB = dispatch(getCartDetails());
    //     const fetchProductsToRedux = dispatch(fetchProducts());

    //     const fetchingSiteData = [
    //       fetchCurrency,
    //       fetchNavbarLinks,
    //       fetchCartDetailsFromDB,
    //       fetchCartDetailsFromCookies,
    //       fetchLikesDetailsFromCookies,
    //       fetchProductsToRedux,
    //     ];

    //     Promise.all(fetchingSiteData).then(() => {
    //       dispatch(loaderActions.hideLoader());
    //     });
    //   });
    // });
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
