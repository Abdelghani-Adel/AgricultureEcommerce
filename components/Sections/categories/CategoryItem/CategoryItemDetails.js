import Link from "next/Link";
import { withTranslation } from "react-multi-lang";
import { Rating } from "../../../../helper/helper";

const CategoryItemDetails = (props) => {
  const { item } = props;
  return (
    <div className="andro_product-body">
      <h5 className="andro_product-title">
        <Link href={"/products/" + item.slug}> {item.title} </Link>{" "}
      </h5>
      <div className="andro_product-price">
        {item.discount > 0 ||
          (item.discount !== "" && (
            <span>
              {new Intl.NumberFormat().format(
                ((item.price * (100 - item.discount)) / 100).toFixed(2)
              )}
              $
            </span>
          ))}

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
  );
};

export default withTranslation(CategoryItemDetails);
