import { useSession } from "next-auth/react";
import Link from "next/Link";
import { useCallback } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import { editCart } from "../../../redux/slices/cartSlice";

const AddToCart = (props) => {
  const session = useSession();
  const dispatch = useDispatch();
  const { item } = props;

  const addToCartHandler = useCallback((e) => {
    const payload = {
      action: "plus",
      item: item,
    };

    dispatch(editCart(payload));
  });
  return (
    <Link
      href={session.status == "authenticated" ? "javascript:;" : "/login"}
      className={props.style}
      title={props.t("Products.AddToCart")}
      onClick={addToCartHandler}
    >
      {props.children ? props.children : <FaShoppingBasket />}
    </Link>
  );
};

export default withTranslation(AddToCart);
