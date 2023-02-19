import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import { editCart, getCartDetails } from "../redux/slices/cartSlice";
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

export function setExpiration() {
  const today = new Date();
  let expiry = today.setMonth(today.getMonth() + 1);
  return "Thu, 31 Dec 2024 12:00:00 UTC";
}

export function deleteCookie(cname) {
  document.cookie = `${cname}=${cname}; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
}

export function storeCartItemInCookie(itemBeingStored) {
  const isCookieEnabled = navigator.cookieEnabled;
  const expires = setExpiration();

  if (isCookieEnabled) {
    const cookieIsFound = getCookie("cartCookie");

    if (cookieIsFound) {
      let parsedCookie = JSON.parse(cookieIsFound);
      let cartItems = parsedCookie.items;

      const itemIndex = cartItems.findIndex((item) => item.Item_Id == itemBeingStored.Item_Id);
      if (itemIndex >= 0) {
        cartItems[itemIndex].Qty++;
      } else {
        cartItems = [...cartItems, itemBeingStored];
      }

      const updatedCookie = JSON.stringify({
        totalPrice: parsedCookie.totalPrice + itemBeingStored.UnitPrice,
        items: cartItems,
      });

      document.cookie = `cartCookie=${updatedCookie}; expires=${expires}; SameSite=None; secure=true`;
      store.dispatch(getCartDetails());
      return;
    }
  }

  // If the cart in the cookie is empty, we initiate the cookie
  const cartCookie = JSON.stringify({
    items: [itemBeingStored],
    totalPrice: itemBeingStored.UnitPrice,
  });
  document.cookie = `cartCookie=${cartCookie}; expires=${expires}; SameSite=None; secure=true`;
  store.dispatch(getCartDetails(itemBeingStored));
}

export function deleteCartItemInCookie(itemBeingDeleted) {
  const foundCookie = getCookie("cartCookie");
  let parsedCookie = JSON.parse(foundCookie);
  const removedItem_Cost = itemBeingDeleted.Qty * itemBeingDeleted.UnitPrice;
  const newTotalPrice = parsedCookie.totalPrice - removedItem_Cost;
  const newItems = parsedCookie.items.filter((item) => item.Item_Id != itemBeingDeleted.Item_Id);
  const expires = setExpiration();

  const updatedCookie = JSON.stringify({
    totalPrice: newTotalPrice,
    items: newItems,
  });

  document.cookie = `cartCookie=${updatedCookie}; expires=${expires}; SameSite=None; secure=true`;
  store.dispatch(getCartDetails());
  toast.error("Item has been deleted!");
}

export function increaseCartItemInCookie(itemBeingIncreased) {
  const foundCookie = getCookie("cartCookie");
  const parsedCookie = JSON.parse(foundCookie);
  let cartItems = parsedCookie.items;
  const itemIndex = cartItems.findIndex((item) => item.Item_Id == itemBeingIncreased.Item_Id);
  const expires = setExpiration();
  console.log(expires);

  cartItems[itemIndex].Qty++;
  const updatedCookie = JSON.stringify({
    totalPrice: parsedCookie.totalPrice + itemBeingIncreased.UnitPrice,
    items: cartItems,
  });

  document.cookie = `cartCookie=${updatedCookie}; expires=${expires}; SameSite=None; secure=true`;
  store.dispatch(getCartDetails());
}

export function decreaseCartItemInCookie(itemBeingDecreased) {
  const foundCookie = getCookie("cartCookie");
  const parsedCookie = JSON.parse(foundCookie);
  let cartItems = parsedCookie.items;
  const itemIndex = cartItems.findIndex((item) => item.Item_Id == itemBeingDecreased.Item_Id);
  const expires = setExpiration();

  if (cartItems[itemIndex].Qty == 1) {
    deleteCartItemInCookie(itemBeingDecreased);
    return;
  }

  cartItems[itemIndex].Qty--;
  const newCartItemsToStore = JSON.stringify({
    totalPrice: parsedCookie.totalPrice - itemBeingDecreased.UnitPrice,
    items: cartItems,
  });

  document.cookie = `cartCookie=${newCartItemsToStore}; expires=${expires}; SameSite=None; secure=true`;
  store.dispatch(getCartDetails());
}

export function getCartDetailsFromCookies(item) {
  const foundCookie = getCookie("cartCookie");
  if (foundCookie) {
    const parsedCookie = JSON.parse(foundCookie);
    return {
      totalPrice: parsedCookie.totalPrice,
      items: parsedCookie.items,
    };
  } else {
    return {
      totalPrice: payload.UnitPrice,
      items: [payload],
    };
  }
}

export async function addItemsFromCookiesToDB() {
  const session = await getSession();
  const cartCookie = getCookie("cartCookie");

  if (cartCookie && session) {
    const parsedCookie = JSON.parse(cartCookie);
    const cartItems = parsedCookie.items;
    for (let item of cartItems) {
      const payload = {
        action: "plus",
        item: item,
      };
      await store.dispatch(editCart(payload));
    }

    deleteCookie("cartCookie");
    return "done";
  }
}

// ///////////////////////// LIKES //////////////////////// //

export function storeLikeInCookie(idBeingAffected, action) {
  const cookiesIsEnabled = navigator.cookieEnabled;

  if (cookiesIsEnabled) {
    const prevCookieIsFound = getCookie("likesCookie");

    if (prevCookieIsFound) {
      updateLikesCookie(action, prevCookieIsFound, idBeingAffected);
      return;
    } else {
      likeNewProduct(action, [], idBeingAffected);
    }
  }
}

const updateLikesCookie = async (action, cookie, idBeingAffected) => {
  const parsedCookie = JSON.parse(cookie);
  const prevProducts = parsedCookie.products;
  const productIndex = prevProducts.findIndex((product) => product.id == idBeingAffected);

  if (productIndex >= 0) {
    likeExistedProduct(action, prevProducts, productIndex);
  } else {
    likeNewProduct(action, prevProducts, idBeingAffected);
  }
};

const likeExistedProduct = (action, prevProducts, productIndex) => {
  const expires = setExpiration();
  let newProducts = prevProducts;
  if (action == "like") {
    newProducts[productIndex].liked = newProducts[productIndex].liked ? false : true;
  } else if (action == "unLike") {
    newProducts[productIndex].unLiked = newProducts[productIndex].unLiked ? false : true;
  }

  const cleanedProducts = cleanProducts(newProducts);
  const updatedCookie = JSON.stringify({ products: cleanedProducts });
  document.cookie = `likesCookie=${updatedCookie}; expires=${expires}; SameSite=None; secure=true`;
};

const likeNewProduct = (action, prevProducts, productId) => {
  const expires = setExpiration();
  const newProduct = {
    id: productId,
    liked: action == "like",
    unLiked: action == "unLike",
  };
  const newProducts = [...prevProducts, newProduct];
  const cleanedProducts = cleanProducts(newProducts);
  const updatedCookie = JSON.stringify({ products: cleanedProducts });
  document.cookie = `likesCookie=${updatedCookie}; expires=${expires}; SameSite=None; secure=true`;
};

const cleanProducts = (products) => {
  const cleanedProducts = products.filter((product) => {
    if (!product.liked && !product.unLiked) {
      return;
    } else {
      return product;
    }
  });
  return cleanedProducts;
};
