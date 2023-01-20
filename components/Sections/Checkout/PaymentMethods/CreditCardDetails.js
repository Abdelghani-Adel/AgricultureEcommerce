import BillingAddressInput from "../BillingDetails/BillingAddressInput";

const CreditCardDetails = (props) => {
  return (
    <div className="row">
      <BillingAddressInput
        requiredField={false}
        fieldName="master-number"
        transTitle="Checkout.Card"
        fieldWidth="12"
      />
      <BillingAddressInput
        requiredField={false}
        fieldName="master-name"
        transTitle="Checkout.FullName"
        fieldWidth="12"
      />
      <BillingAddressInput
        requiredField={false}
        fieldName="master-expiry"
        transTitle="Checkout.Expiry"
        fieldWidth="6"
      />
      <BillingAddressInput
        requiredField={false}
        fieldName="master-cvv"
        transTitle="CVV"
        fieldWidth="6"
      />
    </div>
  );
};

export default CreditCardDetails;
