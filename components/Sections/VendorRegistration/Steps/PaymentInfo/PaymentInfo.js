import SubmitStepButton from "../../Reusable/SubmitStepButton";
import { useEffect, useState, useCallback } from "react";
import InputField from "../../Reusable/InputField";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withTranslation } from "react-multi-lang";

const PaymentInfo = (props) => {
  const { vendorID } = props;
  const initialReqBody = {
    FAPartnerId: vendorID,
    Step_Id: 3,
    Credit_CardNo: null,
    Card_Hold_Name: null,
    Credit_CardExp_str: null,
  };
  const [requestBody, setRequestBody] = useState(initialReqBody);
  const [expirationDate, setExpirationDate] = useState();

  const inputChangeHandler = useCallback((e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  });
  const dateChangeHandler = useCallback((date) => {
    setExpirationDate(date);
    setRequestBody({ ...requestBody, Credit_CardExp_str: date.toString() });
  });

  const hydrateReqBody = useCallback((data) => {
    setRequestBody({ ...requestBody, ...data });
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(requestBody, "/api/ECommerceSetting/addPartnerPayment");
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-center">
          <InputField
            title="Vendor.CardNo"
            fieldName="Credit_CardNo"
            changeHandler={inputChangeHandler}
          />

          <div className="col">
            <div className="form-group">
              <label>{props.t("Vendor.CardExpiry")}</label>
              <DatePicker
                selected={expirationDate}
                onChange={dateChangeHandler}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                className="form-control bg-light"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <InputField
            title="Vendor.CardHolder"
            fieldName="Card_Hold_Name"
            changeHandler={inputChangeHandler}
          />
        </div>

        <BillingAddressForm
          fieldChangeHandler={inputChangeHandler}
          hydrateReqBody={hydrateReqBody}
          vendorID={vendorID}
          showPreviousAddress={true}
        />
        <SubmitStepButton
          title="Vendor.Save"
          fieldChangeHandler={inputChangeHandler}
          countryID={1}
        />
      </form>
    </div>
  );
};

export default withTranslation(PaymentInfo);
