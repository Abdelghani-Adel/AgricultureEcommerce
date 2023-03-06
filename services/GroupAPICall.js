import { addItemsFromCookiesToDB } from "../helper/Cookies/CarCookies";
import { checkCookiesAvailability } from "../helper/Cookies/CookiesHandlers";
import { getLangFromCookie } from "../helper/Cookies/LangCookie";
import { sendLikesToDB } from "../helper/Cookies/LikesCookies";
import { getCartDetails, getCurrency } from "../redux/slices/cartSlice";
import { getNavbarLinks } from "../redux/slices/navbarSlice";
import { fetchTemplate } from "../redux/slices/PagesTemplateSlice";
import { fetchProducts } from "../redux/slices/productSlice";
import store from "../redux/store";

export async function fetchBasicData() {
  // await store.dispatch(fetchTemplate());
  getLangFromCookie();
  await checkCookiesAvailability();
  await store.dispatch(getCurrency());
  await store.dispatch(getNavbarLinks());
}

export async function sendCookiesToDB() {
  await sendLikesToDB();
  await addItemsFromCookiesToDB();
}

export async function fetchBrwosingData() {
  await store.dispatch(getCartDetails());
  await store.dispatch(fetchProducts());
}
