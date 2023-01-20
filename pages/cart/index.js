import React, { Fragment } from "react";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import CartContent from "../../components/Sections/Cart/CartContent/CartContent";
import CartTotal from "../../components/Sections/Cart/CartTotal";
import UpSells from "../../components/Sections/Cart/Upsells/UpSells";
import { withTranslation } from "react-multi-lang";

const Cart = () => {
  return (
    <Fragment>
      <Breadcrumbs breadcrumb={{ pagename: "Cart" }} />

      <div className="container">
        <CartContent />

        <div className="section pt-0">
          <div className="row andro_cart-form">
            <UpSells />
            <CartTotal />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withTranslation(Cart);
