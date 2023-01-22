import { useEffect, useState } from "react";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const ContactInfo = (props) => {
  const { vendorID } = props;
  const [requestBody, setRequestBody] = useState();

  useEffect(() => {});

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
        <div className="row justify-content-between row-cols-2">
          <InputField title="Title" fieldName="" changeHandler={fieldChangeHandler} />
          <InputField title="Identity No." fieldName="" changeHandler={fieldChangeHandler} />
          <InputField
            title="Identity Expiration Date"
            fieldName=""
            changeHandler={fieldChangeHandler}
          />
          <InputField
            title="Identity Issue Country"
            fieldName=""
            changeHandler={fieldChangeHandler}
            options={["Egypt", "USA"]}
            optionID="aa"
            optionTitle="aa"
          />
          <InputField title="First Name" fieldName="" changeHandler={fieldChangeHandler} />
          <InputField title="Last Name" fieldName="" changeHandler={fieldChangeHandler} />
          <InputField title="DOB" fieldName="" changeHandler={fieldChangeHandler} />
        </div>
        <BillingAddressForm
          fieldChangeHandler={fieldChangeHandler}
          vendorID={15}
          showPreviousAddress={true}
        />
        <SubmitStepButton />
      </form>
    </div>
  );
};

export default ContactInfo;
