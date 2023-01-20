import { withTranslation } from "react-multi-lang";

const WishlistItemActions = (props) => {
  return (
    <td data-title="Actions">
      <button type="submit" className="andro_btn-custom btn-sm shadow-none">
        {props.t("Products.AddToCart")}
      </button>
    </td>
  );
};

export default withTranslation(WishlistItemActions);
