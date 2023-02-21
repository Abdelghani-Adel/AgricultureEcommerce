import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { fetchBasicData, fetchBrwosingData, sendCookiesToDB } from "../../services/GroupAPICall";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import Loader from "./Reusable/Loader";

export default function MainLayout(props) {
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
