import React, { Fragment, useEffect } from "react";
import { withTranslation } from "react-multi-lang";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/Reusable_Components/Breadcrumbs";
import CartContent from "../../components/Sections/Cart/CartContent/CartContent";
import CartTotal from "../../components/Sections/Cart/CartTotal";
import UpSells from "../../components/Sections/Cart/Upsells/UpSells";
import { getCartDetails } from "../../redux/slices/cartSlice";
import { loaderActions } from "../../redux/slices/loaderSlice";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  dispatch(loaderActions.hideLoader());
  useEffect(() => {
    dispatch(getCartDetails());
  }, []);

  return (
    <Fragment>
      <Breadcrumbs breadcrumb={{ pagename: "Cart" }} />

      <div className="container">
        {cartState.items.length > 0 ? (
          <>
            <CartContent />

            <div className="section pt-0">
              <div className="row andro_cart-form">
                <UpSells />
                <CartTotal />
              </div>
            </div>
          </>
        ) : (
          <h4 className="text-center m-5">{props.t("Cart.EmptyCart")}</h4>
        )}
      </div>
    </Fragment>
  );
};

export default withTranslation(Cart);
