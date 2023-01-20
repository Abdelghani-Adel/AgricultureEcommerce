import { withTranslation } from "react-multi-lang";
import BillingAddressCountry from "./BillingAddressCountry";
import BillingAddressInput from "./BillingAddressInput";

const BillingAddress = (props) => {
  return (
    <div className="col-xl-7">
      <h4>{props.t("Checkout.BillingDetails")}</h4>
      <div className="row">
        <BillingAddressInput
          requiredField={true}
          fieldName="fname"
          transTitle="Checkout.Firstname"
          fieldWidth="6"
        />
        <BillingAddressInput
          requiredField={true}
          fieldName="lname"
          transTitle="Checkout.Lastname"
          fieldWidth="6"
        />

        <BillingAddressCountry />

        <BillingAddressInput
          requiredField={true}
          fieldName="addr-1"
          transTitle="Checkout.StAddress1"
          fieldWidth="6"
        />
        <BillingAddressInput
          requiredField={false}
          fieldName="addr-2"
          transTitle="Checkout.StAddress2"
          transTitle2="Checkout.Optional"
          fieldWidth="6"
        />
        <BillingAddressInput
          requiredField={true}
          fieldName="town"
          transTitle="Checkout.TownCity"
          fieldWidth="6"
        />
        <BillingAddressInput
          requiredField={true}
          fieldName="phone"
          transTitle="Checkout.Phone"
          fieldWidth="6"
        />
        <BillingAddressInput
          requiredField={true}
          fieldName="email"
          transTitle="Checkout.Email"
          fieldWidth="6"
        />
      </div>
    </div>
  );
};

export default withTranslation(BillingAddress);
