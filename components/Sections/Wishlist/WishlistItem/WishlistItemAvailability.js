import { withTranslation } from "react-multi-lang";

const WishlistItemAvailability = (props) => {
  const { item } = props;
  return (
    <td data-title="Availability">
      {item.stock === true ? (
        <span className="andro_product-stock instock">
          {props.t("Wishlist.InStock")}
        </span>
      ) : (
        <span className="andro_product-stock outofstock">
          {props.t("Wishlist.OutOfStock")}
        </span>
      )}
    </td>
  );
};

export default withTranslation(WishlistItemAvailability);
