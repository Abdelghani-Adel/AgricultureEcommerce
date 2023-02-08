import { withTranslation } from "react-multi-lang";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import OrderItemList from "./OrderItemList";
import PrivacyPolicy from "./PrivacyPolicy";

const CheckoutDetails = (props) => {
  return (
    <div className="col-xl-5 checkout-billing">
      <OrderItemList />
      <PaymentMethods />
      <PrivacyPolicy />
      <button
        type="button"
        className="andro_btn-custom primary btn-block"
        onClick={props.placeOrderHandler}
      >
        {props.t("Checkout.PlaceOrder")}
      </button>
    </div>
  );
};

export default withTranslation(CheckoutDetails);
