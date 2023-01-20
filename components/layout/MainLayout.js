import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/navbar";

export default function MainLayout(props) {
  const changeLang = (lang) => {
    props.changeLang(lang);
  };
  return (
    <>
      <Navbar changeLang={changeLang} lang={props.lang} />
      {/* <Header /> */}
      {props.children}
      <Footer footer={{ style: "", logo: "img/logo.png" }} />
    </>
  );
}
