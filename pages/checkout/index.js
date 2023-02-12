import { Fragment } from "react";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
// import CheckoutContent from "../../components/Sections/Checkout/CheckoutContent";

const pagelocation = "Checkout";

const Checkout = (props) => {
  return (
    <Fragment>
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
      {/* <CheckoutContent /> */}
    </Fragment>
  );
};

export default Checkout;
