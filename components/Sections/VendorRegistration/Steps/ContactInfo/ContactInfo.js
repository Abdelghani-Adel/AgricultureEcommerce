import { useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const ContactInfo = (props) => {
  const { vendorID } = props;
  const initReqBody = {
    // FAPartnerId: vendorID,
    // Step_Id: 5,
    First_Name: null,
    Last_Name: null,
    DOB: null,
    IdentityNo: null,
    IdentityNo_IssuedCountry: null,
    IdentityNo_Exp_str: null,
  };
  const [requestBody, setRequestBody] = useState(initReqBody);
  const [expirationDate, setExpirationDate] = useState(new Date());

  const inputChangeHandler = useCallback((e) => {
    console.log("render");
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  });
  const dateChangeHandler = useCallback((date) => {
    setExpirationDate(date);
    setRequestBody({ ...requestBody, IdentityNo_Exp_str: date.toString() });
  });

  const hydrateReqBodyWithAddress = useCallback((address) => {
    setRequestBody({ ...requestBody, ...address });
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/addPartnerContact"
    );
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-between row-cols-2">
          <InputField title="Title" fieldName="ContactName" changeHandler={inputChangeHandler} />

          <InputField
            title="Identity No."
            fieldName="IdentityNo"
            changeHandler={inputChangeHandler}
          />

          <div className="col">
            <div className="form-group">
              <label>Identity Expiration Date</label>
              <DatePicker
                selected={expirationDate}
                onChange={dateChangeHandler}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                className="form-control form-control-lg bg-light"
              />
            </div>
          </div>

          <InputField
            title="Identity Issue Country"
            fieldName="IdentityNo_IssuedCountry"
            changeHandler={inputChangeHandler}
            options={["Egypt", "USA"]}
            optionID="aa"
            optionTitle="aa"
          />

          <InputField
            title="First Name"
            fieldName="First_Name"
            changeHandler={inputChangeHandler}
          />

          <InputField title="Last Name" fieldName="Last_Name" changeHandler={inputChangeHandler} />

          <InputField title="DOB" fieldName="DOB" changeHandler={inputChangeHandler} />
        </div>
        <BillingAddressForm
          fieldChangeHandler={inputChangeHandler}
          hydrateReqBody={hydrateReqBodyWithAddress}
          vendorID={vendorID}
          showPreviousAddress={true}
        />

        <SubmitStepButton />
      </form>
    </div>
  );
};

export default ContactInfo;
