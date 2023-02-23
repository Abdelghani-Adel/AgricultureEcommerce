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
    <div className="row">
      <div className="col-lg-6 col-xs-12">
        <AddToCart style={"default_btn"} item={props.item} quantity={props.quantity}>
          Add To Cart
        </AddToCart>
      </div>

      <div className="col-lg-6 col-xs-12 ">
        <button onClick={buyNowHandler} className="default_btn">
          {props.t("Products.ShopNow")}
        </button>
      </div>
    </div>
  );
};

export default withTranslation(ProductInfoActions);
