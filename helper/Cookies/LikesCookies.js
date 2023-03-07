import { getSession } from "next-auth/react";
import { UPSproductLikes } from "../../services/productServices";
import { getCookie, setCookieExpiration } from "./CookiesHandlers";

export function storeLikeInCookie(idBeingAffected, action) {
  const isCookieEnabled = navigator.cookieEnabled;
  if (!isCookieEnabled) return;

  if (isCookieEnabled) {
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
  const isCookieEnabled = navigator.cookieEnabled;
  if (!isCookieEnabled) return;

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
  const isCookieEnabled = navigator.cookieEnabled;
  if (!isCookieEnabled) return;

  const expires = setCookieExpiration();
  let newProducts = prevProducts;
  if (action == "like") {
    newProducts[productIndex].liked = newProducts[productIndex].liked ? false : true;
    newProducts[productIndex].unLiked = false;
  } else if (action == "unLike") {
    newProducts[productIndex].unLiked = newProducts[productIndex].unLiked ? false : true;
    newProducts[productIndex].liked = false;
  }

  const cleanedProducts = cleanProducts(newProducts);
  const updatedCookie = JSON.stringify({ products: cleanedProducts });
  document.cookie = `likesCookie=${updatedCookie}; expires=${expires}; SameSite=None; secure=false`;
};

const likeNewProduct = (action, prevProducts, productId) => {
  const isCookieEnabled = navigator.cookieEnabled;
  if (!isCookieEnabled) return;

  const expires = setCookieExpiration();
  const newProduct = {
    id: productId,
    liked: action == "like",
    unLiked: action == "unLike",
  };
  const newProducts = [...prevProducts, newProduct];
  const cleanedProducts = cleanProducts(newProducts);
  const updatedCookie = JSON.stringify({ products: cleanedProducts });
  document.cookie = `likesCookie=${updatedCookie}; expires=${expires}; SameSite=None; secure=false`;
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

export const setInitLikes = async (dbLikes, dbUnLikes, prod_Id, setLikes, setUnlikes) => {
  const session = await getSession();
  let totalLikes = dbLikes;
  let totalUnLikes = dbUnLikes;

  const likesCookieIsFound = getCookie("likesCookie");
  if (!session && likesCookieIsFound) {
    const parsedCookie = JSON.parse(likesCookieIsFound);
    const productIndex = parsedCookie.products.findIndex((item) => item.id == prod_Id);
    const foundProduct = parsedCookie.products[productIndex];

    foundProduct && foundProduct.liked && totalLikes++;
    foundProduct && foundProduct.unLiked && totalUnLikes++;
  }

  setLikes(totalLikes);
  setUnlikes(totalUnLikes);
};

export const setInitialLikeState = async (product, likeBtn, unLikeBtn) => {
  const session = await getSession();

  if (session) {
    const productReview = product.myreview;
    if (!productReview) {
      return;
    }

    productReview.isLike == 1 && likeBtn(true);
    productReview.isLike == 2 && unLikeBtn(true);
    return;
  }

  const likesCookieIsFound = getCookie("likesCookie");
  if (!session && likesCookieIsFound) {
    const parsedCookie = JSON.parse(likesCookieIsFound);
    const productIndex = parsedCookie.products.findIndex((item) => item.id == product.Item_Id);
    const foundProduct = parsedCookie.products[productIndex];

    foundProduct && foundProduct.liked && likeBtn(true);
    foundProduct && foundProduct.unLiked && unLikeBtn(true);
  }
};

export const sendLikesToDB = async () => {
  const session = await getSession();
  if (!session) {
    return;
  }

  const cookieIsFound = getCookie("likesCookie");
  if (cookieIsFound) {
    const parsedCookie = JSON.parse(cookieIsFound);
    const likes = parsedCookie.products;

    likes.map(async (record) => {
      await sendLikeRecordToDB(record, cookieIsFound);
    });
  }
};

const sendLikeRecordToDB = async (record, cookieIsFound) => {
  const requestBody = {
    Review_Id: 0,
    Company_Id: 0,
    Item_Id: record.id,
    Cust_Id: 0,
    Review_Num: 0,
    Review_Comment: "string",
    isLike: record.liked ? 1 : 2,
    Computer_Name: "string",
    Active: true,
    Cust_Name: "string",
  };

  const action = record.liked ? "like" : "unLike";
  updateLikesCookie(action, cookieIsFound, record.id);

  const res = await UPSproductLikes(requestBody);
};
