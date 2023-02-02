import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartDetails } from "../../redux/slices/cartSlice";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";

export default function MainLayout(props) {
  const dispatch = useDispatch();

  const changeLang = (lang) => {
    props.changeLang(lang);
  };

  useEffect(() => {
    dispatch(getCartDetails());
  }, []);
  return (
    <>
      <MainHeader changeLang={changeLang} lang={props.lang} />
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </>
  );
}
