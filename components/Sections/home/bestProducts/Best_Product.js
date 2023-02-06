import { withTranslation } from "react-multi-lang";
import { FaArrowRight, FaArrowLeft, FaStar, FaRegEye, FaShoppingBasket } from "react-icons/fa";
import Link from "next/Link";
import { useDispatch } from "react-redux";
import { editCart } from "../../../../redux/slices/cartSlice";

const Best_Product = (props) => {
  console.log(props);
  const { item } = props;
  const dispatch = useDispatch();

  const Rating = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (rating && rating > 0) {
      for (let i = 0; i <= rating - 1; i++) {
        stars[i] = <FaStar className="active" key={i} />;
      }
    }
    return stars;
  };

  const addToCartHandler = () => {
    const payload = {
      action: "plus",
      item: item,
    };

    dispatch(editCart(payload));
  };
  return (
    <div className="andro_product andro_product-has-controls andro_product-has-buttons">
      {item.featured === true ? (
        <div className="andro_product-badge andro_badge-featured">
          <FaStar />
          <span>{props.t("Products.Featured")}</span>
        </div>
      ) : (
        ""
      )}
      {item.discount > 0 || item.discount !== "" ? (
        <div className="andro_product-badge andro_badge-sale">{item.discount}% Off</div>
      ) : (
        ""
      )}
      <div className="andro_product-thumb">
        <Link href={"/products" + item.slug}>
          <img src={item.img} alt={item.title} />
        </Link>
      </div>
      <div className="andro_product-body">
        <div className="category_badge">
          <span className="badge badge-secondary ">{item.CategoryName}</span>
        </div>

        <h5>
          <Link className="text-dark" href={"/products/" + item.slug}>
            {item.title}
          </Link>
        </h5>
        <div className="andro_product-price">
          {item.discount > 0 || item.discount !== "" ? (
            <span>
              {new Intl.NumberFormat().format(
                ((item.price * (100 - item.discount)) / 100).toFixed(2)
              )}
              $
            </span>
          ) : (
            ""
          )}
          <span>{new Intl.NumberFormat().format(item.price.toFixed(2))}$</span>
        </div>
        <p>{item.shortdesc}</p>
        <div className="andro_rating-wrapper">
          <div className="andro_rating">{Rating(item.rating)}</div>
          <span>
            {item.rating}
            {props.t("Products.Stars")}
          </span>
        </div>
      </div>
      <div className="andro_product-footer">
        <div className="andro_product-buttons">
          <button className="andro_btn-custom primary" onClick={addToCartHandler}>
            <FaShoppingBasket />
          </button>

          <Link href={"/products/" + item.slug} className="andro_btn-custom light">
            <FaRegEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(Best_Product);
