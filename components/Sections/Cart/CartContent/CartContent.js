import React, { Fragment } from "react";
import CartItemsTable from "./CartItemsTable";
import CouponCodeApply from "./CouponCodeApply";

const CartContent = () => {
  return (
    <div className="section">
      <CartItemsTable />
      <CouponCodeApply />
    </div>
  );
};

export default CartContent;
