import { getCartDetails } from "../redux/slices/cartSlice";
import store from "../redux/store";

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

export function storeCartItemInCookie(itemBeingStored) {
  const isCookieEnabled = navigator.cookieEnabled;

  if (isCookieEnabled) {
    // get the cookie
    const foundCookie = getCookie("cartCookie");

    // parse it if found
    if (foundCookie) {
      // parse the cookie object
      let cartItemsFoundInTheCookie = JSON.parse(foundCookie);
      let newCartItems = cartItemsFoundInTheCookie.items;

      // check if the object is already in the cart
      const itemIndex = newCartItems.findIndex((item) => item.Item_Id == itemBeingStored.Item_Id);
      if (itemIndex >= 0) {
        newCartItems[itemIndex].Qty++;
      } else {
        newCartItems = [...newCartItems, itemBeingStored];
      }

      // Stringify the cart
      const newCartItemsToStore = JSON.stringify({
        totalPrice: cartItemsFoundInTheCookie.totalPrice + itemBeingStored.UnitPrice,
        items: newCartItems,
      });

      // update the new cookie
      document.cookie = `cartCookie=${newCartItemsToStore}; SameSite=Strict`;
      // update the state
      store.dispatch(getCartDetails());

      return;
    }
  }

  // If the cart in the cookie is empty, we initiate the cookie
  const cartCookie = JSON.stringify({
    items: [itemBeingStored],
    totalPrice: itemBeingStored.UnitPrice,
  });
  document.cookie = `cartCookie=${cartCookie}; SameSite=Strict`;
  store.dispatch(getCartDetails(itemBeingStored));
}
