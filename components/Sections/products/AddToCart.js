import { useSession } from "next-auth/react";
import { useCallback } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storeCartItemInCookie } from "../../../helper/cookiesHandlers";
import { editCart } from "../../../redux/slices/cartSlice";

const AddToCart = (props) => {
  const session = useSession();
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

    toast.info(`Item has been added to you cart!`);

    if (session.status != "authenticated") {
      storeCartItemInCookie(cartItem);

      return;
    }

    dispatch(editCart(payload));
  });

  return (
    <button
      className={`product_footer--button ${props.style || ""}`}
      title={props.t("Products.AddToCart")}
      onClick={addToCartHandler}
    >
      {props.children ? props.children : <FaShoppingBasket />}
    </button>
  );
};

export default withTranslation(AddToCart);
