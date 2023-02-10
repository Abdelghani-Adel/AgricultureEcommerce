import { withTranslation } from "react-multi-lang";
import { FaArrowRight, FaArrowLeft, FaStar, FaRegEye, FaShoppingBasket } from "react-icons/fa";
import Link from "next/Link";
import { useDispatch } from "react-redux";
import { editCart } from "../../../../redux/slices/cartSlice";
import { useSession } from "next-auth/react";
import AddToCart from "../../products/AddToCart";

const Best_Product = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const session = useSession();

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
    <div className="product_card">
      {item.featured === true ? (
        <div className="featured-badge">
          <FaStar />
          <span>{props.t("Products.Featured")}</span>
        </div>
      ) : (
        ""
      )}
      {item.discount > 0 || item.discount !== "" ? (
        <div className="sale-badge">{item.discount}% Off</div>
      ) : (
        ""
      )}
      <div className="product_card--thumb">
        <Link href={"/products" + item.slug}>
          <img src={item.img} alt={item.title} />
        </Link>
      </div>
      <div className="product_card--body">
        <div className="category_badge">
          <span className="badge badge-secondary ">{item.CategoryName}</span>
        </div>

        <h5 className="product_card--title">
          <Link href={"/products/" + item.slug}>{item.title}</Link>
        </h5>
        <div className="product_card--price">
          {item.discount > 0 ||
            (item.discount !== "" && (
              <span>
                {new Intl.NumberFormat().format(
                  ((product.price * (100 - product.discount)) / 100).toFixed(2)
                )}
                {item.price} 49 $
              </span>
            ))}
          <span>49 $</span>
        </div>
        <div className="product_card--desc">
          <p>{item.shortdesc}</p>
        </div>
        <div className="product_card--rating">
          <div className="andro_rating">{Rating(item.rating)}</div>
          <span>
            {item.rating}
            {props.t("Products.Stars")}
          </span>
        </div>
      </div>
      <div className="product_card--footer">
        <div className="product_card--buttons">
          <AddToCart style={"andro_btn-custom primary"} item={item} />

          <Link
            href={"/products/" + item.slug}
            data-toggle="tooltip"
            data-placement="top"
            className="andro_btn-custom light"
            title={props.t("Products.ViewDetails")}
          >
            <FaRegEye />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(Best_Product);
