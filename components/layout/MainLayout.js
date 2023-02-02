import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthToken, getTokenDuration } from "../../helper/auth";
import { getCartDetails } from "../../redux/slices/cartSlice";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";

export default function MainLayout(props) {
  const dispatch = useDispatch();
  const token = getAuthToken();

  const changeLang = (lang) => {
    props.changeLang(lang);
  };

  useEffect(() => {
    dispatch(getCartDetails());

    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      localStorage.removeItem("Agri_Token");
      localStorage.removeItem("Agri_Expiration");
      return;
    }

    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      localStorage.removeItem("Agri_Token");
      localStorage.removeItem("Agri_Expiration");
    }, tokenDuration);
  }, [token]);
  return (
    <>
      <MainHeader changeLang={changeLang} lang={props.lang} />
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </>
  );
}
