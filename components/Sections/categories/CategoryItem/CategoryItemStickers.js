import { Fragment } from "react";
import { FaStar } from "react-icons/fa";

const CategoryItemStickers = (props) => {
  const { item } = props;
  return (
    <Fragment>
      {item.featured === true && (
        <div className="andro_product-badge andro_badge-featured">
          <FaStar />
          <span>Featured</span>
        </div>
      )}

      {(item.discount > 0 || item.discount !== "") && (
        <div className="andro_product-badge andro_badge-sale">{item.discount}% Off </div>
      )}
    </Fragment>
  );
};

export default CategoryItemStickers;
