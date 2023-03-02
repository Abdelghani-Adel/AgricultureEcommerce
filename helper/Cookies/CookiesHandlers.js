import { cookiesActions } from "../../redux/slices/cookiesAvailSlice";
import store from "../../redux/store";

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setCookieExpiration() {
  const today = new Date();
  let expiry = today.setMonth(today.getMonth() + 1);
  return "Thu, 31 Dec 2024 12:00:00 UTC";
}

export function deleteCookie(cname) {
  document.cookie = `${cname}=${cname}; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
}

export async function checkCookiesAvailability() {
  const availability = navigator.cookieEnabled;
  store.dispatch(cookiesActions.changeAvailability(availability));
  return;
}
