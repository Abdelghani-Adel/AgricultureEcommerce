import { withTranslation } from "react-multi-lang";
import wishlist from "../../../data/wishlist.json";
import WishlistItem from "./WishlistItem/WishlistItem";

const WishlistTable = (props) => {
  return (
    <table className="andro_responsive-table">
      <thead>
        <tr>
          <th className="remove-item" />
          <th>{props.t("Cart.Product")}</th>
          <th>{props.t("Cart.Price")}</th>
          <th>{props.t("Wishlist.Availability")}</th>
          <th>{props.t("Cart.Total")}</th>
          <th>{props.t("Wishlist.Actions")}</th>
        </tr>
      </thead>
      <tbody>
        {wishlist.map((item, i) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default withTranslation(WishlistTable);
