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
      <button type="submit" className="andro_btn-custom primary btn-block">
        {props.t("Checkout.PlaceOrder")}
      </button>
    </div>
  );
};

export default withTranslation(CheckoutDetails);
