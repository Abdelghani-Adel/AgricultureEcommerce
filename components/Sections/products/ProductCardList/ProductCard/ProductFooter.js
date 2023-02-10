import Link from "next/Link";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { withTranslation } from "react-multi-lang";
import AddToCart from "../../AddToCart";

const ProductFooter = (props) => {
  const { product } = props;
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
          <BiLike />
        </Link>
      </div>
    </div>
  );
};

export default withTranslation(ProductFooter);
