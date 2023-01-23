import SubmitStepButton from "../../Reusable/SubmitStepButton";
import { useEffect, useState } from "react";
import InputField from "../../Reusable/InputField";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import { useCallback } from "react";

const PaymentInfo = (props) => {
  const { vendorID } = props;
  const [requestBody, setRequestBody] = useState();

  useEffect(() => {
    setRequestBody({
      FAPartnerId: vendorID,
      Credit_CardNo: null,
      Card_Hold_Name: null,
      Credit_CardExp_str: null,
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/addPartnerPayment"
    );
  };
  const fieldChangeHandler = useCallback((e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  });

  const hydrateReqBody = useCallback((data) => {
    setRequestBody({ ...requestBody, ...data });
  });

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-center">
          <InputField
            title="Card No."
            fieldName="Credit_CardNo"
            changeHandler={fieldChangeHandler}
          />
          <InputField
            title="Expiration Date"
            fieldName="Credit_CardExp_str"
            changeHandler={fieldChangeHandler}
          />
        </div>
        <div className="row justify-content-center">
          <InputField
            title="Card Holder's Name"
            fieldName="Card_Hold_Name"
            changeHandler={fieldChangeHandler}
          />
        </div>

        <BillingAddressForm
          fieldChangeHandler={fieldChangeHandler}
          hydrateReqBody={hydrateReqBody}
          vendorID={15}
          showPreviousAddress={true}
        />
        <SubmitStepButton fieldChangeHandler={fieldChangeHandler} countryID={1} />
      </form>
    </div>
  );
};

export default PaymentInfo;
