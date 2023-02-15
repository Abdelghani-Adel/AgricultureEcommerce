import { useSession } from "next-auth/react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, storeCartItemInCookie } from "../../../helper/cookiesHandlers";
import { editCart, getCartDetails } from "../../../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCart = (props) => {
  const session = useSession();
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = useCallback((e) => {
    e.preventDefault();
    const cartItem = {
      Item_Id: props.item.Item_Id,
      Item_Name: props.item.Item_Name,
      UnitPrice: props.item.Price,
      Quote_Date: "",
      Qty: 1,
      UOM_Id: props.item.FAUOMID,
      UOM_Name: props.item.UOMName,
      lang: "ar",
    };

    const payload = {
      action: "plus",
      item: cartItem,
    };

    if (session.status != "authenticated") {
      storeCartItemInCookie(cartItem);
      toast(`${cartState.items.length} item in your cart`);
      return;
    }

    dispatch(editCart(payload));
  });

  return (
    <Link
      href="/"
      className={props.style}
      title={props.t("Products.AddToCart")}
      onClick={addToCartHandler}
    >
      {props.children ? props.children : <FaShoppingBasket />}
    </Link>
  );
};

export default withTranslation(AddToCart);
