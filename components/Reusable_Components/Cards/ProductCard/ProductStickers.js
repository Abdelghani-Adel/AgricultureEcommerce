import { Fragment } from "react";
import { FaStar } from "react-icons/fa";

const ProductStickers = (props) => {
  const { product } = props;
  return (
    <Fragment>
      {product.featured === true && (
        <div className="featured-badge">
          <FaStar />
          <span>Featured</span>
        </div>
      )}

      {(product.discount > 0 || product.discount !== "") && (
        <div className="sale-badge">{product.discount}% Off </div>
      )}
    </Fragment>
  );
};

export default ProductStickers;
