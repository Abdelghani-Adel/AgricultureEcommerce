import React from "react";
import { withTranslation } from "react-multi-lang";
import CartItemList from "./CartItemList";

const CartItemsTable = (props) => {
  return (
    <table className="andro_responsive-table">
      <thead>
        <tr>
          <th></th>
          <th className="remove-item" />
          <th>{props.t("Cart.Product")}</th>
          <th>{props.t("Cart.Price")}</th>
          <th>{props.t("Cart.Quantity")}</th>
          <th>{props.t("Cart.Total")}</th>
        </tr>
      </thead>
      <tbody>
        <CartItemList />
      </tbody>
    </table>
  );
};

export default withTranslation(CartItemsTable);
