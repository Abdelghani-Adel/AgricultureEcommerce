import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storeCartItemInCookie } from "../../../helper/Cookies/CarCookies";
import { editCart } from "../../../redux/slices/cartSlice";

const AddToCart = (props) => {
  const { item } = props;
  const lang = useSelector((state) => state.lang);
  const cartState = useSelector((state) => state.cart);
  const session = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const addToCartHandler = useCallback(() => {
    const isCookieEnabled = navigator.cookieEnabled;

    const cartItem = {
      Item_Id: item.Item_Id,
      Item_Name: item.Item_Name,
      UnitPrice: item.Price,
      Quote_Date: "",
      Qty: props.quantity ? props.quantity : 1,
      UOM_Id: item.FAUOMID,
      UOM_Name: item.UOMName,
      Supp_Id: 0,
      Cart_Id: cartState.Cart_Id,
      lang: lang,
    };

    if (session.status != "authenticated") {
      if (isCookieEnabled) {
        storeCartItemInCookie(cartItem);
        toast.success(`Item has been added to you cart!`);
      } else {
        router.push("/login");
      }

      return;
    }

    const payload = {
      action: "plus",
      item: cartItem,
    };
    dispatch(editCart(payload));
    toast.success(`Item has been added to you cart!`);
  });

  return (
    <button
      className={`${props.style || ""}`}
      title={props.t("Products.AddToCart")}
      onClick={addToCartHandler}
      aria-label="Add To Cart"
    >
      {props.children ? `${props.t("Products.AddToCart")}` : <FaShoppingBasket />}
    </button>
  );
};

export default withTranslation(AddToCart);
