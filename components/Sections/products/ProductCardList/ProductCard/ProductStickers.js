import { Fragment } from "react";
import { FaStar } from "react-icons/fa";

const ProductStickers = (props) => {
  const { product } = props;
  return (
    <Fragment>
      {product.featured === true && (
        <div className="andro_product-badge andro_badge-featured">
          <FaStar />
          <span>Featured</span>
        </div>
      )}

      {(product.discount > 0 || product.discount !== "") && (
        <div className="andro_product-badge andro_badge-sale">{product.discount}% Off </div>
      )}
    </Fragment>
  );
};

export default ProductStickers;
