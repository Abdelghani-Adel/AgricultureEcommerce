import React, { Fragment } from "react";
import CartItemList from "./CartItemList";
import CouponCodeApply from "./CouponCodeApply";

const CartContent = () => {
  return (
    <div className="section">
      <CartItemList />
      <CouponCodeApply />
    </div>
  );
};

export default CartContent;
