import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import OrderItemList from "./OrderItemList";
import PrivacyPolicy from "./PrivacyPolicy";

const CheckoutDetails = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="col-xl-5 checkout-billing">
      <OrderItemList cartContent={props.cartContent} />
      <PaymentMethods />
      <PrivacyPolicy />
      <button type="submit" className="andro_btn-custom primary btn-block">
        {props.t("Checkout.PlaceOrder")}
      </button>
    </div>
  );
};

export default withTranslation(CheckoutDetails);
