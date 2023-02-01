import { Fragment, useCallback, useState } from "react";
import { setDefaultLanguage, setTranslations } from "react-multi-lang";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainLayout from "../components/layout/MainLayout";
import store from "../redux/store";
import "../styles/globals.css";
import "../styles/homeBanner.css";
import "../styles/sass/main.css";
import "../styles/style.css";
import ar from "../translations/ar.json";
import en from "../translations/en.json";

setTranslations({ ar, en });
setDefaultLanguage("en");

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState("en");
  const changeLang = useCallback((lang) => {
    setLang(lang);
    setDefaultLanguage(lang);
  });

  return (
    <Fragment>
      <Provider store={store}>
        <MainLayout changeLang={changeLang} lang={lang}>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </Fragment>
  );
}
