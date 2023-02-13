import { useSession } from "next-auth/react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import { editCart } from "../../../redux/slices/cartSlice";

const AddToCart = (props) => {
  const session = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  const addToCartHandler = useCallback((e) => {
    e.preventDefault();
    if (session.status != "authenticated") {
      router.push("/login");
      return;
    }
    const payload = {
      action: "plus",
      item: props.item,
    };

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
