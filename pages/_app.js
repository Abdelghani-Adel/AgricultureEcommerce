import Head from "next/head";
import { Fragment, useState } from "react";
import { setDefaultLanguage, setTranslations } from "react-multi-lang";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainLayout from "../components/layout/MainLayout";
import "../styles/globals.css";
import "../styles/style.css";
// import "../styles/registration.css";
// import "../styles/headerNav.css";
// import "../styles/homeBanner.css";
import "../styles/sass/main.css";
import ar from "../translations/ar.json";
import en from "../translations/en.json";

setTranslations({ ar, en });
setDefaultLanguage("en");

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState("en");
  const changeLang = (lang) => {
    console.log("lang ", lang);
    setLang(lang);
    setDefaultLanguage(lang);
  };
  return (
    <Fragment>
      <MainLayout changeLang={changeLang} lang={lang}>
        <Component {...pageProps} />
      </MainLayout>
    </Fragment>
  );
}
