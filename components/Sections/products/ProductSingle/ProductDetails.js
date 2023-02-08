import Link from "next/Link";
import { Fragment } from "react";
import { FaCompressAlt, FaRegHeart } from "react-icons/fa";
import { Rating } from "../../../../helper/helper";

const ProductDetails = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <Fragment>
      {/* Add to wishlist */}
      <div className="andro_product-single-controls andro_post-share">
        <Link href="#" className="andro_add-to-favorite">
          <FaRegHeart />
        </Link>
        <Link href="#" className="andro_add-to-favorite">
          <FaCompressAlt />
        </Link>
      </div>

      {/* Rating */}
      <div className="andro_rating-wrapper">
        <div className="andro_rating">
          {Rating(item.rating)} {item.rating} Stars
        </div>
      </div>

      {/* Product Title */}
      <h3>{item.Item_Name}</h3>

      {/* Product Price */}
      <div className="andro_product-price">{item.price} 49 $</div>

      {/* Product Description */}
      <div
        className="andro_product-excerpt mb-3"
        dangerouslySetInnerHTML={{ __html: item.Item_Desc }}
      ></div>
    </Fragment>
  );
};

export default ProductDetails;
