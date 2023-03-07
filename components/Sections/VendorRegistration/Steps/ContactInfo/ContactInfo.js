import { useCallback, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const ContactInfo = (props) => {
  const lang = useSelector((state) => state.lang);
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
    props.saveFunction(requestBody, "/api/ECommerceSetting/addPartnerContact");
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-between row-cols-2">
          <InputField title="Title" fieldName="ContactName" changeHandler={inputChangeHandler} />

          <InputField
            title="Vendor.IdentityNo"
            fieldName="IdentityNo"
            changeHandler={inputChangeHandler}
          />

          <div className="col">
            <div className="form-group">
              <label>{props.t("Vendor.IdentityExpiry")}</label>
              <DatePicker
                selected={expirationDate}
                onChange={dateChangeHandler}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                className="form-control bg-light"
              />
            </div>
          </div>

          <InputField
            title="Vendor.IdentityIssueCountry"
            fieldName="IdentityNo_IssuedCountry"
            changeHandler={inputChangeHandler}
            options={[{ optionID: "", optionTitle: "Egypt" }]}
            optionID="optionID"
            optionTitle="optionTitle"
          />

          <InputField
            title="Vendor.Fname"
            fieldName="First_Name"
            changeHandler={inputChangeHandler}
          />

          <InputField
            title="Vendor.Lname"
            fieldName="Last_Name"
            changeHandler={inputChangeHandler}
          />

          <InputField title="Vendor.DOB" fieldName="DOB" changeHandler={inputChangeHandler} />
        </div>
        <BillingAddressForm
          fieldChangeHandler={inputChangeHandler}
          hydrateReqBody={hydrateReqBodyWithAddress}
          vendorID={vendorID}
          showPreviousAddress={true}
        />

        <SubmitStepButton title="Vendor.Save" />
      </form>
    </div>
  );
};

export default withTranslation(ContactInfo);
