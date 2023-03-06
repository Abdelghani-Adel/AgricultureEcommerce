import { useState } from "react";
import { Provider } from "react-redux";
import MainLayout from "../components/layout/MainLayout";
import store from "../redux/store";
import "../styles/globals.css";
// import "../styles/sass/main.scss";
import { SessionProvider } from "next-auth/react";
import CookiesNotification from "../components/Reusable_Components/CookiesNotification";
import "../styles/sass/main.min.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState();

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <MainLayout changeLang={setLang}>
          <CookiesNotification />
          <Script src="/static/jquery-3.5.1.min.js" />
          <Script src="/static/popper.min.js" />
          <Script src="/static/bootstrap.min.js" />
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </SessionProvider>
  );
}
