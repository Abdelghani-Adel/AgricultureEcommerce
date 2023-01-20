import SubmitStepButton from "../../Reusable/SubmitStepButton";
import { useEffect, useState } from "react";
import InputField from "../../Reusable/InputField";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";

const PaymentInfo = (props) => {
  const { vendorID } = props;

  const [requestBody, setRequestBody] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(requestBody);
  };
  const fieldChangeHandler = (e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-center">
          <InputField title="Card No." fieldName="" changeHandler={fieldChangeHandler} />
          <InputField title="Expiration Date" fieldName="" changeHandler={fieldChangeHandler} />
        </div>
        <div className="row justify-content-center">
          <InputField title="Card Holder's Name" fieldName="" changeHandler={fieldChangeHandler} />
        </div>

        <BillingAddressForm
          fieldChangeHandler={fieldChangeHandler}
          vendorID={vendorID}
          showPreviousAddress={true}
        />
        <SubmitStepButton fieldChangeHandler={fieldChangeHandler} countryID={1} />
      </form>
    </div>
  );
};

export default PaymentInfo;
