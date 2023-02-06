import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthToken, getTokenDuration } from "../../helper/auth";
import { authStateActions } from "../../redux/slices/authSlice";
import { getCartDetails } from "../../redux/slices/cartSlice";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";

export default function MainLayout(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = getAuthToken();

  const changeLang = (lang) => {
    props.changeLang(lang);
  };

  useEffect(() => {
    dispatch(getCartDetails());

    if (!token) {
      dispatch(authStateActions.changeAuthState(false));
      router.push("/login");
      return;
    }

    if (token === "EXPIRED") {
      dispatch(authStateActions.changeAuthState(false));
      localStorage.removeItem("Agri_Token");
      localStorage.removeItem("Agri_Expiration");
      router.push("/login");
      return;
    }

    const tokenDuration = getTokenDuration();
    setTimeout(() => {
      localStorage.removeItem("Agri_Token");
      localStorage.removeItem("Agri_Expiration");
    }, tokenDuration);

    dispatch(authStateActions.changeAuthState(true));
  }, [token]);

  return (
    <>
      <MainHeader changeLang={changeLang} lang={props.lang} />
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </>
  );
}
