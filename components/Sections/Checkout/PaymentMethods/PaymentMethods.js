import { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CreditCardDetails from "./CreditCardDetails";
import { withTranslation } from "react-multi-lang";

const PaymentMethods = (props) => {
  return (
    <Fragment>
      <h4>{props.t("Checkout.PaymentChoose")}</h4>
      <Tabs defaultActiveKey="credit" id="uncontrolled-tab-example" className="mb-3" fill>
        <Tab eventKey="credit" title={props.t("Checkout.CreditCard")}>
          <CreditCardDetails />
        </Tab>
        <Tab eventKey="paypal" title="Paypal">
          <p>Redirecting to PayPal ...</p>
        </Tab>
        <Tab eventKey="on-delivery" title={props.t("Checkout.OnDelivery")}>
          <p></p>
        </Tab>
      </Tabs>
    </Fragment>
  );
};

export default withTranslation(PaymentMethods);
