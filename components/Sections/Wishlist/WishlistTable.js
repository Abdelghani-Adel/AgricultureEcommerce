import wishlist from "../../../data/wishlist.json";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

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
          <tr key={i}>
            <td className="remove">
              <button type="button" className="close-btn close-danger remove-from-cart">
                <span />
                <span />
              </button>
            </td>
            <td data-title="Product">
              <div className="andro_cart-product-wrapper">
                <img src="img/products/1.png" alt={item.title} />
                <div className="andro_cart-product-body">
                  <h6>
                    {" "}
                    <Link href="#">{item.title}</Link>{" "}
                  </h6>
                  <p>{item.qty} Kilos</p>
                </div>
              </div>
            </td>
            <td data-title="Price">
              {" "}
              <strong>{new Intl.NumberFormat().format(item.price.toFixed(2))}$</strong>{" "}
            </td>
            <td data-title="Availability">
              {item.stock === true ? (
                <span className="andro_product-stock instock">{props.t("Wishlist.InStock")}</span>
              ) : (
                <span className="andro_product-stock outofstock">
                  {props.t("Wishlist.OutOfStock")}
                </span>
              )}
            </td>
            <td data-title="Total">
              {" "}
              <strong>
                {new Intl.NumberFormat().format((item.qty * item.price).toFixed(2))}$
              </strong>{" "}
            </td>
            <td data-title="Actions">
              {" "}
              <button type="submit" className="andro_btn-custom btn-sm shadow-none">
                {props.t("Products.AddToCart")}
              </button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default withTranslation(WishlistTable);
