import { withTranslation } from "react-multi-lang";
import OrderItemList from "./OrderItemList";
import PrivacyPolicy from "./PrivacyPolicy";

const CheckoutDetails = (props) => {
  return (
    <div className="col-xl-5 checkout-billing">
      <OrderItemList cartContent={props.cartContent} />
      {/* <PaymentMethods /> */}
      <PrivacyPolicy />
      <button type="submit" className="andro_btn-custom primary btn-block" aria-label="Place Order">
        {props.t("Checkout.PlaceOrder")}
      </button>
    </div>
  );
};

export default withTranslation(CheckoutDetails);
