import React, { Component, Fragment } from "react";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import CartContent from "../../components/Sections/Cart/CartContent";
import UpSells from "../../components/Sections/Cart/UpSells";

const Cart = () => {
  const pagelocation = "Cart";

  return (
    <Fragment>
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
      <CartContent />
      <UpSells />
    </Fragment>
  );
};

export default Cart;
