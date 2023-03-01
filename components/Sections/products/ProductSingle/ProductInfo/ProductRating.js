import { FaRegHeart } from "react-icons/fa";
import { Rating } from "../../../../../helper/helper";

const ProductRating = ({ rating }) => {
  return (
    <div className="andro_rating-wrapper">
      <div className="andro_rating">
        {/* <FaRegHeart /> */}
        {Rating(rating)} {rating} 
      </div>
    </div>
  );
};

export default ProductRating;
