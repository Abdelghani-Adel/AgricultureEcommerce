import Link from "next/Link";
import { withTranslation } from "react-multi-lang";
import { Rating } from "../../../../helper/helper";
import { useSelector } from "react-redux";

const ProductDetails = (props) => {
  const { product } = props;
  const cartState = useSelector((state) => state.cart);

  return (
    <div className="product_card--body">
      <div className="category_badge">
        <span className="badge badge-secondary">{product.Category_Name || "Category Name"}</span>
      </div>

      <h5 className="product_card--title">
        <Link href={props.productPath}> {product.Item_Code} </Link>
      </h5>

      <div className="product_card--price">
        {product.discount > 0 ||
          (product.discount !== "" && (
            <span>
              {product.Price} {cartState.currency && cartState.currency.CurrBaseCode}
            </span>
          ))}
      </div>

      <div
        className="product_card--desc"
        dangerouslySetInnerHTML={{ __html: product.Item_HTML }}
      ></div>

      <div className="product_card--rating">
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
