import { langActions } from "../../redux/slices/lang";
import store from "../../redux/store";
import { deleteCookie, getCookie, setCookieExpiration } from "./CookiesHandlers";

export function storeLangInCookie(lang) {
  const isCookieEnabled = navigator.cookieEnabled;
  const expires = setCookieExpiration();
  if (isCookieEnabled) {
    deleteCookie("langCookie");
    document.cookie = `langCookie=${lang}; expires=${expires}; SameSite=None; secure=true`;
  }
}

export function getLangFromCookie() {
  const isCookieEnabled = navigator.cookieEnabled;
  const langCookieFound = getCookie("langCookie");

  if (isCookieEnabled && langCookieFound) {
    store.dispatch(langActions.changeLang(getCookie("langCookie")));
  } else {
    store.dispatch(langActions.changeLang("ar"));
  }
}
