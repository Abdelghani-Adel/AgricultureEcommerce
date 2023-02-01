import Link from "next/Link";
import { withTranslation } from "react-multi-lang";
import { Rating } from "../../../../../helper/helper";

const ProductDetails = (props) => {
  const { product } = props;
  return (
    <div className="andro_product-body">
      <h5 className="andro_product-title">
        <Link href={props.productPath}> {product.Item_Code} </Link>
      </h5>
      <div className="andro_product-price">
        {product.discount > 0 ||
          (product.discount !== "" && (
            <span>
              {new Intl.NumberFormat().format(
                ((product.price * (100 - product.discount)) / 100).toFixed(2)
              )}
              $
            </span>
          ))}
      </div>
      <p>{product.shortdesc}</p>
      <div className="andro_rating-wrapper">
        <div className="andro_rating">{Rating(product.rating)}</div>
        <span>
          {product.rating}
          {props.t("Products.Stars")}
        </span>
      </div>
    </div>
  );
};

export default withTranslation(ProductDetails);
