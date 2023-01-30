import { FaCompressAlt, FaRegEye, FaRegHeart, FaShoppingBasket, FaStar } from "react-icons/fa";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

const ProductFooter = (props) => {
  const { product } = props;
  return (
    <div className="andro_product-footer">
      <div className="andro_product-controls">
        <Link
          href={props.productPath}
          data-toggle="tooltip"
          data-placement="top"
          title={props.t("Products.AddToCart")}
        >
          <FaShoppingBasket />
        </Link>

        <Link
          href={props.productPath}
          data-toggle="tooltip"
          data-placement="top"
          title={props.t("Products.ViewDetails")}
        >
          <FaRegEye />
        </Link>

        <Link
          href="#"
          data-toggle="tooltip"
          data-placement="top"
          title={props.t("Products.Compare")}
        >
          <FaCompressAlt />
        </Link>

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
