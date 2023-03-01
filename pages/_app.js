import { Fragment, useCallback, useState } from "react";
import { setDefaultLanguage, setTranslations } from "react-multi-lang";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainLayout from "../components/layout/MainLayout";
import store from "../redux/store";
import "../styles/globals.css";
import "../styles/sass/main.scss";
import ar from "../translations/ar.json";
import en from "../translations/en.json";
import { SessionProvider } from "next-auth/react";

setTranslations({ ar, en });
setDefaultLanguage("ar");

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState("ar");
  const changeLang = useCallback((lang) => {
    setLang(lang);
    setDefaultLanguage(lang);
  });

  return (
    <Fragment>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <MainLayout changeLang={changeLang}>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </SessionProvider>
    </Fragment>
  );
}
