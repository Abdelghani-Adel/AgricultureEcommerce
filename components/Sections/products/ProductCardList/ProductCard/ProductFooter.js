import { FaCompressAlt, FaRegEye, FaRegHeart, FaShoppingBasket, FaStar } from "react-icons/fa";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { cartActions, editCart } from "../../../../../redux/slices/cartSlice";
import { useSession } from "next-auth/react";
import AddToCart from "../../AddToCart";

const ProductFooter = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const session = useSession();

  const addToCartHandler = useCallback((e) => {
    const payload = {
      action: "plus",
      item: product,
    };

    dispatch(editCart(payload));
  });
  return (
    <div className="andro_product-footer">
      <div className="andro_product-controls">
        <AddToCart item={product} />

        <Link
          href={props.productPath}
          data-toggle="tooltip"
          data-placement="top"
          title={props.t("Products.ViewDetails")}
        >
          <FaRegEye />
        </Link>

        {/* <Link
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title={props.t("Products.Compare")}
        >
          <FaCompressAlt />
        </Link> */}

        <Link
          href="#"
          className="favorite"
          data-toggle="tooltip"
          data-placement="top"
          title={props.t("Products.AddToWish")}
        >
          <FaRegHeart />
        </Link>
      </div>
    </div>
  );
};

export default withTranslation(ProductFooter);
