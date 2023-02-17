import React from "react";
import { withTranslation } from "react-multi-lang";
import CartItemList from "./CartItemList";

const CartItemsTable = (props) => {
  return (
    <table className="andro_responsive-table">
      <thead>
        <tr>
          <th style={{ width: "5%" }}>{props.t("Cart.Check")}</th>
          <th style={{ width: "5%" }} className="remove-item">
            {props.t("Cart.Delete")}
          </th>
          <th style={{ width: "60%" }}>{props.t("Cart.Product")}</th>
          <th style={{ width: "10%" }}>{props.t("Cart.Price")}</th>
          <th style={{ width: "10%" }}>{props.t("Cart.Quantity")}</th>
          <th style={{ width: "10%" }}>{props.t("Cart.Total")}</th>
        </tr>
      </thead>
      <tbody>
        <CartItemList />
      </tbody>
    </table>
  );
};

export default withTranslation(CartItemsTable);
