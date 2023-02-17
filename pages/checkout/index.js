import { useRouter } from "next/router";
import { Fragment, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import CheckoutContent from "../../components/Sections/Checkout/CheckoutContent";
import { cartActions } from "../../redux/slices/cartSlice";

const pagelocation = "Checkout";

const Checkout = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const router = useRouter();

  const firstRender = useRef(true);

  useLayoutEffect(() => {
    if (cartState.items.length == 0 && !cartState.tempCheckoutCart) {
      router.replace("/");
      return;
    }
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    dispatch(cartActions.deleteTempCart());
  }, []);

  return (
    <Fragment>
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
      <CheckoutContent />
    </Fragment>
  );
};

export default Checkout;
