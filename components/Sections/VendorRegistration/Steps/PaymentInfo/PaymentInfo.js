import SubmitStepButton from "../../Reusable/SubmitStepButton";
import { useEffect, useState } from "react";
import InputField from "../../Reusable/InputField";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";

const initReqBody = {
  Payment_Id: 0,
  SubCompany_Id: 0,
  Company_Id: 0,
  FAPartnerId: 0,
  Credit_CardNo: "string",
  Credit_CardExp: "2023-01-22T15:35:49.274Z",
  Card_Hold_Name: "string",
  Entity_Id: 0,
  Computer_Name: "string",
  Active: true,
  User_Id: 0,
  Credit_CardExp_str: "string",
  Country_Id: 0,
  City_Id: 0,
  Gover_Id: 0,
  District_Id: 0,
  streetAdd: "string",
  buildingNo: "string",
};

const PaymentInfo = (props) => {
  const { vendorID } = props;
  const [requestBody, setRequestBody] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/addPartnerPayment"
    );
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
