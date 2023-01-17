import React from "react";
import cart from "../../../data/cart.json";
import CartItem from "./CartItem";
import { withTranslation } from "react-multi-lang";

const CartItemList = (props) => {
  return (
    <table className="andro_responsive-table">
      <thead>
        <tr>
          <th className="remove-item" />
          <th>{props.t("Cart.Product")}</th>
          <th>{props.t("Cart.Price")}</th>
          <th>{props.t("Cart.Quantity")}</th>
          <th>{props.t("Cart.Total")}</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, i) => (
          <CartItem key={Math.random()} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default withTranslation(CartItemList);
