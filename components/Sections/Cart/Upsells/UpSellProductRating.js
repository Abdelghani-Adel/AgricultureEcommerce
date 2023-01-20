import Rating from "../../../../helper/Rating";

const UpSellProductRating = (props) => {
  const { rating } = props;
  return (
    <div className="andro_rating-wrapper">
      <div className="andro_rating">{Rating(rating)}</div>
      <span>{rating} Stars</span>
    </div>
  );
};

export default UpSellProductRating;
