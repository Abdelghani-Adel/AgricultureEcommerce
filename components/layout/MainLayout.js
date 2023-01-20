import React from "react";
import Footer from "./Footer/Footer";
import MainHeader from "./MainHeader/MainHeader";
import Navbar from "./Navbar/navbar";

export default function MainLayout(props) {
  const changeLang = (lang) => {
    props.changeLang(lang);
  };
  return (
    <>
      <MainHeader changeLang={changeLang} lang={props.lang} />
      <hr />
      <Navbar changeLang={changeLang} lang={props.lang} />
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </>
  );
}
