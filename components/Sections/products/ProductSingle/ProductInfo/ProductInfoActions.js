import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../redux/slices/cartSlice";
import AddToCart from "../../AddToCart";

const ProductInfoActions = (props) => {
  const session = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const buyNowHandler = () => {
    if (session.status != "authenticated") {
      router.push("/login");
      return;
    }

    dispatch(cartActions.hydrateTempCart(props.item));
    router.push("/checkout");
  };

  return (
    <div className="d-flex">
      <AddToCart style={"default_btn"} item={props.item} quantity={props.quantity}>
        Add To Cart
      </AddToCart>

      <button onClick={buyNowHandler} className="default_btn ms-2">
        {props.t("Products.ShopNow")}
      </button>
    </div>
  );
};

export default withTranslation(ProductInfoActions);
