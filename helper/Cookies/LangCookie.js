import { langActions } from "../../redux/slices/lang";
import store from "../../redux/store";
import { deleteCookie, getCookie, setCookieExpiration } from "./CookiesHandlers";

export function storeLangInCookie(lang) {
  const isCookieEnabled = navigator.cookieEnabled;
  const expires = setCookieExpiration();
  if (isCookieEnabled) {
    // deleteCookie("langCookie");

    document.cookie = `langCookie=${lang}; expires=${expires}; SameSite=None; secure=true; path=/`;
    window.location.reload();
  }
}

export function getLangFromCookie() {
  const isCookieEnabled = navigator.cookieEnabled;
  const langCookieFound = getCookie("langCookie");

  // deleteCookie("next-auth.session-token");
  // document.cookie = `"next-auth.session-token"=""; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
  // console.log("deleted");

  if (isCookieEnabled && langCookieFound) {
    store.dispatch(langActions.changeLang(getCookie("langCookie")));
  } else {
    store.dispatch(langActions.changeLang("ar"));
  }
}
