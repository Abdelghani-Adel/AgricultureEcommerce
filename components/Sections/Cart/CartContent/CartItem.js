import React from "react";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

const CartItem = (props) => {
  const { item } = props;
  return (
    <tr>
      <td className="remove">
        <button
          type="button"
          className="close-btn close-danger remove-from-cart"
        >
          <span />
          <span />
        </button>
      </td>
      <td data-title="Product">
        <div className="andro_cart-product-wrapper">
          <img src={item.img} alt={item.title} />
          <div className="andro_cart-product-body">
            <h6>
              {/* <Link href="#">{props.t("Footer.Information")}</Link> */}
              <Link href="#">{item.title}</Link>
            </h6>
            <p>{item.qty} Kilos</p>
          </div>
        </div>
      </td>
      <td data-title="Price">
        <strong>
          {new Intl.NumberFormat().format(item.price.toFixed(2))}$
        </strong>
      </td>
      <td className="quantity" data-title="Quantity">
        <input
          type="number"
          className="qty form-control"
          defaultValue={item.qty}
        />
      </td>
      <td data-title="Total">
        <strong>
          {new Intl.NumberFormat().format((item.qty * item.price).toFixed(2))}$
        </strong>
      </td>
    </tr>
  );
};

export default withTranslation(CartItem);
