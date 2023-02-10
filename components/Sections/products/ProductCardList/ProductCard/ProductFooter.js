import Link from "next/Link";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { withTranslation } from "react-multi-lang";
import AddToCart from "../../AddToCart";

const ProductFooter = (props) => {
  const { product } = props;
  return (
    <div className="product_card--footer">
      <div className="product_card--buttons">
        <AddToCart item={product} style={"andro_btn-custom primary"} />

        <Link
          href={props.productPath}
          data-toggle="tooltip"
          data-placement="top"
          className="andro_btn-custom light"
          title={props.t("Products.ViewDetails")}
        >
          <FaRegEye />
        </Link>

        {/* <Link
          href="#"
          className="andro_btn-custom light"
          data-toggle="tooltip"
          data-placement="top"
          title={props.t("Products.AddToWish")}
        >
          <BiLike />
        </Link> */}
      </div>
    </div>
  );
};

export default withTranslation(ProductFooter);
